// src/hocs/withSocialsAndTech.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const withSocialsAndTech = (WrappedComponent) => {
  return (props) => {
    const [socials, setSocials] = useState([]);
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para controlar la carga

    useEffect(() => {
      const fetchData = async () => {
        try {
          const [socialResponse, techResponse] = await Promise.all([
            axios.get('http://localhost:5000/api/social-media'),
            axios.get('http://localhost:5000/api/technologies'),
          ]);

          setSocials(socialResponse.data);
          setTechs(techResponse.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false); // Cambiar a false después de la carga
        }
      };

      fetchData();
    }, []);

    if (loading) {
      return <p>Cargando...</p>; // Mensaje de carga
    }

    return <WrappedComponent {...props} socials={socials} techs={techs} />;
  };
};

export default withSocialsAndTech;
