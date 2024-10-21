// src/pages/Admin.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Importa useDispatch
import { login } from '../services/api'; // Importa el servicio
import axios from 'axios'; // Asegúrate de importar axios para el registro

const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registerUsername, setRegisterUsername] = useState(''); // Estado para el registro
    const [registerPassword, setRegisterPassword] = useState(''); // Estado para el registro
    const [message, setMessage] = useState(''); // Mensaje de registro
    const dispatch = useDispatch(); // Inicializa el dispatch

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await login(username, password); // Llama al servicio de login
            // Almacena el token en el estado de Redux
            dispatch({ type: 'LOGIN', payload: data.token }); // Suponiendo que el token se encuentra en data.token
            // Redirigir a la página de dashboard o a donde sea necesario
            window.location.href = '/dashboard'; // Ejemplo de redirección
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión. Por favor, verifica tus credenciales.'); // Notificación de error
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                username: registerUsername,
                password: registerPassword,
            });
            setMessage(response.data.message); // Muestra el mensaje de éxito
            // Limpiar campos después del registro
            setRegisterUsername('');
            setRegisterPassword('');
        } catch (error) {
            setMessage(error.response.data.error); // Muestra el error
        }
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>
                <input 
                    type="text" 
                    placeholder="Usuario" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Iniciar Sesión</button>
            </form>

            <h2>Registrar Usuario</h2>
            <form onSubmit={handleRegister}>
                <input 
                    type="text" 
                    placeholder="Nuevo Usuario" 
                    value={registerUsername} 
                    onChange={(e) => setRegisterUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Nueva Contraseña" 
                    value={registerPassword} 
                    onChange={(e) => setRegisterPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Registrar</button>
            </form>
            {message && <p>{message}</p>} {/* Mensaje de éxito o error */}
        </div>
    );
};

export default Admin;
