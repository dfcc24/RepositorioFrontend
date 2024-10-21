// src/pages/LandingPage.js
import React, { useEffect, useState } from 'react';
import { getExperiences, getSocialMedia } from '../services/dashboardApi';
import Email from '../components/Email';
import TextCard from '../components/TextCard'; // Corrige la ruta aquí
import '../styles/email.css';

const LandingPage = () => {
  const [proyectos, setProyectos] = useState([]);
  const [experiencias, setExperiencias] = useState([]);
  const [socials, setSocials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tecnos, setTecnos] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectResponse, experienceData, socialMediaData, tecnoResponse] = await Promise.all([
          fetch('http://localhost:5000/api/projects').then(res => res.json()),
          getExperiences(),
          getSocialMedia(),
          fetch('http://localhost:5000/api/tecnos').then(res => res.json())
        ]);

        setProyectos(projectResponse);
        setExperiencias(experienceData);
        setSocials(socialMediaData);
        setTecnos(tecnoResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando contenido...</p>;
  }

  return (
    <div>
      {/* Header con enlaces a las secciones */}
      <header style={headerStyle}>
        <h1>Bienvenido a Mi Portafolio</h1>
        <nav>
          <a href="#proyectos" style={navLinkStyle}>Proyectos</a>
          <a href="#experiencias" style={navLinkStyle}>Experiencias</a>
          <a href="#contacto" style={navLinkStyle}>Redes Sociales</a>
          <a href="#tecnologias" style={navLinkStyle}>Tecnologías</a>
          <a href="/admin" style={navButtonStyle}>Admin</a>
        </nav>
      </header>

      {/* Sección de Bienvenida con imagen */}
      <section id="welcome" style={welcomeSectionStyle}>
        <img 
          src="/baner-presentacion.png" 
          alt="Banner de Presentación" 
          style={welcomeImageStyle} 
        />
      </section>

      {/* Sección de Proyectos */}
      <section id="proyectos" style={projectSectionStyle}>
        <h2 style={sectionTitleStyle}>Proyectos</h2>
        <div style={projectContainerStyle}>
          {proyectos.length > 0 ? (
            proyectos.map((proyecto) => (
              <div key={proyecto._id} style={cardStyle}>
                <h3>{proyecto.name}</h3>
                <p><strong>Funciones:</strong> {proyecto.functions}</p>
                <p><strong>Tecnologías:</strong> {proyecto.technologies.join(', ')}</p>
                <div style={imageContainerStyle}>
                  {proyecto.images.map((image, index) => (
                    <img key={index} src={image} alt={`Proyecto ${proyecto.name}`} style={imageStyle} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No hay proyectos disponibles.</p>
          )}
        </div>
      </section>

      {/* Sección de Experiencias */}
      <section id="experiencias" style={experienceSectionStyle}>
        <h2 style={sectionTitleStyle}>Experiencias Profesionales</h2>
        <div style={experienceContainerStyle}>
          {experiencias.length > 0 ? (
            experiencias.map((exp) => (
              <div key={exp._id} style={cardStyle}>
                <h3>{exp.cargo} en {exp.company}</h3>
                <p>{exp.achievements}</p>
                <p><strong>Fecha:</strong> {exp.dates}</p>
              </div>
            ))
          ) : (
            <p>No hay experiencias disponibles.</p>
          )}
        </div>
      </section>

      {/* Sección de Tecnologías */}
      <section id="tecnologias" style={tecnoSectionStyle}>
        <h2 style={sectionTitleStyle}>Tecnologías</h2>
        <div style={tecnoContainerStyle}>
          {tecnos.length > 0 ? (
            tecnos.map((tecno, index) => (
              <div 
                key={tecno._id} 
                style={hoverIndex === index ? { ...tecnoCardStyle, ...tecnoCardHoverStyle } : tecnoCardStyle} 
                onMouseEnter={() => setHoverIndex(index)} 
                onMouseLeave={() => setHoverIndex(null)}
              >
                <p><strong>Tecnologías:</strong> {tecno.technologies.join(', ')}</p>
                <div style={imageContainerStyle}>
                  {tecno.images.map((image, index) => (
                    <img key={index} src={image} alt={""} style={imageStyle} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No hay tecnologías disponibles.</p>
          )}
        </div>
      </section>

       {/* Sección de Contacto */}
       <section id="contacto" style={contactSectionStyle}>
        <h2>Contacto</h2>
        <p>Puedes contactarme a través de mis redes sociales o explorar mis tecnologías.</p>

        {/* Renderizamos las redes sociales */}
        <div style={socialMediaContainerStyle}>
          {socials.length > 0 ? (
            socials.map((social) => (
              <div key={social._id} style={socialCardStyle}>
                <img src={social.icon} alt={social.name} style={socialIconStyle} />
                <a href={social.link} target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                  {social.name}
                </a>
              </div>
            ))
          ) : (
            <p>No hay redes sociales disponibles.</p> // Mensaje si no hay redes sociales
          )}
        </div>
      </section>
              <TextCard />
              <div>     
        <Email />
        </div>
    </div>
  );
};



// Estilos personalizados para el landing page
const headerStyle = {
  backgroundColor: '#2c3e50',
  color: '#ecf0f1',
  padding: '8px',
  textAlign: 'center',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  zIndex: 1,
};

const navLinkStyle = {
  margin: '0 15px',
  color: '#ecf0f1',
  textDecoration: 'none',
  fontSize: '1.2rem',
  transition: 'color 0.3s ease-in-out',
};

const navButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#e74c3c',
  border: 'none',
  borderRadius: '5px',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease-in-out',
};

const welcomeSectionStyle = {
  padding: '5px 0',
  textAlign: 'center',
  background: '#161616',
  color: 'white',
};

const welcomeImageStyle = {
  maxWidth: '200%',
  height: '450px',
  objectFit: 'contain',
  borderRadius: '10px',
};

const projectSectionStyle = {
  padding: '20px',
};

const projectContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '300px',
  textAlign: 'justify',
};

const experienceSectionStyle = {
  padding: '20px',
};

const experienceContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
};

const tecnoSectionStyle = {
  marginTop: '40px',
  padding: '20px',
};

const tecnoCardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: 'calc(9% - 20px)',
  textAlign: 'justify',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
};

const tecnoCardHoverStyle = {
  transform: 'translateY(-10px)',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)',
};

const tecnoContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
};

const imageStyle = {
  width: '100px',
  height: 'auto',
};

const contactSectionStyle = {
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#ecf0f1'
};

const socialMediaContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const socialCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const socialIconStyle = {
  width: '50px',
  height: '50px',
};

const socialLinkStyle = {
  marginTop: '10px',
  color: '#3498db',
  textDecoration: 'none',
  fontSize: '1rem',
};

const sectionTitleStyle = {
  textAlign: 'center',
  fontSize: '2rem',
  margin: '20px 0',
};

export default LandingPage;
