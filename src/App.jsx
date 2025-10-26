import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AdminLayout from "./layouts/AdminLayout";
import HomePage from "./page/user/HomePage";
import ProductPage from "./page/user/ProductPage";
import ContactPage from "./page/user/ContactPage";
import AboutPage from "./page/user/AboutPage";
import DetailPage from "./page/user/DetailPage";
import CartPage from "./page/user/CartPage";
import OrderHistoryPage from "./page/user/OrderHistoryPage";
import OrderDetail from "./components/orderHistory/OrderDetail";
import Register from "./page/auth/Register";
import Login from "./page/auth/Login";
import UserProfile from "./page/user/UserProfile";

import { Toaster } from "react-hot-toast";
import UnauthorizedPage from "./components/globals/UnauthorizedPage";
import Dashboard from "./page/admin/Dashboard";
import Order from "./page/admin/Order";
import Product from "./page/admin/Product";

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
      <Routes>
        {/* ✅ Public & User Routes */}
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

        {/* ✅ Admin Routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/admin/orders" element={<Order/>} />
          <Route path="/admin/products" element={<Product/>} />
        </Route>

        {/* Auth & Unauthorized */}
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/unauthorized" element={<UnauthorizedPage/>} />
      </Routes>
    </>
  );
}

export default App;
