// src/components/Projects.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [projectData, setProjectData] = useState({ name: '', technologies: '', functions: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editProjectId, setEditProjectId] = useState(null);
    const [imageFiles, setImageFiles] = useState([]); // Para almacenar las imágenes seleccionadas

    // Función para obtener los proyectos
    const fetchProjects = async () => {
        try {
            const response = await axios.get('https://repositoriobackend.onrender.com/api/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    useEffect(() => {
        fetchProjects(); // Cargar los proyectos al montar el componente
    }, []);

    // Manejar cambios en los campos de entrada
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectData({ ...projectData, [name]: value });
    };

    // Manejar el cambio de imágenes
    const handleImageChange = (e) => {
        setImageFiles(Array.from(e.target.files)); // Almacenar los archivos de imagen seleccionados
    };

    // Manejar la carga de imágenes a Cloudinary
    const uploadImages = async () => {
        const uploadPromises = imageFiles.map(file => {
            const formData = new FormData();
            formData.append('file', file);
            return axios.post('https://repositoriobackend.onrender.com/api/projects/files/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
        });

        // Espera a que todas las imágenes se suban
        const uploadResponses = await Promise.all(uploadPromises);
        return uploadResponses.map(response => response.data.fileUrl); // Devuelve las URLs
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let imageUrls = [];
            if (imageFiles.length > 0) {
                imageUrls = await uploadImages(); // Sube las imágenes y obtén las URLs
            }

            const projectPayload = {
                ...projectData,
                images: imageUrls, // Añadir las URLs de las imágenes
            };

            if (isEditing) {
                await axios.put(`https://repositoriobackend.onrender.com/api/projects/${editProjectId}`, projectPayload);
            } else {
                await axios.post('https://repositoriobackend.onrender.com/api/projects', projectPayload);
            }

            // Limpiar campos
            setProjectData({ name: '', technologies: '', functions: '' });
            setIsEditing(false);
            setEditProjectId(null);
            fetchProjects(); // Actualizar la lista de proyectos
            setImageFiles([]); // Limpiar archivos de imagen
        } catch (error) {
            console.error('Error saving project:', error);
        }
    };

    // Manejar la edición de un proyecto
    const handleEdit = (project) => {
        setProjectData(project); // Cargar datos del proyecto en el formulario
        setIsEditing(true);
        setEditProjectId(project._id);
    };

    // Manejar la eliminación de un proyecto
    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://repositoriobackend.onrender.com/api/projects/${id}`);
            fetchProjects(); // Actualizar la lista de proyectos
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <div>
            <h1>Administrar Proyectos</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre del Proyecto"
                    value={projectData.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="technologies"
                    placeholder="Tecnologías (separadas por comas)"
                    value={projectData.technologies}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="functions"
                    placeholder="Funciones del Proyecto"
                    value={projectData.functions}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="file"
                    name="images"
                    onChange={handleImageChange}
                    accept="image/*"
                    multiple // Permitir seleccionar múltiples imágenes
                    required
                />
                <button type="submit">{isEditing ? 'Actualizar Proyecto' : 'Agregar Proyecto'}</button>
            </form>

            <h2>Lista de Proyectos</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project._id}>
                        <h3>{project.name}</h3>
                        <p>Tecnologías: {project.technologies.join(', ')}</p>
                        <p>Funciones: {project.functions}</p>
                        <p>Imágenes:</p>
                        <ul>
                            {project.images.map((image, index) => (
                                <li key={index}>
                                    <img src={image} alt={`Proyecto ${project.name}`} style={{ width: '100px', height: '100px' }} />
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => handleEdit(project)}>Editar</button>
                        <button onClick={() => handleDelete(project._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;