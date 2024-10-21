// src/components/Experiences.js
import React, { useEffect, useState } from 'react';
import { createExperience, deleteExperience, getExperiences, updateExperience } from '../services/dashboardApi';

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState({ company: '', achievements: '', dates: '' });
    const [editingExperience, setEditingExperience] = useState(null);

    // Obtener experiencias al cargar el componente
    useEffect(() => {
        const fetchExperiences = async () => {
            const fetchedExperiences = await getExperiences();
            setExperiences(fetchedExperiences);
        };

        fetchExperiences();
    }, []);

    // Manejar la creación de experiencia
    const handleCreateExperience = async () => {
        try {
            const createdExperience = await createExperience(newExperience);
            setExperiences([...experiences, createdExperience]); // Actualizar la lista de experiencias
            setNewExperience({ company: '', achievements: '', dates: '' }); // Resetear el formulario
        } catch (error) {
            console.error('Error creating experience:', error);
        }
    };

    // Manejar la actualización de experiencia
    const handleUpdateExperience = async () => {
        try {
            const updated = await updateExperience(editingExperience._id, newExperience);
            setExperiences(experiences.map(exp => (exp._id === updated._id ? updated : exp))); // Actualizar la lista de experiencias
            setNewExperience({ company: '', achievements: '', dates: '' }); // Resetear el formulario
            setEditingExperience(null); // Limpiar estado de edición
        } catch (error) {
            console.error('Error updating experience:', error);
        }
    };

    // Manejar la eliminación de experiencia
    const handleDeleteExperience = async (id) => {
        try {
            await deleteExperience(id);
            setExperiences(experiences.filter(exp => exp._id !== id)); // Actualizar la lista de experiencias
        } catch (error) {
            console.error('Error deleting experience:', error);
        }
    };

    // Manejar la edición de una experiencia
    const handleEditExperience = (experience) => {
        setEditingExperience(experience);
        setNewExperience({ company: experience.company, achievements: experience.achievements, dates: experience.dates });
    };

    return (
        <div>
            <h2>Experiencias</h2>
            <input
                type="text"
                placeholder="Nombre de la Empresa"
                value={newExperience.company}
                onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
            />
            <input
                type="text"
                placeholder="Logros"
                value={newExperience.achievements}
                onChange={(e) => setNewExperience({ ...newExperience, achievements: e.target.value })}
            />
            <input
                type="text"
                placeholder="Fechas"
                value={newExperience.dates}
                onChange={(e) => setNewExperience({ ...newExperience, dates: e.target.value })}
            />
            <button onClick={editingExperience ? handleUpdateExperience : handleCreateExperience}>
                {editingExperience ? 'Actualizar Experiencia' : 'Agregar Experiencia'}
            </button>

            <ul>
                {experiences.map(experience => (
                    <li key={experience._id}>
                        {experience.company} - {experience.achievements} ({experience.dates})
                        <button onClick={() => handleEditExperience(experience)}>Editar</button>
                        <button onClick={() => handleDeleteExperience(experience._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experiences;
