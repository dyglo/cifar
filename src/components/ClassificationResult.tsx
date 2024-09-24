import React from 'react';

interface ClassificationResultProps {
  result: { species: string; confidence: number };
}

function ClassificationResult({ result }: ClassificationResultProps) {
  return (
    <div className="mt-8 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Classification Result</h2>
      <p className="text-lg">Species: <span className="font-bold">{result.species}</span></p>
      <p className="text-lg">Confidence: <span className="font-bold">{(result.confidence * 100).toFixed(2)}%</span></p>
    </div>
  );
}

export default ClassificationResult;