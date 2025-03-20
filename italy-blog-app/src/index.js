import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //accessing the root from html to push into there
root.render( //this is where you type HTML because you are rendering
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


