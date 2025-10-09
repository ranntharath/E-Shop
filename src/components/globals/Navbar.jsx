import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const menus = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Product", path: "/product" },
  { id: 3, label: "About", path: "/about" },
  { id: 4, label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const token = localStorage.getItem("accessToken");
  function handleMobile() {
    setIsMobile(!isMobile);
  }

  return (
    <>
      <header className=" bg-white/20 backdrop-blur-md shadow-md py-2 md:py-4 px-4 sm:px-10 md:px-16 lg:px-[120px]">
        <nav className="flex justify-between items-center w-full ">
          <div className="text-2xl">LOGO</div>
          <ul className={` hidden lg:flex justify-center items-center gap-5 `}>
            {menus.map((e) => {
              return (
                <li key={e.id}>
                  <NavLink
                    to={e.path}
                    className={({ isActive }) =>
                      isActive ? "text-primary-color" : "text-letter-color"
                    }
                  >
                    {e.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center items-center gap-4">
            <CiShoppingCart className="text-2xl" />
            {token ? (
              <button
                onClick={() => alert("torn ban tver te, tea login ban hx")}
                className="px-4 py-1.5 rounded-md bg-red-200"
              >
                Logout
              </button>
            ) : (
              <button className="bg-primary-color px-4 py-1.5 rounded-md text-white hover:bg-primary-dark-color cursor-pointer">
                <NavLink to={"/auth/login"}>Login</NavLink>
              </button>
            )}
            <div className="block lg:hidden">
              {!isMobile ? (
                <CiMenuBurger onClick={handleMobile} className="text-2xl" />
              ) : (
                <RxCross1 onClick={handleMobile} className="text-2xl" />
              )}
            </div>
          </div>
        </nav>
        <nav className="block lg:hidden">
          <ul
            className={`flex flex-col gap-2 justify-center items-center transition-all duration-200 ease-in overflow-hidden ${isMobile ? "max-h-96" : "max-h-0"
              }`}
          >
            {menus.map((e) => {
              return (
                <li key={e.id}>
                  <NavLink
                    to={e.path}
                    className={({ isActive }) =>
                      isActive ? "text-primary-color" : "text-letter-color"
                    }
                  >
                    {e.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
