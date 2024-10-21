

Documentación del Frontend - Proyecto Bootcam
Datos del Proyecto
•	Nombre del Proyecto: Bootcam (Frontend)
•	Versión: 1.0.0
•	Autor: [Tu nombre o equipo]
•	Fecha de Creación: [Fecha de creación]
•	Última Modificación: [Fecha de la última modificación]
•	Descripción: Frontend para un portafolio de servicios, desarrollado con React. Incluye un dashboard para la administración de proyectos, redes sociales, experiencias laborales, tecnologías, y secciones. Está integrado con un backend en Express y MongoDB Atlas para el almacenamiento de datos y utiliza Cloudinary para la gestión de imágenes.

Este proyecto fue iniciado con Create React App.

Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:

npm start
Ejecuta la aplicación en modo desarrollo.
Abre http://localhost:3000 para verla en tu navegador.

La página se recargará cuando realices cambios.
También puedes ver cualquier error de lint en la consola.

npm test
Lanza el ejecutor de pruebas en modo interactivo de observación.
Consulta la sección sobre ejecutar pruebas para obtener más información.

npm run build
Construye la aplicación para producción en la carpeta build.
Empaqueta correctamente React en modo producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación está minificada y los nombres de los archivos incluyen hashes.
¡Tu aplicación está lista para ser desplegada!

Consulta la sección sobre despliegue para más información.

npm run eject
Nota: esta es una operación irreversible. Una vez que ejecutes eject, ¡no podrás volver atrás!

Si no estás satisfecho con la herramienta de compilación y las opciones de configuración, puedes ejecutar eject en cualquier momento. Este comando eliminará la dependencia de construcción única de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en tu proyecto, dándote control total sobre ellos. Todos los comandos, excepto eject, seguirán funcionando, pero apuntarán a los scripts copiados, lo que te permitirá ajustarlos según sea necesario. A partir de este punto estarás por tu cuenta.

No tienes que usar eject jamás. El conjunto de características predefinidas es adecuado para pequeños y medianos despliegues, y no deberías sentirte obligado a usar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudieras personalizarla cuando estés listo para hacerlo.

Aprende Más
Puedes aprender más en la documentación de Create React App.

Para aprender React, consulta la documentación de React.

División de Código (Code Splitting)
Esta sección se ha movido aquí: https://facebook.github.io/create-react-app/docs/code-splitting

Analizando el Tamaño del Paquete
Esta sección se ha movido aquí: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Creando una Progressive Web App
Esta sección se ha movido aquí: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Configuración Avanzada
Esta sección se ha movido aquí: https://facebook.github.io/create-react-app/docs/advanced-configuration

Despliegue
Esta sección se ha movido aquí: https://facebook.github.io/create-react-app/docs/deployment

npm run build falla al minificar
Esta sección se ha movido aquí: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Funcionalidades del Proyecto
El proyecto incluye las siguientes funcionalidades clave:

Autenticación de Usuarios:

Login: Los usuarios pueden iniciar sesión utilizando un formulario que valida las credenciales contra una API.
Registro de Nuevos Usuarios: Los administradores pueden crear nuevas cuentas de usuario para acceder al dashboard.
Dashboard de Gestión:

Proyectos: Permite agregar, editar y eliminar proyectos, mostrando un listado actualizado de los mismos.
Experiencias: Administra la información relacionada con la experiencia profesional o laboral del usuario.
Redes Sociales: Permite gestionar las redes sociales del usuario, mostrando un listado de enlaces y permitiendo su actualización.
Tecnologías: Presenta las tecnologías que domina el usuario, permitiendo agregar y eliminar tecnologías del listado.
Subida de Imágenes: Funcionalidad integrada con Cloudinary para permitir la subida y almacenamiento de imágenes.
Manejo de Datos:

A través de los HOCs, los datos se gestionan de manera eficiente, con funcionalidades para:
Agregar nuevos registros.
Editar registros existentes.
Eliminar registros.
Obtener datos actualizados desde la API.
Estilo y Presentación:

