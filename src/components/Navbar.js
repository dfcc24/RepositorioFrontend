import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css'; // Asegúrate de tener los estilos separados en este archivo

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  // Manejar la visibilidad al acercar o alejar el cursor del borde izquierdo
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.clientX < 50) { // Si el cursor está a 50px o menos del borde izquierdo
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove); // Limpiar el evento al desmontar
    };
  }, []);

  return (
    <div className={`navbar ${visible ? 'visible' : ''}`}>
      {/* Contenedor del logo e imagen flotante */}
      <div className="navbar-card">
        <img src="/favicon.ico" alt="Logo" className="navbar-logo" />
        <h2 className="navbar-title">MENÚ</h2>
      </div>

      {/* Links del menú */}
      <nav className="navbar-links">
        <a href="/">Principal</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#experiencias">Experiencias</a>
        <a href="#tecnologias">Tecnologías</a>
        <a href="#contacto">Contacto</a>
        <a href="/admin" className="admin-button">Admin</a>
      </nav>
    </div>
  );
};

export default Navbar;
