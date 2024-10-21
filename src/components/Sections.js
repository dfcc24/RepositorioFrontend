// src/components/Sections.js
import React, { useState } from 'react';
import { createSection, deleteSection } from '../services/dashboardApi';

const Sections = ({ sections }) => {
    const [newSection, setNewSection] = useState({ title: '', text: '' });

    const handleCreateSection = async () => {
        await createSection(newSection);
        setNewSection({ title: '', text: '' }); // Resetear el formulario
        // Aquí puedes llamar a una función para refrescar la lista de secciones
    };

    const handleDeleteSection = async (id) => {
        await deleteSection(id);
        // Aquí puedes llamar a una función para refrescar la lista de secciones
    };

    return (
        <div>
            <h2>Secciones</h2>
            <input
                type="text"
                placeholder="Título"
                value={newSection.title}
                onChange={(e) => setNewSection({ ...newSection, title: e.target.value })}
            />
            <input
                type="text"
                placeholder="Texto"
                value={newSection.text}
                onChange={(e) => setNewSection({ ...newSection, text: e.target.value })}
            />
            <button onClick={handleCreateSection}>Agregar Sección</button>

            <ul>
                {sections.map(section => (
                    <li key={section._id}>
                        {section.title} - {section.text}
                        <button onClick={() => handleDeleteSection(section._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sections;
