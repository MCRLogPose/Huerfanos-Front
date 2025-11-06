// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";

import LoginPage from "@/features/auth/pages/LoginPage.jsx";
import RegisterPage from "@/features/auth/pages/RegisterPage.jsx";

import UserHomePage from "@/features/user/pages/HomePage.jsx";
import UserStorePage from "@/features/user/pages/StorePage.jsx";
import UserAboutUsPage from "@/features/user/pages/AboutUsPage.jsx";
import UserProfilePage from "@/features/user/pages/ProfilePage.jsx";
import UserClaimsPage from "@/features/user/pages/ClaimsPage.jsx";
import UserSupportPage from "@/features/user/pages/SupportPage.jsx";
import ShoppingcardPage from "@/features/user/pages/CartPage.jsx";

import AdminHomePage from "@/features/admin/pages/principal/AdminHomePage.jsx";
import AdminInventoryPage from "@/features/admin/pages/principal/AdminInventoryPage.jsx";
import AdminOrdersPage from "@/features/admin/pages/principal/AdminOrdersPage.jsx";
import AdminStockPage from "@/features/admin/pages/principal/AdminStockPage.jsx";
import AdminClaimsPage from "@/features/admin/pages/principal/AdminClaimsPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Navigate to="/user/home" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user/home" element={<UserHomePage />} />
      <Route path="/user/store" element={<UserStorePage />} />
      <Route path="/user/shopping-cart" element={<ShoppingcardPage />} />
      <Route path="/user/about-us" element={<UserAboutUsPage />} />
      <Route path="/user/register" element={<RegisterPage />} />
      <Route path="/support" element={<UserSupportPage />} />

      {/* PRIVATE ROUTES (any logged user) */}
      <Route
        path="/user/profile"
        element={
          <PrivateRoute allowedRoles={["ADMIN", "SELLER", "USER"]}>
            <UserProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/claims"
        element={
          <PrivateRoute allowedRoles={["ADMIN", "SELLER", "USER"]}>
            <UserClaimsPage />
          </PrivateRoute>
        }
      />

      {/* ADMIN ROUTES */}
      <Route
        path="/admin/home"
        element={
          <PrivateRoute allowedRoles={["ADMIN", "SELLER"]}>
            <AdminHomePage />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/inventory"
        element={
          <PrivateRoute allowedRoles={["ADMIN"]}>
            <AdminInventoryPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <PrivateRoute allowedRoles={["ADMIN", "SELLER"]}>
            <AdminOrdersPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/stock"
        element={
          <PrivateRoute allowedRoles={["ADMIN", "SELLER"]}>
            <AdminStockPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/claims"
        element={
          <PrivateRoute allowedRoles={["ADMIN"]}>
            <AdminClaimsPage />
          </PrivateRoute>
        }
      />

      {/* Unauthorized page */}
      <Route path="/unauthorized" element={<h1>No autorizado</h1>} />
    </Routes>
  );
};

export default AppRoutes;
