import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';

function App() {
  return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')); //accessing the root from html to push into there
root.render( //this is where you type HTML because you are rendering
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


