import { Route, Routes } from "react-router-dom";
import HomePage from "./page/user/HomePage";
import ProductPage from "./page/user/ProductPage";
import RootLayout from "./layouts/RootLayout";
import DetailPage from "./page/user/DetailPage";
import ContactPage from "./page/user/ContactPage";
import AboutPage from "./page/user/AboutPage";
import Register from "./page/auth/Register";
import Login from "./page/auth/Login";
import UserProfile from "./page/user/UserProfile";
import CartPage from "./page/user/CartPage";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/products/:id" element={<DetailPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Route>
      <Route path="/user/profile" element={<UserProfile/>}/>
      <Route path="/auth/register" element={<Register/>}/>
      <Route path="/auth/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
