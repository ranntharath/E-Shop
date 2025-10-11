import { Route, Routes } from "react-router-dom";
import HomePage from "./page/user/HomePage";
import ProductPage from "./page/user/ProductPage";
import RootLayout from "./layouts/RootLayout";
import DetailPage from "./page/user/DetailPage";
import ContactPage from "./page/user/ContactPage";
import AboutPage from "./page/user/AboutPage";
import Register from "./page/auth/Register";
import Login from "./page/auth/Login";
import Dashboard from "./page/admin/Dashboard";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="detail/:id" element={<DetailPage/>}/>
      </Route>
      <Route path="/auth/register" element={<Register/>}/>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  );
}

export default App;
