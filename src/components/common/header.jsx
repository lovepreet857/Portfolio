import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Service", path: "/Service" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 z-50  shadow-2xl">
        <div className="container mx-auto">
          <nav className="flex justify-between text-white-white py-5 items-center  bg-black-secondery">
            <div className="flex items-cente gap-3">
              <img className="border-3 border-white-white rounded-full max-w-[40px] sm:max-w-[50px]" src="public/svg/ls.svg" alt="" />
            <h1 className=" text-lg sm:text-[30px] pt-[4px] font-Inter font-bold bg-gradient-to-r from-white-white to-green-pramery bg-clip-text text-transparent">Lovepreet</h1>
            </div>
               <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-6 h-6 flex items-center justify-center group"
        >
          <span
            className={`absolute h-0.5 w-6 bg-white-white transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-white-white transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-white-white transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          ></span>
        </button>
         <div
          className={`absolute border border-white-white flex flex-col py-10 px-5 gap-3 z-52 top-[84px] sm:top-[90px] transition-all duration-500 ease-in-out transform right-[20px]  max-w-[200px] w-full bg-black-secondery rounded-[12px] md:hidden  ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none"
          }`}
        >
          {navItems.map((item) => (
                <Link key={item.path} to={item.path} >
                  <p  onClick={() => setIsOpen(!isOpen)}
                    className={`hover:text-green-pramery border-b pb-3 border-white-white ${
                      location.pathname === item.path ? "text-green-pramery" : ""
                    }`}
                  >
                    {item.name}
                  </p>
                </Link>
              ))}
        </div>
            <div className="hidden md:flex gap-[35px] text-[20px] font-medium transition">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <p
                    className={`hover:text-green-pramery ${
                      location.pathname === item.path ? "text-green-pramery" : ""
                    }`}
                  >
                    {item.name}
                  </p>
                </Link>                
              ))}
            </div>
          </nav>
        </div>
      </div>
      <div className="pt-[80px]"></div>
    </>
  );
};
export default Header;
