import React, { useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const MainPage = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  useEffect(() => {
    Aos.init({ duration: 1000, once: false, offset: 0 });
    const handleScroll = () => Aos.refresh();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto px-5 py-10 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 ">

      {/* Left Text Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full lg:w-1/2 "
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1
          variants={{ hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-Inter mb-2"
        >
          Lovepreet Singh
        </motion.h1>

        <motion.h2
          variants={{ hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white-white to-green-pramery bg-clip-text text-transparent"
        >
           <span>{text}</span>
          <Cursor cursorBlinking={true} cursorStyle="|" cursorColor="#7cf03d" />
        </motion.h2>

        <motion.p
          variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-white text-sm sm:text-base md:text-lg my-5"
        >
          I am a passionate Full-Stack Developer skilled in building scalable
          and user-friendly web applications. I work with React.js, HTML, CSS, and Tailwind CSS.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row lg:grid grid-cols-2 gap-5 items-center mt-8 sm:mt-5"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
   

          <div className="flex gap-3 mt-3 sm:mt-0">
            {[
              { href: "https://www.facebook.com/", src: "/svg/facebook.svg" },
              { href: "https://twitter.com/", src: "/svg/twitter.svg" },
              { href: "https://www.linkedin.com/in/lovepreet-singh-367520352", src: "/svg/linkedin.svg" },
              { href: "https://github.com/", src: "/svg/github.svg" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
                className="p-2 border-2  border-green-500 btn1 rounded-full"
              >
                <img className="w-5 h-5 sm:w-6 sm:h-6" src={social.src} alt="social-icon" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Image Section */}
      <motion.img
        initial={{ opacity: 0, y: 50, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        whileHover={{ scale: 1.05, rotate: 3 }}
        transition={{ type: "spring", stiffness: 80, damping: 12, duration: 1 }}
        className="w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] border-4 border-amber-50 transition-all hover:shadow-2xl shadow-white rounded-full object-cover"
        src="/img/lovepreet.jpg"
        alt="Profile"
      />
    </div>
  );
};

export default MainPage;
