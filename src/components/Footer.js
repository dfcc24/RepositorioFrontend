// src/components/Footer.js
import React from 'react';

// Importa los iconos que quieras usar. Aquí estoy usando FontAwesome como ejemplo
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

// Estilos personalizados para el footer
const footerStyle = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '20px',
    textAlign: 'center',
};

const iconStyle = {
    margin: '0 10px',
    color: '#ecf0f1',
    fontSize: '1.5rem',
    transition: 'color 0.3s ease-in-out',
};

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} Deyvis Fabiany Cruz. C.E.O. Softsoltions - Todos los derechos reservados.</p>
            <div>
                <a href="https://www.facebook.com/Terasystem.E.U?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com/deyviscarvajal?igsh=bW82NjNmcm15ams0" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <FaInstagram />
                </a>
                <a href="www.linkedin.com/in/
fabian-cruz-3a6299a5
" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <FaLinkedin />
                </a>
                <a href="https://api.whatsapp.com/send?phone=3153411850" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <FaWhatsapp />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
