// src/components/Email.js
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/email.css';

const Email = () => {
  // Estados para controlar los valores del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const form = useRef();

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el envío del formulario
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_bk3jyfr', // Tu Service ID
      'template_zkcf7ad',  // Reemplaza con tu Template ID de EmailJS
      form.current,
      'X9wisuu7huJ1J5QFz' // Tu Public Key de EmailJS
    )
    .then((result) => {
        console.log(result.text);
        alert('Mensaje enviado con éxito!');
        setFormData({ name: '', email: '', message: '' }); // Resetea el formulario después de enviarlo
    }, (error) => {
        console.log(error.text);
        alert('Hubo un error al enviar el mensaje.');
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="email-form">
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="email-input"
      />

      <label>Correo Electrónico</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="email-input"
      />

      <label>Mensaje</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        className="email-textarea"
      />

      <button type="submit" className="email-button">Enviar</button>
    </form>
  );
};

export default Email;
