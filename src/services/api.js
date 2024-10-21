// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Cambia esto a tu URL de backend

// Función para iniciar sesión
export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    return response.data; // Devuelve el token y otros datos del usuario
};

// Función para obtener proyectos
export const fetchProjects = async (token) => {
    const response = await axios.get(`${API_URL}/projects`, {
        headers: {
            Authorization: `Bearer ${token}`, // Incluye el token en las cabeceras
        },
    });
    return response.data; // Devuelve la lista de proyectos
};

// Función para obtener experiencias
export const fetchExperiences = async (token) => {
    const response = await axios.get(`${API_URL}/experiences`, {
        headers: {
            Authorization: `Bearer ${token}`, // Incluye el token en las cabeceras
        },
    });
    return response.data; // Devuelve la lista de experiencias
};

// Función para obtener tecnologias
export const fetchTecnos = async (token) => {
    const response = await axios.get(`${API_URL}/tecnos`, {
        headers: {
            Authorization: `Bearer ${token}`, // Incluye el token en las cabeceras
        },
    });
    return response.data; // Devuelve la lista de proyectos
};



// Función para cerrar sesión
export const logout = () => {
    return {
        type: 'LOGOUT', // Despacha la acción de logout
    };
};
