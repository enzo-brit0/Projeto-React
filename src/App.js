// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Usando BrowserRouter

// Componentes Estáticos
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas (4 Páginas no Mínimo)
import Home from './pages/Home'; // 1. HOME (Obrigatória)
import Planetas from './pages/Planetas'; // 2. Planetas
import Sobre from './pages/Sobre';
import Contato from './pages/Contato'; // 4. Contato

function App() {
  // Estilo para garantir que o rodapé fixo não cubra o conteúdo.
  const contentStyle = {
    paddingBottom: '80px', // Espaço suficiente para o Footer
    paddingTop: '65px',   // Espaço suficiente para o Navbar
    minHeight: '100vh',
    boxSizing: 'border-box',
  }
  
  return (
    <BrowserRouter>
      {/* Componente fixo em todas as rotas */}
      <Navbar /> 

      <main style={contentStyle}>
        {/* Controla a exibição das páginas (SPA) */}
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/planetas" element={<Planetas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      {/* Componente fixo em todas as rotas */}
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;