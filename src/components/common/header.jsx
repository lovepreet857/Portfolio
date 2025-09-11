import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import Aos from "aos";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate(); // navigation hook
  const [isOpen, setIsOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef({});

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboute" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
   const [text] = useTypewriter({
      words: ["LOVEPREET SINGH"],
      loop: true,
      typeSpeed: 70,
      deleteSpeed: 60,
      delaySpeed: 2000,
    });
  
    useEffect(() => {
      Aos.init({ duration: 1000, once: false, offset: 0 });
      const handleScroll = () => Aos.refresh();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      <div className="w-full sticky  top-0 left-0 z-50 shadow-2xl ">
        <div className="container ">
          <nav className="flex justify-between text-white bg-black-secondery py-5 items-center relative">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <motion.img
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.9 }}
                className="border-2 border-white rounded-full max-w-[40px] sm:max-w-[50px]"
                src="/svg/ls.svg"
                alt="Logo"
              />
              <motion.h1
                whileHover={{ scale: 1.1, textShadow: "0px 0px 8px #22c55e" }}
                transition={{ duration: 0.9 }}
                className="text-lg sm:text-[30px] pt-[4px] font-bold bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent"
              >
                <i>{text}</i>
              </motion.h1>
            </motion.div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-6 h-6 flex items-center justify-center group "
            >
              <span
                className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              ></span>
            </button>

            {/* Mobile Menu */}
            {/* Mobile Menu */}
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: isOpen ? 0 : "100%",
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-[80px] sm:top-[90px] right-0 h-[calc(100%-84px)] sm:h-[calc(100%-90px)] 
             w-[65%] sm:w-[50%] bg-gradient-to-b from-black via-[#111] to-black/95 
             sm:border-l border-green-500 shadow-2xl z-50 flex flex-col py-10 px-6 gap-6 md:hidden"
            >
              {/* Close Button */}

              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link to={item.path} onClick={() => setIsOpen(false)}>
                    <p
                      className={`hover:text-green-500 text-xl font-medium transition relative ${
                        location.pathname === item.path
                          ? "text-green-500 underline underline-offset-4"
                          : ""
                      }`}
                    >
                      {item.name}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-[35px] text-[20px] font-medium relative">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link to={item.path}>
                    <p
                      ref={(el) => (navRefs.current[item.path] = el)}
                      className={`hover:text-green-500 transition relative cursor-pointer ${
                        location.pathname === item.path ? "text-green-500" : ""
                      }`}
                    >
                      {item.name}
                    </p>
                  </Link>
                </motion.div>
              ))}

              {/* Active underline */}
              <motion.div
                className="absolute bottom-[-6px] h-[3px] bg-green-500 rounded-full"
                initial={false}
                animate={{
                  left: indicatorStyle.left + "px",
                  width: indicatorStyle.width + "px",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
          </nav>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
    </>
  );
};

export default Header;