// src/components/Tecnos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tecnos = () => {
    const [tecnos, setTecnos] = useState([]);
    const [tecnoData, setTecnoData] = useState({ technologies: '', images: [] });
    const [isEditing, setIsEditing] = useState(false);
    const [editTecnoId, setEditTecnoId] = useState(null);
    const [imageFiles, setImageFiles] = useState([]); // Para almacenar las imágenes seleccionadas

    // Función para obtener las tecnologías
    const fetchTecnologias = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/tecnos');
            setTecnos(response.data);
        } catch (error) {
            console.error('Error fetching technologies:', error);
        }
    };

    useEffect(() => {
        fetchTecnologias(); // Cargar las tecnologías al montar el componente
    }, []);

    // Manejar cambios en los campos de entrada
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTecnoData({ ...tecnoData, [name]: value });
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
            return axios.post('http://localhost:5000/api/tecnos/files/upload', formData, {
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

            const tecnoPayload = {
                technologies: tecnoData.technologies.split(',').map(tech => tech.trim()), // Convertir cadena a array
                images: imageUrls, // Añadir las URLs de las imágenes
            };

            if (isEditing) {
                await axios.put(`http://localhost:5000/api/tecnos/${editTecnoId}`, tecnoPayload);
            } else {
                await axios.post('http://localhost:5000/api/tecnos', tecnoPayload);
            }

            // Limpiar campos
            setTecnoData({ technologies: '', images: [] });
            setIsEditing(false);
            setEditTecnoId(null);
            fetchTecnologias(); // Actualizar la lista de tecnologías
            setImageFiles([]); // Limpiar archivos de imagen
        } catch (error) {
            console.error('Error saving technology:', error);
        }
    };

    // Manejar la edición de una tecnología
    const handleEdit = (tecno) => {
        setTecnoData({ technologies: tecno.technologies.join(', '), images: [] }); // Cargar datos de la tecnología en el formulario
        setIsEditing(true);
        setEditTecnoId(tecno._id);
    };

    // Manejar la eliminación de una tecnología
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/tecnos/${id}`);
            fetchTecnologias(); // Actualizar la lista de tecnologías
        } catch (error) {
            console.error('Error deleting technology:', error);
        }
    };

    return (
        <div>
            <h1>Administrar Tecnologías</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="technologies"
                    placeholder="Tecnologías (separadas por comas)"
                    value={tecnoData.technologies}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="file"
                    name="images"
                    onChange={handleImageChange}
                    accept="image/*"
                    multiple // Permitir seleccionar múltiples imágenes
                />
                <button type="submit">{isEditing ? 'Actualizar Tecnología' : 'Agregar Tecnología'}</button>
            </form>

            <h2>Lista de Tecnologías</h2>
            <ul>
                {tecnos.map((tecno) => (
                    <li key={tecno._id}>
                        <p>Tecnologías: {tecno.technologies.join(', ')}</p>
                        <p>Imágenes:</p>
                        <ul>
                            {tecno.images.map((image, index) => (
                                <li key={index}>
                                    <img src={image} alt={`Tecnología ${tecno.technologies[0]}`} style={{ width: '100px', height: '100px' }} />
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => handleEdit(tecno)}>Editar</button>
                        <button onClick={() => handleDelete(tecno._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tecnos;