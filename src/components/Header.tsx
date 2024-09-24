import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">Home</Link></li>
          <li><Link to="/model-info" className="text-blue-600 dark:text-blue-400 hover:underline">Model Info</Link></li>
        </ul>
      </nav>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}

export default Header;