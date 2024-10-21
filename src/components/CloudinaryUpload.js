import React, { useState } from 'react';
import axios from 'axios';

const CloudinaryUpload = () => {
    const [images, setImages] = useState([]); // Estado para almacenar las imágenes subidas
    const [uploading, setUploading] = useState(false); // Estado de carga
    const [error, setError] = useState(null); // Estado de error

    // Manejar la subida de imágenes
    const handleImageUpload = async (e) => {
        const files = e.target.files; // Obtén el archivo del input
        const formData = new FormData();

        formData.append('file', files[0]); // Subir solo el primer archivo (ajustable para múltiples)
        formData.append('upload_preset', 'ml_default'); // Reemplaza con tu preset de Cloudinary

        try {
            setUploading(true); // Establecer estado de carga
            setError(null); // Limpiar errores anteriores

            // Hacer una petición a Cloudinary para subir la imagen
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dwzxkhn87/image/upload`, // Reemplaza con tu Cloud Name
                formData
            );

            // Crear un objeto de imagen con la URL y la miniatura
            const newImage = {
                url: response.data.secure_url, // URL segura de la imagen
                thumbnail: response.data.secure_url // Usa la URL de la imagen como miniatura (puedes ajustarla si tienes transformaciones en Cloudinary)
            };

            // Agregar la nueva imagen al estado
            setImages((prevImages) => [...prevImages, newImage]);

        } catch (err) {
            console.error('Error uploading the image:', err);
            setError('Error al subir la imagen. Inténtalo de nuevo.'); // Mensaje de error
        } finally {
            setUploading(false); // Termina el estado de carga
        }
    };

    return (
        <div>
            <h2>Subir Imágenes a Cloudinary</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el error si existe */}

            {/* Input de archivo */}
            <input 
                type="file" 
                onChange={handleImageUpload} 
                accept="image/*" // Acepta solo imágenes
                disabled={uploading} // Deshabilita mientras se está subiendo
            />
            
            {uploading && <p>Subiendo imagen...</p>} {/* Muestra mensaje de subida */}

            {/* Lista de URLs e imágenes subidas */}
            <ul>
                {images.map((image, index) => (
                    <li key={index}>
                        <p>URL: <a href={image.url} target="_blank" rel="noopener noreferrer">{image.url}</a></p>
                        <img src={image.thumbnail} alt={`Imagen ${index}`} style={{ width: '100px' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CloudinaryUpload;
