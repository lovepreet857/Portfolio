import React, { useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const MainPage = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Full Stack Developer"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
AOS.init({
        duration: 1200,
        once: false,
        offset: 0,
      });

  return (
    <div className="container mx-auto px-5 py-10 lg:py-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 ">

      {/* Left Text Section */}
      <div
        className="w-full lg:max-w-[500px] "
       
      >
        <h1 data-aos="fade-right" data-aos-delay="200"
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-Inter mb-2"
        >
          Lovepreet Singh
        </h1>

        <h2 data-aos="fade-right" data-aos-delay="400"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white-white to-green-pramery bg-clip-text text-transparent"
        >
           <span>{text}</span>
          <Cursor cursorBlinking={true} cursorStyle="|" cursorColor="#7cf03d" />
        </h2>

        <p data-aos="fade-right" data-aos-delay="600"
          className="text-white text-sm sm:text-base md:text-lg my-5"
        >
          I am a passionate Full-Stack Developer skilled in building scalable
          and user-friendly web applications. I work with React.js, HTML, CSS, and Tailwind CSS.
        </p>

        <div
          className="flex flex-col sm:flex-row lg:grid grid-cols-2 gap-5 items-center mt-8 sm:mt-5"
        >
   

          <div className="flex gap-3 mt-3 sm:mt-0">
            {[
              { href: "https://www.facebook.com/", src: "/svg/facebook.svg" },
              { href: "https://twitter.com/", src: "/svg/twitter.svg" },
              { href: "https://www.linkedin.com/in/lovepreet-singh-367520352", src: "/svg/linkedin.svg" },
              { href: "https://github.com/", src: "/svg/github.svg" },
            ].map((social, i) => (
              <a data-aos="fade-up" data-aos-delay={i*100+800}
                key={i}
                href={social.href}
                target="_blank"
                className="p-2 border-2  border-green-500 btn1 rounded-full"
              >
                <img className="w-5 h-5 sm:w-6 sm:h-6" src={social.src} alt="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <img data-aos="fade-left" data-aos-delay="200"
        className="w-48 h-48 lg:mr-[100px] mr-0 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] border-4 border-amber-50 transition-all hover:shadow-2xl shadow-white rounded-full object-cover"
        src="/img/lovepreet.jpg"
        alt="Profile"
      />
    </div>
  );
};

export default MainPage;
