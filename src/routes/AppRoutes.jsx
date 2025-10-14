// src/routes/AppRoutes.jsx

import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@/features/user/pages/LoginPage.jsx';
import UserHomePage from '@/features/user/pages/HomePage.jsx';
import UserStorePage from '@/features/user/pages/StorePage.jsx';
import UserAboutUsPage from '@/features/user/pages/AboutUsPage.jsx';
import UserRegisterPage from '@/features/user/pages/RegisterPage.jsx';
import UserProfilePage from '@/features/user/pages/ProfilePage.jsx';
import UserClaimsPage from '@/features/user/pages/ClaimsPage.jsx';
import UserSupportPage from '@/features/user/pages/SupportPage.jsx';

import AdminHomePage from '@/features/admin/pages/principal/AdminHomePage.jsx';
import AdminInventoryPage from '@/features/admin/pages/principal/AdminInventoryPage.jsx';
import AdminOrdersPage from '@/features/admin/pages/principal/AdminOrdersPage.jsx';
import AdminStockPage from '@/features/admin/pages/principal/AdminStockPage.jsx';
import AdminClaimsPage from '@/features/admin/pages/principal/AdminClaimsPage.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user/home" element={<UserHomePage />} />
            <Route path="/user/store" element={<UserStorePage />} />
            <Route path="/user/about-us" element={<UserAboutUsPage />} />
            <Route path="/user/register" element={<UserRegisterPage />} />
            <Route path="/user/profile" element={<UserProfilePage />} />
            <Route path="/user/claims" element={<UserClaimsPage />} />
            <Route path="/support" element={<UserSupportPage />} />

            <Route path="/admin/home" element={<AdminHomePage />} />
            <Route path="/admin/inventory" element={<AdminInventoryPage />} />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
            <Route path="/admin/stock" element={<AdminStockPage />} />
            <Route path="/admin/claims" element={<AdminClaimsPage />} />
        </Routes>
    );
};

export default AppRoutes;
