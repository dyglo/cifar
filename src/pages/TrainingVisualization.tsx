import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { epoch: 1, train_acc: 0.6260, val_acc: 0.6910, train_loss: 1.0564, val_loss: 0.8762 },
  { epoch: 5, train_acc: 0.7267, val_acc: 0.7434, train_loss: 0.7736, val_loss: 0.7234 },
  { epoch: 10, train_acc: 0.7760, val_acc: 0.7616, train_loss: 0.6329, val_loss: 0.6840 },
  { epoch: 15, train_acc: 0.8063, val_acc: 0.7898, train_loss: 0.5515, val_loss: 0.6203 },
  { epoch: 20, train_acc: 0.8264, val_acc: 0.8034, train_loss: 0.4921, val_loss: 0.5891 },
  { epoch: 25, train_acc: 0.8417, val_acc: 0.8008, train_loss: 0.4520, val_loss: 0.6043 },
  { epoch: 30, train_acc: 0.8535, val_acc: 0.7960, train_loss: 0.4164, val_loss: 0.6655 },
  { epoch: 35, train_acc: 0.8623, val_acc: 0.8016, train_loss: 0.3879, val_loss: 0.6327 },
  { epoch: 39, train_acc: 0.8689, val_acc: 0.8106, train_loss: 0.3713, val_loss: 0.5959 },
];

const TrainingVisualization = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="epoch" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line yAxisId="left" type="monotone" dataKey="train_acc" stroke="#8884d8" name="Training Accuracy" />
      <Line yAxisId="left" type="monotone" dataKey="val_acc" stroke="#82ca9d" name="Validation Accuracy" />
      <Line yAxisId="right" type="monotone" dataKey="train_loss" stroke="#ffc658" name="Training Loss" />
      <Line yAxisId="right" type="monotone" dataKey="val_loss" stroke="#ff7300" name="Validation Loss" />
    </LineChart>
  </ResponsiveContainer>
);

export default TrainingVisualization;