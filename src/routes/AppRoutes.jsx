// src/routes/AppRoutes.jsx

import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/auth/LoginPage';
import HomePage from '@/pages/home/HomePage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
};

export default AppRoutes;
