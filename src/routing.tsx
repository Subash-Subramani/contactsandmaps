// src/routing.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChartAndMaps from './ChartAndMaps';
import Contact from './contact';
import Sidebar from './sidebar';

const Routing: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Sidebar />}>
                <Route index element={<Contact />} />
                <Route path="chartsandmaps" element={<ChartAndMaps />} />
            </Route>
        </Routes>
    );
}

export default Routing;
