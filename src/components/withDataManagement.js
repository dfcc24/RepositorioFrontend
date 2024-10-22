// src/components/withDataManagement.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const withDataManagement = (dataType) => (WrappedComponent) => {
    return (props) => {
        const [data, setData] = useState([]);
        const [isEditing, setIsEditing] = useState(false);
        const [editId, setEditId] = useState(null);

        // Función para obtener datos
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://repositoriobackend.onrender.com/api/${dataType}`);
                setData(response.data);
            } catch (error) {
                console.error(`Error fetching ${dataType}:`, error);
            }
        };

        useEffect(() => {
            fetchData(); // Cargar los datos al montar el componente
        }, []);

        // Función para agregar un nuevo dato
        const addData = async (newData) => {
            try {
                await axios.post(`https://repositoriobackend.onrender.com/api/${dataType}`, newData);
                fetchData(); // Actualizar los datos
            } catch (error) {
                console.error(`Error adding ${dataType}:`, error);
            }
        };

        // Función para editar un dato
        const editData = async (updatedData) => {
            try {
                await axios.put(`https://repositoriobackend.onrender.com/api/${dataType}/${editId}`, updatedData);
                fetchData(); // Actualizar los datos
                setIsEditing(false);
                setEditId(null);
            } catch (error) {
                console.error(`Error updating ${dataType}:`, error);
            }
        };

        // Función para eliminar un dato
        const deleteData = async (id) => {
            try {
                await axios.delete(`https://repositoriobackend.onrender.com/api/${dataType}/${id}`);
                fetchData(); // Actualizar los datos
            } catch (error) {
                console.error(`Error deleting ${dataType}:`, error);
            }
        };

        // Pasar los datos y las funciones como props al componente envuelto
        return (
            <WrappedComponent
                {...props}
                data={data}
                addData={addData}
                editData={editData}
                deleteData={deleteData}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                setEditId={setEditId}
            />
        );
    };
};

export default withDataManagement;
