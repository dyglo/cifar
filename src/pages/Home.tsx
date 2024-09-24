import React from 'react';
import * as tf from '@tensorflow/tfjs';
import ImageUpload from '../components/ImageUpload';

interface HomeProps {
  model: tf.LayersModel | null;
  onPrediction: (prediction: string, confidence: number) => void;
}

const Home: React.FC<HomeProps> = ({ model, onPrediction }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Flower Image Classification</h1>
      <ImageUpload model={model} onPrediction={onPrediction} />
    </div>
  );
};

export default Home;