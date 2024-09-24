import React from 'react';

interface ResultsHistoryProps {
  history: { prediction: string, confidence: number }[];
}

function ResultsHistory({ history }: ResultsHistoryProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Results History</h2>
      <ul>
        {history.map((result, index) => (
          <li key={index} className="mb-2">
            <p>Prediction: {result.prediction}</p>
            <p>Confidence: {(result.confidence * 100).toFixed(2)}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsHistory;