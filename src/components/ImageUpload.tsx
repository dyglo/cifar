import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';

interface ImageUploadProps {
  model: tf.LayersModel | null;
  onPrediction: (prediction: string, confidence: number) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ model, onPrediction }) => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const classifyImage = async () => {
    if (model && typeof image === 'string') {
      const img = new Image();
      img.src = image;
      img.onload = async () => {
        const tensor = tf.browser.fromPixels(img).resizeNearestNeighbor([224, 224]).toFloat().expandDims();
        const predictions = model.predict(tensor);
        let predictionData;
        if (Array.isArray(predictions)) {
          predictionData = await Promise.all(predictions.map(p => p.data()));
        } else {
          predictionData = await predictions.data();
        }
        const prediction = String(predictionData[0]); // Ensure prediction is a string
        const confidence = predictionData[1] as number; // Ensure confidence is a number
        setPrediction(prediction);
        setConfidence(confidence);
        onPrediction(prediction, confidence);
      };
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image as string} alt="Uploaded" className="mt-4" />}
      {image && <button onClick={classifyImage} className="mt-4 p-2 bg-blue-500 text-white rounded">Classify Image</button>}
      {prediction && confidence !== null && (
        <div className="mt-4">
          <p><strong>Prediction:</strong> {prediction}</p>
          <p><strong>Confidence:</strong> {confidence}%</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;