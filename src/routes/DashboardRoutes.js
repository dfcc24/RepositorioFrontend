// src/routes/DashboardRoutes.js
import React from 'react';
import { Route } from 'react-router-dom';
import Projects from '../components/Projects';
import Experiences from '../components/Experiences';
import SocialMedia from '../components/SocialMedia';
import Sections from '../components/Sections';
import Tecnos from '../components/Tecnos';

const DashboardRoutes = ({ projects, experiences, socialMedia, tecnos, sections,}) => {
    return (
        <>
            <Route path="projects" element={<Projects projects={projects} />} />
            <Route path="experiences" element={<Experiences experiences={experiences} />} />
            <Route path="social-media" element={<SocialMedia socialMedia={socialMedia} />} />
            <Route path="tecnos" element={<Tecnos tecnos={tecnos} />} />
            <Route path="sections" element={<Sections sections={sections} />} />

        </>
    );
};

export default DashboardRoutes;
