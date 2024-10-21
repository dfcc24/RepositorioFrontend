import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/pages/Home'; // Importa el LandingPage
import Dashboard from '../src/pages/Dashboard'; // Importa el Dashboard
import Admin from '../src/pages/Admin'; // Importa la página de autenticación Admin
import Navbar from './components/Navbar'; // Importa el Navbar
import Footer from '../src/components/Footer';

function App() {
  return (
    <Router>
      {/* El Navbar se mostrará en todas las rutas */}
      <Navbar />
      <Routes>
        {/* Ruta de la Landing Page (Página Principal) */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Ruta de la página de autenticación del administrador */}
        <Route path="/admin" element={<Admin />} />

        {/* Ruta protegida del Dashboard (puedes agregar protección más adelante) */}
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
