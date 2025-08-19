import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Service", path: "/Service" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 z-50 ">
        <div className="container mx-auto shadow-2xl">
          <nav className="flex justify-between text-white-white py-5 items-center  bg-black-secondery">
            <div className="text-[30px] font-Inter font-bold">Portfolio</div>
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
