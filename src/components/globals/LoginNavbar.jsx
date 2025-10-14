import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import { useGetUserProfileQuery } from "../../redux/services/userSlice";
import { useGetCartQuery } from "../../redux/services/cartSlice";
const menus = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Product", path: "/product" },
  { id: 3, label: "About", path: "/about" },
  { id: 4, label: "Contact", path: "/contact" },
];

const LoginNavbar = ({ profile }) => {
  const [isMobile, setIsMobile] = useState(false);

  const {data} = useGetCartQuery()
console.log(data)
  function handleMobile() {
    setIsMobile(!isMobile);
  }

  return (
    <>
      <header className="z-50 bg-white/20 backdrop-blur-md shadow-md py-4 md:py-4 px-4 sm:px-10 md:px-16 lg:px-[120px] sticky top-0">
        <nav className="flex justify-between items-center w-full ">
          <div className="text-2xl">LOGO</div>
          <ul className={` hidden lg:flex justify-center items-center gap-5 `}>
            {menus.map((e) => {
              return (
                <li key={e.id}>
                  <NavLink
                    onClick={() => setIsMobile(false)}
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
          <div className="flex justify-center items-center gap-4">
            <Link to={'/cart'}>
            <div className="relative p-1">
                <BsCart2 className="text-xl cursor-pointer" />
                <p className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full  flex justify-center items-center text-xs text-white   bg-red-400">{data?.cart?.items?.length}</p>
            </div>
            
            </Link>
            <Link to={'/user/profile'}>
            <img
              className="w-7 h-7 rounded-full cursor-pointer object-fit-cover"
              src={`${
                profile?.user?.avatar ||
                " https://img.icons8.com/?size=100&id=7820&format=png&color=000000"
              }`}
              alt=""
            />
            </Link>

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
            className={`flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out overflow-hidden ${
              isMobile ? "max-h-96" : "max-h-0"
            }`}
          >
            {menus.map((e) => {
              return (
                <li key={e.id}>
                  <NavLink
                    to={e.path}
                    onClick={() => setIsMobile(false)}
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

export default LoginNavbar;
