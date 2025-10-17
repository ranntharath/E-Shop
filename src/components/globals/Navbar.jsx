import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import logo from '../../assets/logo.png'
const menus = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Product", path: "/product" },
  { id: 3, label: "About", path: "/about" },
  { id: 4, label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  function handleMobile() {
    setIsMobile(!isMobile);
  }

  return (
    <>
      <header className="z-50 bg-white/20 backdrop-blur-md shadow-md py-4 md:py-4 px-4 sm:px-10 md:px-16 lg:px-[120px] sticky top-0">
        <nav className="flex justify-between items-center w-full ">
          <Link to={"/"}>
            <div className="flex justify-center items-center gap-2">
              <img
                className="w-10 scale-[1.7] overflow-hidden"
                src={logo}
                alt=""
              />
              <p className="mt-1 text-xl font-semibold text-gray-800">E-Shop</p>
            </div>
          </Link>
          <ul className={` hidden lg:flex justify-center items-center gap-5 `}>
            {menus.map((e) => {
              return (
                <li key={e.id}>
                  <NavLink
                  onClick={()=>setIsMobile(false)}
                    to={e.path}
                    className={ ({ isActive }) =>
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
              <button className="bg-primary-color px-4 py-1.5 rounded-md text-white hover:bg-primary-dark-color cursor-pointer">
                <NavLink to={"/auth/login"}>Login</NavLink>
              </button>

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
            className={`flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out overflow-hidden ${isMobile ? "max-h-96" : "max-h-0"
              }`}
          >
            {menus.map((e) => {
              return (
                <li key={e.id}>
                  <NavLink
                     onClick={()=>setIsMobile(false)}
                    to={e.path}
                    className={({ isActive }) =>
                      isActive ? "text-primary-color" : "text-letter-color"
                    }
                  >
                    <p className="text-[18px] font-medium">{e.label}</p>
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
