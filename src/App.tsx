import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as tf from '@tensorflow/tfjs';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ModelInfo from './pages/ModelInfo';
import TrainingVisualization from './pages/TrainingVisualization';
import ResultsHistory from './pages/ResultsHistory';
import './index.css';

function App() {
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [history, setHistory] = useState<{ prediction: string, confidence: number }[]>([]);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const model = await tf.loadLayersModel('/model/model.json');
        setModel(model);
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };
    loadModel();
  }, []);

  const handlePrediction = (prediction: string, confidence: number) => {
    setHistory([...history, { prediction, confidence }]);
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home model={model} onPrediction={handlePrediction} />} />
          <Route path="/model-info" element={<ModelInfo />} />
          <Route path="/training-visualization" element={<TrainingVisualization />} />
          <Route path="/results-history" element={<ResultsHistory history={history} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;