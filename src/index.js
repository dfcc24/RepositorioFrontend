// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia esta importación
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// Crea un root utilizando createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
