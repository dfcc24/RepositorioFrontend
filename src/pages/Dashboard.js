import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom'; // Usamos Link para navegar entre rutas
import Projects from '../components/Projects';
import Experiences from '../components/Experiences';
import SocialMedia from '../components/SocialMedia';
import Tecnos from '../components/Tecnos';
import CloudinaryUpload from '../components/CloudinaryUpload'; // Importamos CloudinaryUpload
import { getProjects, getExperiences, getSocialMedia, getTecnos, } from '../services/dashboardApi'; // Quitamos secciones
import '../styles/Dashboard.css'; // Importamos el archivo CSS


const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [socialMedia, setSocialMedia] = useState([]);
    const [tecnos, setTecnos] = useState([]);

    const fetchData = async () => {
        try {
            const [projectsData, experiencesData, socialMediaData, tecnosData] = await Promise.all([
                getProjects(),
                getExperiences(),
                getSocialMedia(),
                getTecnos(),
            ]);

            setProjects(projectsData);
            setExperiences(experiencesData);
            setSocialMedia(socialMediaData);
            setTecnos(tecnosData);
        } catch (error) {
            console.error('Error al cargar los datos del Dashboard:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h2>Bienvenido al Dashboard</h2>

            {/* Botones flotantes organizados de manera lineal */}
            <div className="button-container">
                <Link to="projects" className="floating-button">Proyectos</Link>
                <Link to="experiences" className="floating-button">Experiencias</Link>
                <Link to="social-media" className="floating-button">Redes Sociales</Link>
                <Link to="tecnos" className="floating-button">Tecnologias</Link>
                <Link to="upload" className="floating-button">Backup Imagenes</Link> {/* Botón para Cloudinary */}
            </div>

            {/* Aquí van las rutas específicas del dashboard */}
            <Routes>
                <Route path="projects" element={<Projects projects={projects} />} />
                <Route path="experiences" element={<Experiences experiences={experiences} />} />
                <Route path="social-media" element={<SocialMedia socialMedia={socialMedia} />} />
                <Route path="upload" element={<CloudinaryUpload />} /> {/* Ruta para subir imágenes */}
                <Route path="tecnos" element={<Tecnos tecnos={tecnos} />} />
                <Route path="/" element={<h3>Selecciona una opción del Dashboard</h3>} />
            </Routes>
        </div>
    );
};

export default Dashboard;
