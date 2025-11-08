import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoadingComponent from "./components/globals/LoadingComponent";

// Layouts
const RootLayout = lazy(() => import("./layouts/RootLayout"));
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));

// User Pages
const HomePage = lazy(() => import("./page/user/HomePage"));
const ProductPage = lazy(() => import("./page/user/ProductPage"));
const ContactPage = lazy(() => import("./page/user/ContactPage"));
const AboutPage = lazy(() => import("./page/user/AboutPage"));
const DetailPage = lazy(() => import("./page/user/DetailPage"));
const CartPage = lazy(() => import("./page/user/CartPage"));
const OrderHistoryPage = lazy(() => import("./page/user/OrderHistoryPage"));
const OrderDetail = lazy(() => import("./components/orderHistory/OrderDetail"));
const UserProfile = lazy(() => import("./page/user/UserProfile"));

// Auth Pages
const Register = lazy(() => import("./page/auth/Register"));
const Login = lazy(() => import("./page/auth/Login"));

// Admin Pages
const Dashboard = lazy(() => import("./page/admin/Dashboard"));
const Order = lazy(() => import("./page/admin/Order"));
const Product = lazy(() => import("./page/admin/Product"));
const User = lazy(() => import("./page/admin/User"));


const UnauthorizedPage = lazy(() => import("./components/globals/UnauthorizedPage"));

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 1500,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            padding: "12px 20px",
            fontSize: "16px",
          },
        }}
      />

      {/* Suspense shows fallback while lazy component loads */}
      <Suspense fallback={<LoadingComponent/>}>
        <Routes>
          {/* Public & User Routes */}
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products/:id" element={<DetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order-history" element={<OrderHistoryPage />} />
            <Route path="/order-history/:id" element={<OrderDetail />} />
            <Route path="/user/profile" element={<UserProfile />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/orders" element={<Order />} />
            <Route path="/admin/products" element={<Product />} />
            <Route path="/admin/users" element={<User />} />
          </Route>

          {/* Auth & Unauthorized */}
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
