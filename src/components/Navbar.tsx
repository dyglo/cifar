import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Flower Classifier</div>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/model-info" className="text-white">Model Info</Link>
          <Link to="/training-visualization" className="text-white">Training Visualization</Link>
          <Link to="/results-history" className="text-white">Results History</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;