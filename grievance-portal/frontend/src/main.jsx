import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import '../index.css';  // Ensure Tailwind CSS is imported here
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
