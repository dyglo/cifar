import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs';
import ModelInfo from './pages/ModelInfo';
import './index.css'; // Ensure you have the CSS file imported

function App() {
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      const model = await tf.loadLayersModel('/model/model.json');
      setModel(model);
    };
    loadModel();
  }, []);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const image = await loadImage(file);
      const tensor = preprocessImage(image);
      if (model) {
        const prediction = model.predict(tensor) as tf.Tensor;
        const predictedClass = tf.argMax(prediction, 1).dataSync()[0];
        setPrediction(CLASSES[predictedClass]);
      } else {
        console.error('Model is not loaded yet');
      }
    }
  };

  const loadImage = (file: File): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => resolve(img);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const preprocessImage = (image: HTMLImageElement) => {
    const tensor = tf.browser.fromPixels(image)
      .resizeNearestNeighbor([32, 32])
      .toFloat()
      .expandDims();
    return tensor.div(tf.scalar(255));
  };

  const CLASSES = ['airplane', 'automobile', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck'];

  return (
    <div className="container mx-auto p-4">
      <ModelInfo />
      <div className="mt-8">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {prediction && <p className="mt-4 text-xl">Prediction: {prediction}</p>}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));