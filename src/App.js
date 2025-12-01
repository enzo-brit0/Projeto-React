
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Planetas from './pages/Planetas'; 
import Sobre from './pages/Sobre';
import Contato from './pages/Contato'; 

function App() {
  const contentStyle = {
    paddingBottom: '80px',
    paddingTop: '65px',  
    minHeight: '100vh',
    boxSizing: 'border-box',
  }
  
  return (
    <BrowserRouter>
      {}
      <Navbar /> 

      <main style={contentStyle}>
        {}
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/planetas" element={<Planetas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      {}
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;