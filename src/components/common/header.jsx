import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navRefs = useRef({});
  const [text] = useTypewriter({
    words: ["LOVEPREET SINGH"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 60,
    delaySpeed: 2000,
  });

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboute" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // Background opacity and blur effect on scroll
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsBlurred(scrollTop > 10); // blur only after scrolling a bit
      Aos.refresh();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 
        w-full z-50 
        transition-all duration-300
        ${isBlurred ? "backdrop-blur-md" : "backdrop-blur-0"}
      `}
      style={{
      }}
    >
      {/* Content wrapper centered inside full-width bg */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 md:py-5 px-4">
        {/* Logo / Name */}
        <motion.h1
          whileHover={{ scale: 1.1, textShadow: "0px 0px 8px #22c55e" }}
          className="text-lg sm:text-[22px] md:text-[30px] font-bold bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent"
        >
          {text}
        </motion.h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <p
                ref={(el) => (navRefs.current[item.path] = el)}
                className={`cursor-pointer hover:text-green-500 transition ${
                  location.pathname === item.path
                    ? "text-green-500"
                    : "text-white"
                }`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-6 h-6 flex flex-col justify-between items-center"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-3" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed top-0 right-0 h-full w-2/3 bg-black/90 backdrop-blur-md flex flex-col py-10 px-6 gap-6 z-50"
          >
            {navItems.map((item, i) => (
              <Link key={i} to={item.path} onClick={() => setIsOpen(false)}>
                <p className="text-white text-xl hover:text-green-500">
                  {item.name}
                </p>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
