import React from 'react';

interface ResultsHistoryProps {
  history: { prediction: string, confidence: number }[];
}

const ResultsHistory: React.FC<ResultsHistoryProps> = ({ history }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Results History</h1>
      <ul>
        {history.map((item, index) => (
          <li key={index} className="mb-2">
            <strong>Prediction:</strong> {item.prediction}, <strong>Confidence:</strong> {item.confidence}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsHistory;