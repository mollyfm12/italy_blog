import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import Florence from './pages/Florence';
import Florence1a from './pages/Florence1a';
import Italy from './pages/Italy';
import Euro from './pages/Euro';
import Budapest from './pages/Budapest';
import FAQ from './pages/FAQ';
import Nopage from './pages/Nopage';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/florence" element={<Florence />} />
          <Route path="/florence-1a" element={<Florence1a />} />
          <Route path="/italy" element={<Italy />} />
          <Route path="/euro" element={<Euro />} />
          <Route path="/budapest" element={<Budapest />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
