// src/services/dashboardApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Cambia esto a tu URL de backend

// Funciones para proyectos
export const getProjects = async () => {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
};

export const createProject = async (project) => {
    const response = await axios.post(`${API_URL}/projects`, project);
    return response.data; // Devuelve el proyecto creado
};

export const deleteProject = async (id) => {
    await axios.delete(`${API_URL}/projects/${id}`);
};

// Funciones para experiencias
export const getExperiences = async () => {
    const response = await axios.get(`${API_URL}/experiences`);
    return response.data;
};

export const createExperience = async (experience) => {
    const response = await axios.post(`${API_URL}/experiences`, experience);
    return response.data; // Devuelve la experiencia creada
};

export const updateExperience = async (id, experience) => {
    const response = await axios.put(`${API_URL}/experiences/${id}`, experience);
    return response.data; // Devuelve la experiencia actualizada
};

export const deleteExperience = async (id) => {
    await axios.delete(`${API_URL}/experiences/${id}`);
};


// Funciones para Tecno
export const getTecnos = async () => {
    const response = await axios.get(`${API_URL}/tecnos`);
    return response.data;
};

export const createTecno = async (tecno) => {
    const response = await axios.post(`${API_URL}/tecnos`, tecno); // Corregido a /tecnos
    return response.data;
};

export const deleteTecno = async (id) => {
    await axios.delete(`${API_URL}/tecnos/${id}`);
};

// src/services/dashboardApi.js

export const createSocialMedia = async (social) => {
    const response = await axios.post(`${API_URL}/social-media`, social);
    return response.data; // Devuelve la red social creada
};

export const updateSocialMedia = async (id, social) => {
    const response = await axios.put(`${API_URL}/social-media/${id}`, social);
    return response.data; // Devuelve la red social actualizada
};

export const deleteSocialMedia = async (id) => {
    await axios.delete(`${API_URL}/social-media/${id}`);
};


// Funciones para secciones
export const getSections = async () => {
    const response = await axios.get(`${API_URL}/sections`);
    return response.data;
};

export const createSection = async (section) => {
    const response = await axios.post(`${API_URL}/sections`, section);
    return response.data; // Devuelve la sección creada
};

export const deleteSection = async (id) => {
    await axios.delete(`${API_URL}/sections/${id}`);
};

// Función para obtener redes sociales
export const getSocialMedia = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/social-media');
      return response.data;
    } catch (error) {
      console.error('Error al obtener redes sociales:', error);
      return [];
    }
  };