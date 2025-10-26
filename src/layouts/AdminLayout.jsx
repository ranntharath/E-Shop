import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, NavLink,Navigate  } from "react-router-dom";
import { useGetUserProfileQuery } from "../redux/services/userSlice";
import LoadingComponent from "../components/globals/LoadingComponent";
import { CiMenuBurger } from "react-icons/ci";
import { FiBox } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
function AdminLayout() {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const { data, isLoading } = useGetUserProfileQuery(undefined, {
    skip: !token,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isMd, setIsMd] = useState(window.innerWidth >= 768);
  const [showLogout, setShowLogout] = useState(false);

  // 🔍 Watch screen size
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = (e) => setIsMd(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isMd) setIsOpen(false);
  }, [isMd]);


  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setShowLogout(false);
    navigate("/");
  };


  if (isLoading) return <LoadingComponent />;

  if (data?.user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
     
      <aside
        className={`bg-white fixed lg:static transition-all duration-200 ease-in-out shadow-md overflow-hidden min-h-screen
          ${isOpen ? "max-w-64" : "max-w-0"} lg:max-w-64`}
      >
        <div className="p-4 text-xl font-bold bg-primary-color text-white text-center">
          E-Shop
        </div>
        <nav className="space-y-2 p-4 w-64">
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex px-4 py-2 hover:bg-[#ffe4e0] items-center gap-2 ${
                isActive ? "bg-[#ffe4e0] text-primary-color rounded-md transition-all duration-200 ease-in" : "rounded-md"
              }`
            }
          >
            <RxDashboard />
            Dashboard
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            to="/admin/products"
            className={({ isActive }) =>
              `flex px-4 py-2 hover:bg-[#ffe4e0] items-center gap-2 ${
                isActive ? "bg-[#ffe4e0] text-primary-color rounded-md transition-all duration-200 ease-in" : "rounded-md"
              }`
            }
          >
            <FiBox className="text-[18px]"/>
            Products
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            to="/admin/users"
            className={({ isActive }) =>
              `flex px-4 py-2 hover:bg-[#ffe4e0] items-center gap-2 ${
                isActive ? "bg-[#ffe4e0] text-primary-color rounded-md transition-all duration-200 ease-in" : "rounded-md"
              }`
            }
          >
            <HiOutlineUsers className="text-[18px]" />
            Users
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            to="/admin/orders"
            className={({ isActive }) =>
              `flex px-4 py-2 hover:bg-[#ffe4e0] items-center gap-2 ${
                isActive ? "bg-[#ffe4e0] text-primary-color rounded-md transition-all duration-200 ease-in" : "rounded-md"
              }`
            }
          >
            <FiShoppingCart />
            Orders
          </NavLink>

          <button
            onClick={() => setShowLogout(true)}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 w-full"
          >
            <IoIosLogOut />
            Log out
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex gap-3 items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex justify-center items-center"
          >
            <CiMenuBurger />
          </button>
          <h2 className="text-lg font-semibold">Admin Panel</h2>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>

     
    </div>
  );
}

export default AdminLayout;