Se utilizan hojas de estilo personalizadas para mejorar la presentación visual de la aplicación.
Componentes como TextCard proporcionan una introducción atractiva para la página de inicio.

Índice
1.	Tecnologías Utilizadas
2.	Estructura del Proyecto
3.	Configuración del Proyecto
4.	Descripción de Componentes
5.	Carpeta HOC (High Order Components)
6.	Gestión de Estado con Redux
7.	Rutas del Proyecto
8.	Servicios API
9.	Estilos
10.	Guía de Instalación y Uso
________________________________________
1. Tecnologías Utilizadas
•	React.js: Biblioteca de JavaScript para construir interfaces de usuario.
•	React Router DOM: Enrutado de aplicaciones de una sola página (SPA).
•	Redux: Gestión global del estado de la aplicación.
•	Axios: Cliente HTTP para realizar peticiones al backend.
•	EmailJS: Servicio para envío de correos electrónicos desde formularios.
•	Cloudinary: Almacenamiento en la nube para imágenes.
•	React Icons: Biblioteca de íconos vectoriales para React.
________________________________________
2. Estructura del Proyecto
/portfolio
│── .gitignore                # Archivo de exclusión de archivos para Git.
│── package.json              # Información del proyecto y dependencias.
│── public/                   # Archivos públicos.
│   ├── index.html            # Documento HTML principal.
│   ├── favicon.ico           # Icono de la página web.
│   └── ...                   # Otros archivos públicos.
│
├── src/                      # Código fuente principal del proyecto.
│   ├── App.js                # Componente principal que define las rutas.
│   ├── index.js              # Punto de entrada del frontend.
│   ├── components/           # Componentes reutilizables.
│   │   ├── CloudinaryUpload.js      # Componente para subir imágenes a Cloudinary.
│   │   ├── Email.js                 # Formulario de contacto con EmailJS.
│   │   ├── Experiences.js           # Gestión de experiencias laborales.
│   │   ├── Footer.js                # Pie de página.
│   │   ├── Navbar.js                # Menú de navegación.
│   │   ├── Projects.js              # Gestión de proyectos.
│   │   ├── Register.js              # Registro de nuevos usuarios.
│   │   ├── Sections.js              # Gestión de secciones personalizadas.
│   │   ├── SocialMedia.js           # Gestión de redes sociales.
│   │   ├── Tecnos.js                # Gestión de tecnologías.
│   │   ├── TextCard.js              # Tarjeta de texto estilizada.
│   │   └── withDataManagement.js    # HOC para manejar operaciones CRUD de datos.
│
│   ├── hocs/                 # Componentes de orden superior (High Order Components).
│   │   └── withSocialsAndTech.js    # HOC para gestionar redes sociales y tecnologías.
│
│   ├── pages/                # Vistas principales del proyecto.
│   │   ├── Admin.js                # Página de inicio de sesión del administrador.
│   │   ├── Dashboard.js            # Dashboard de administración.
│   │   └── LandingPage.js          # Página principal del portafolio.
│
│   ├── reducers/             # Reducers de Redux para manejar el estado global.
│   │   └── authReducer.js          # Reducer de autenticación y gestión de datos.
│
│   ├── redux/                # Archivos de configuración y acciones de Redux.
│   │   ├── actions.js              # Acciones de Redux.
│   │   └── store.js                # Configuración del store de Redux.
│
│   ├── routes/               # Definición de rutas del dashboard.
│   │   └── DashboardRoutes.js      # Rutas específicas del dashboard.
│
│   ├── services/             # Servicios para interactuar con las APIs del backend.
│   │   ├── api.js                 # Servicios de autenticación y manejo de datos.
│   │   └── dashboardApi.js        # Funciones API específicas del dashboard.
│
│   ├── styles/               # Estilos CSS utilizados en los componentes.
│   │   ├── dashboard.css          # Estilos para el dashboard.
│   │   ├── email.css              # Estilos para el formulario de contacto.
│   │   ├── Navbar.css             # Estilos para el menú de navegación.
│   │   └── SocialMedia.css        # Estilos para la gestión de redes sociales.

