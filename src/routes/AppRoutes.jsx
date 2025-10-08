// src/routes/AppRoutes.jsx

import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@/features/user/pages/LoginPage.jsx';
import HomePage from '@/features/user/pages/HomePage.jsx';
import StorePage from '@/features/user/pages/StorePage.jsx';
import AboutUsPage from '@/features/user/pages/AboutUsPage.jsx';
import RegisterPage from '@/features/user/pages/RegisterPage.jsx';
import ProfilePage from '@/features/user/pages/ProfilePage.jsx';
import ClaimsPage from '@/features/user/pages/ClaimsPage.jsx';
import SupportPage from '@/features/user/pages/SupportPage.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user/home" element={<HomePage />} />
            <Route path="/user/store" element={<StorePage />} />
            <Route path="/user/about-us" element={<AboutUsPage />} />
            <Route path="/user/register" element={<RegisterPage />} />
            <Route path="/user/profile" element={<ProfilePage />} />
            <Route path="/user/claims" element={<ClaimsPage />} />
            <Route path="/support" element={<SupportPage />} />
        </Routes>
    );
};

export default AppRoutes;
