// src/components/SocialMedia.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SocialMedia = () => {
    const [socials, setSocials] = useState([]);
    const [newSocial, setNewSocial] = useState({ name: '', url: '', icon: '', link: '' }); // Añadir 'link' aquí
    const [editingSocial, setEditingSocial] = useState(null);
    const [iconFile, setIconFile] = useState(null); // Para almacenar el archivo de ícono
    const [file, setFile] = useState(null); // Para almacenar otro archivo

    // Cargar redes sociales al montar el componente
    useEffect(() => {
        const fetchSocialMedia = async () => {
            try {
                const response = await axios.get('https://repositoriobackend.onrender.com/api/social-media');
                setSocials(response.data);
            } catch (error) {
                console.error('Error fetching social media:', error);
            }
        };

        fetchSocialMedia();
    }, []);

    // Manejar la creación de una nueva red social
    const handleCreateSocial = async () => {
        try {
            const formData = new FormData();
            formData.append('icon', iconFile);
            formData.append('file', file); // Asegúrate de que también estés enviando el archivo

            // Subir los archivos a Cloudinary
            const uploadResponse = await axios.post('https://repositoriobackend.onrender.com/api/social-media/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const createdSocial = await axios.post('https://repositoriobackend.onrender.com/api/social-media', {
                name: newSocial.name,   // El nombre
                url: newSocial.url,     // La URL (esto podría ser el link)
                icon: uploadResponse.data.iconUrl, // Usar la URL del ícono
                link: newSocial.link,     // Asegúrate de enviar el link también
            });

            setSocials([...socials, createdSocial.data]);
            setNewSocial({ name: '', url: '', icon: '', link: '' }); // Reiniciar todos los campos
            setIconFile(null);
            setFile(null); // Reiniciar el archivo adicional
        } catch (error) {
            console.error('Error creating social media:', error.response ? error.response.data : error.message);
        }
    };

    // Manejar la edición de una red social
    const handleEditSocial = (social) => {
        setEditingSocial(social);
        setNewSocial({ name: social.name, url: social.url, icon: social.icon, link: social.link }); // Asegúrate de incluir 'link' aquí
    };

    // Manejar la actualización de una red social
    const handleUpdateSocial = async () => {
        try {
            let iconUrl = newSocial.icon;
            if (iconFile) {
                const formData = new FormData();
                formData.append('icon', iconFile);
                const iconResponse = await axios.post('https://repositoriobackend.onrender.com/api/social-media/files/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                iconUrl = iconResponse.data.iconUrl; // Usar la nueva URL
            }

            const updatedSocial = await axios.put(`https://repositoriobackend.onrender.com/api/social-media/${editingSocial._id}`, {
                name: newSocial.name,
                url: newSocial.url,
                icon: iconUrl,
                link: newSocial.link, // Asegúrate de incluir 'link' aquí también
            });

            // Actualizar la lista de redes sociales
            setSocials(socials.map(social => (social._id === updatedSocial.data._id ? updatedSocial.data : social)));
            setNewSocial({ name: '', url: '', icon: '', link: '' }); // Reiniciar todos los campos
            setEditingSocial(null);
            setIconFile(null); // Reiniciar el archivo de ícono
        } catch (error) {
            console.error('Error updating social media:', error);
        }
    };

    // Manejar la eliminación de una red social
    const handleDeleteSocial = async (id) => {
        try {
            await axios.delete(`https://repositoriobackend.onrender.com/api/social-media/${id}`);
            setSocials(socials.filter(social => social._id !== id));
        } catch (error) {
            console.error('Error deleting social media:', error);
        }
    };

    return (
        <div>
            <h2>Redes Sociales</h2>
            <div>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={newSocial.name}
                    onChange={(e) => setNewSocial({ ...newSocial, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="URL"
                    value={newSocial.url}
                    onChange={(e) => setNewSocial({ ...newSocial, url: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Link"  // Cambia el placeholder a algo más descriptivo
                    value={newSocial.link}  // Usa 'link' en lugar de 'url' si ese es el nombre correcto
                    onChange={(e) => setNewSocial({ ...newSocial, link: e.target.value })}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setIconFile(e.target.files[0])} // Guardar el archivo de ícono
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])} // Guardar otro archivo
                />
                {editingSocial ? (
                    <button onClick={handleUpdateSocial}>Actualizar</button>
                ) : (
                    <button onClick={handleCreateSocial}>Crear</button>
                )}
            </div>
            <div>
                {socials.map(social => (
                    <div key={social._id}>
                        <img src={social.icon} alt={social.name} style={{ width: 30, height: 30 }} />
                        <a href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
                        <button onClick={() => handleEditSocial(social)}>Editar</button>
                        <button onClick={() => handleDeleteSocial(social._id)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialMedia;