3. Configuración del Proyecto
a. package.json
Este archivo define las dependencias y scripts del proyecto. Aquí algunas dependencias clave:
•	react: ^18.3.1
•	react-router-dom: ^6.27.0
•	redux: ^5.0.1
•	axios: ^1.7.7
•	cloudinary: ^1.41.3
•	emailjs-com: ^3.2.0
Scripts importantes:
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
4. Descripción de Componentes
Carpeta components
1.	CloudinaryUpload.js:
o	Función: Maneja la subida de imágenes a Cloudinary, mostrando el estado de carga, errores y las imágenes subidas.
o	Descripción: Permite subir imágenes a través de un formulario y almacenar las URLs devueltas por Cloudinary.
2.	Email.js:
o	Función: Permite enviar correos electrónicos a través de EmailJS.
o	Descripción: Formulario de contacto con validación y notificación de éxito o error.
3.	Experiences.js:
o	Función: Administra las experiencias laborales, permite crear, editar, y eliminar entradas.
o	Descripción: Interactúa con el backend para la gestión de experiencias.
4.	Footer.js:
o	Función: Muestra el pie de página con información del autor y enlaces a redes sociales.
o	Descripción: Incluye íconos de redes sociales de React Icons y estilos personalizados.
5.	Navbar.js:
o	Función: Menú de navegación que aparece al acercar el cursor al borde izquierdo de la pantalla.
o	Descripción: Contiene enlaces a secciones del portafolio y al dashboard de administración.
6.	Projects.js:
o	Función: Administra los proyectos en el dashboard, permitiendo crear, editar, y eliminar proyectos.
o	Descripción: Los proyectos incluyen imágenes que se suben a Cloudinary, además de información como tecnologías usadas.
7.	Register.js:
o	Función: Componente de registro de usuarios.
o	Descripción: Permite registrar nuevos usuarios en la aplicación.
8.	Sections.js:
o	Función: Administra las secciones personalizadas en el portafolio.
o	Descripción: Permite agregar y eliminar secciones con títulos y textos.
9.	SocialMedia.js:
o	Función: Permite gestionar redes sociales, incluyendo la subida de íconos a Cloudinary.
o	Descripción: Los usuarios pueden crear, editar o eliminar redes sociales.
10.	Tecnos.js:
o	Función: Gestiona las tecnologías en el dashboard.
o	Descripción: Las tecnologías se muestran con imágenes y descripciones.
11.	TextCard.js:
o	Función: Componente estilizado para mostrar un mensaje de bienvenida.
o	Descripción: Utilizado en la página principal del portafolio.
12.	withDataManagement.js:
o	Función: Componente de orden superior para manejar operaciones CRUD de datos (crear, leer, actualizar, eliminar).
o	Descripción: Abstrae la lógica de gestión de datos para diferentes tipos de recursos.
________________________________________
5. Carpeta HOC (High Order Components)
withDataManagement.js
•	Función: Provee un manejo genérico de datos a los componentes envueltos. Facilita la gestión de datos como proyectos, experiencias, etc.
•	Descripción: Permite realizar peticiones HTTP (GET, POST, PUT, DELETE) en función del tipo de dato pasado como argumento.
withSocialsAndTech.js
•	Función: Proporciona a los componentes envueltos acceso a las redes sociales y tecnologías, manejando la carga y visualización.
•	Descripción: Utilizado para cargar y mostrar tecnologías y redes sociales desde el backend.
________________________________________
6. Gestión de Estado con Redux
El proyecto utiliza Redux para manejar el estado global, permitiendo gestionar la autenticación y los datos del portafolio de manera centralizada.
a. authReducer.js
Este archivo maneja el estado de autenticación y los datos relacionados con los proyectos, experiencias y tecnologías.
const initialState = {
  isAuthenticated: false,
  token: null,
  projects: [],
  experiences: [],
  tecnos: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, token: action.payload };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, token: null };
    case 'FETCH_PROJECTS':
      return { ...state, projects: action.payload };
    case 'FETCH_EXPERIENCES':
      return { ...state, experiences: action.payload };
    case 'FETCH_TECNOS':
      return { ...state, tecnos: action.payload };
    default:
      return state;
  }
};

