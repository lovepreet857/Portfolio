import React, { useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

const mainpage = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "Designer.", "full stack Developer."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 0,
    });

    const handleScroll = () => {
      Aos.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container py-5 md:mp-10 lg:py-[60px] md:h-screen items-center justify-between flex flex-col-reverse gap-20 sm:grid grid-cols-2">
        <div>
          <h1 className="text-white-white text-[30px] md:text-[40px] lg:text-[55px] font-Inter">
            <span> Lovepreet Singh</span>
          </h1>
          <h2 className="sm:text-4xl text-3xl font-bold  bg-gradient-to-r from-white-white to-green-pramery bg-clip-text text-transparent">
            I am <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#7cf03d"
            />
          </h2>
          <i className="text-white-white font-Inter text-xs md:text-base my-[10px] mr-[25px] line-clamp-3">
            I am a passionate Full-Stack Developer skilled in building scalable
            and user-friendly web applications. On the frontend, I work with
            React,js,html,css, and Tailwind CSS 
          </i>

          <div className=" flex flex-col lg:grid grid-cols-2 gap-5 items-center mt-10 sm:mt-5">
            <button className="text-center  rounded-[40px] text-black  btn  bg-green-pramery text-base font-Inter font-medium">
              Download cv
            </button>
            <div className="flex gap-3">
              <a
                className="p-2 border-solid border-2 border-green-pramery rounded-[50%]"
                href="https://www.facebook.com/"
              >
                <img
                  className="max-w-6"
                  src="public/svg/facebook.svg"
                  alt="facboock"
                />
              </a>
              <a
                className="p-2 border-solid border-2 border-green-pramery rounded-[50%]"
                href="https://twitter.com/"
              >
                <img
                  className="max-w-6"
                  src="public/svg/twitter.svg"
                  alt="twitter"
                />
              </a>
             <a
                className="p-2 border-solid border-2 border-green-pramery  rounded-[50%]"
                href="https://www.linkedin.com/feed/"
                target="_blank"
              >
                <img
                  className="max-w-6"
                  src="public/svg/linkedin.svg"
                  alt="linkedin"
                />
              </a>
              <a
                className="p-2 border-solid border-2 border-green-pramery rounded-[50%] "
                href="https://github.com/"
              >
                <img
                  className="max-w-6"
                  src="public/svg/github.svg"
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>
        <img
          className="border-5 border-amber-50 transition-all hover:shadow-2xl shadow-white-white rounded-full block max-w-[85%] w-full object-cover top-[30px]"
          src="public/img/lovely.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default mainpage;