export default authReducer;

b. store.js
Archivo principal que configura el store de Redux
import { createStore } from 'redux';
import authReducer from '../reducers/authReducer';

const store = createStore(authReducer);
export default store;

7. Rutas del Proyecto
a. routes/DashboardRoutes.js
Este archivo organiza las rutas del dashboard. Cada ruta está asociada a un componente específico.

import { Route } from 'react-router-dom';
import Projects from '../components/Projects';
import Experiences from '../components/Experiences';
import SocialMedia from '../components/SocialMedia';
import Tecnos from '../components/Tecnos';

import { Route } from 'react-router-dom';
import Projects from '../components/Projects';
import Experiences from '../components/Experiences';
import SocialMedia from '../components/SocialMedia';
import Tecnos from '../components/Tecnos';

const DashboardRoutes = () => {
  return (
    <>
      <Route path="projects" element={<Projects />} />
      <Route path="experiences" element={<Experiences />} />
      <Route path="social-media" element={<SocialMedia />} />
      <Route path="tecnos" element={<Tecnos />} />
    </>
  );
};

export default DashboardRoutes;

8. Servicios API
a. services/api.js
Este archivo contiene las funciones que interactúan con las rutas API del backend. Utiliza Axios para hacer peticiones HTTP.
•	Función para Proyectos:

export const getProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};
export const getProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};

Función para Experiencias:
export const getExperiences = async () => {
  const response = await axios.get(`${API_URL}/experiences`);
  return response.data;
};
Función para Tecnologías:
export const getTecnos = async () => {
  const response = await axios.get(`${API_URL}/tecnos`);
  return response.data;
};

9. Estilos
El proyecto incluye varias hojas de estilos CSS que estilizan los componentes.
a. styles/dashboard.css
Define estilos para el dashboard, incluyendo botones flotantes y contenedores.
b. styles/email.css
Estiliza el formulario de contacto para el envío de correos electrónicos.
c. styles/Navbar.css
Estilos para el menú de navegación flotante, con animaciones y efectos de hover.
d. styles/SocialMedia.css
Estiliza los componentes relacionados con la gestión de redes sociales.
________________________________________
10. Guía de Instalación y Uso
Requisitos Previos
•	Node.js (v14 o superior)
•	React (v18 o superior)
Pasos para la Instalación:
1.	Clona el repositorio:
bash
Copiar código
git clone <URL_REPOSITORIO>
cd portfolio
2.	Instala las dependencias:
bash
Copiar código
npm install
3.	Inicia el servidor en modo desarrollo:
bash
Copiar código
npm start

Conclusiones
Este proyecto es una solución completa para la gestión de información personal y profesional de un desarrollador FullStack. Utilizando tecnologías modernas como React, Redux, y servicios externos como Cloudinary, se logra una experiencia robusta y dinámica para la gestión de proyectos, experiencias, redes sociales y tecnologías.

Conclusiones principales:

La estructura modular del proyecto permite una fácil extensión y mantenimiento. Los HOCs proporcionan un patrón escalable para gestionar la lógica de datos.
La integración con una API externa permite mantener la información actualizada y sincronizada entre el frontend y backend.
La funcionalidad de autenticación proporciona una capa de seguridad necesaria para proteger el acceso a la información administrativa.
El uso de Cloudinary para el manejo de imágenes garantiza una solución eficiente para la gestión y almacenamiento multimedia.