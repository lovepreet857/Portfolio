import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Skilldata from "../json/aboute.json";
import Lovepreet from "../../public/img/hhh.jpg"
import left from "../../public/svg/arrow-left-solid.svg"
import AOS from "aos";
import "aos/dist/aos.css";

// Skill Circle Component
AOS.init({
        duration: 1200,
        once: false,
        offset: 0,
      });
const SkillCircle = ({ icon, percentage, color }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) =>
      setDisplayValue(latest)
    );
    const controls = animate(count, percentage, {
      duration: 2,
      ease: "easeInOut",
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, percentage]);

  return (
    <div 
    
      className="relative flex  flex-col items-center justify-center "
    >
      <svg className="absolute w-[120px] h-[120px] -z-0">
        <motion.circle
          cx="60"
          cy="60"
          r="55"
          stroke={color}
          strokeWidth="6"
          fill="transparent"
          strokeDasharray="345"
          strokeDashoffset={345 - (345 * percentage) / 100}
          initial={{ strokeDashoffset: 345 }}
          animate={{ strokeDashoffset: 345 - (345 * percentage) / 100 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
      <div className="flex flex-col items-center gap-2 py-5 px-7 text-white relative">
        <img className="max-w-[50px]" src={icon} alt="skill" />
        {/* <span className="text-lg font-semibold">{displayValue}%</span> */}
      </div>
    </div>
  );
};

const Aboute = () => {
  const [activeTab, setActiveTab] = useState("about"); // "about" or "skill"
  const [Change, setChange] = useState(false);

  return (
    <div className="md:my-14">
      <div className="container ">
        <div
          className="flex flex-col lg:flex-row  justify-between  w-full items-center "
          
        >
          {/* Left Section */}
          <div
            className="flex flex-col max-w-[500px] gap-5 md:gap-10 lg:w-1/3 "
          >
            <img data-aos="fade-right" data-aos-delay="200"
              className=" lg:hidden border-4 border-amber-50 transition-all hover:shadow-2xl shadow-white rounded-[24px] object-cover"
              src="/img/hhh.jpg"
              alt="Profile"
            />
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              <h1 data-aos="fade-right" data-aos-delay="200"
                className=" text-[24px] sm:text-[30px] md:text-5xl font-bold text-white"
              >
                About Me...
              </h1>
              <p data-aos="fade-right" data-aos-delay="400"
                className="text-white text-sm sm:text-base md:text-lg md:text-[32px] font-normal"
              >
                Who I Am and What I Do
              </p>
              <p data-aos="fade-right" data-aos-delay="600"
                className="text-white text-lg  sm:text-2xl leading-[120%] max-w-[880px] w-full"
              >
                "I am <span className="text-green-pramery">Lovepreet</span>a
                passionate <span className="text-green-pramery">Fullstack</span>{" "}
                Developer, <span className="text-green-pramery">skilled</span>{" "}
                in both <span className="text-green-pramery">frontend</span> and
                backend technologies. I love building{" "}
                <span className="text-green-pramery">responsive</span> and
                efficient web applications that provide seamless user
                experiences."
              </p>
            </div>

            {/* Tabs */}
        <div className="w-full max-w-[500px] gap-5 sm:flex-row flex-col flex md:mt-5">
  <button
    onClick={() => setActiveTab("about")}
    className={`max-w-[209px] mx-auto sm:mx-0 cursor-pointer rounded-[30px] hover:bg-green-pramery outline-none py-3 transition-all duration-700 shadow-[0_0_10px_#7cf03d] border-[#76e43a] w-full font-medium border-2 font-Inter ${
      activeTab === "about" ? "hidden" : "bg-transparent text-green-pramery"
    }`}
  >
    <img
      className="w-8 sm:w-12 mx-auto"
      src={left}
      alt=""
    />
  </button>

  <a
    href="img/lovely_cv.pdf"
    download="Lovepreet-CV.pdf"
    className={`w-full ${activeTab === "about" ? "block" : "hidden"}`}
  >
    <button data-aos="fade-up" data-aos-delay="800"
      onClick={() => setChange(!Change)}
      className={`cursor-pointer text-lg sm:text-[24px] outline-none hover:bg-green-pramery hover:text-black shadow-[0_0_10px_#7cf03d] border-[#76e43a] rounded-[30px] py-3 transition-all duration-700 w-full font-medium border-2 font-Inter ${
        activeTab === "about"
          ? "block"
          : "hidden"
      } ${Change ? "bg-green-pramery text-black" : "bg-transparent text-green-pramery"}`}
    >
      Download CV
    </button>
  </a>

  <button data-aos="fade-up" data-aos-delay="1000"
    onClick={() => {
      setActiveTab("skill");
      setChange(false); // <-- Reset CV button styles when Skill is clicked
    }}
    className={`cursor-pointer text-black-secondery text-lg sm:text-[24px] outline-none shadow-[0_0_10px_#7cf03d] hover:bg-green-pramery hover:text-black border-[#76e43a] rounded-[30px] py-3 transition-all duration-700 w-full font-medium border-2 font-Inter ${
      activeTab === "skill" ? "hidden" : "bg-transparent text-green-pramery"
    }`}
  >
    Skill
  </button>
</div>

          </div>
          <div className="max-w-[500px] w-full">

          {activeTab === "about" && (
            <>
              <div className="   flex flex-col ">
                <img data-aos="fade-left" data-aos-delay="200"
                  className=" hidden  lg:block  border-4 border-amber-50 transition-all hover:shadow-2xl shadow-white rounded-[24px] object-cover"
                  src={Lovepreet}
                  alt="Profile"
                />
                {/* <div className="max-w-[200px] h-50 rounded-full overflow-hidden mx-auto">
                <img src="public/img/lovely.jpg" alt="" />
              </div>
              <div className="max-w-[319px] w-full h-[218px] rounded-[24px] p-[30px]  mt-[50px]">
                <p className="font-normal font-Inter text-lg leading-[100%] text-white-white">
                  Full Stack Web Development.
                </p>
                <div className="flex justify-between mt-[54px]">
                  <p className=" text-base font-Inter font-normal leading-[100%] text-white-white">
                    Courseta
                  </p>
                  <p className=" text-base font-Inter font-normal leading-[100%] text-white-white">
                    Aug 2023
                  </p>
                </div>
              </div> */}
              </div>
            </>
          )}

          {/* Right Section */}
          <div
            className="flex flex-col gap-[50px] "
          >
            {activeTab === "skill" && (
              <div className="grid sm:grid-cols-2 h-full w-full pt-12  md:grid-cols-3 gap-3 sm:gap-5 md:gap-10 my-10 lg:my-0 ">
                {Skilldata.map((item, index) => (
                  <div
                  data-aos={index % 3 === 0 ? "fade-up" : index % 3 === 1 ? "fade-up" : "fade-down"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                   key={index}>
                    <SkillCircle
                      icon={item.img}
                      percentage={item.percentage}
                      color={item.color}
                    />
                    <p
                      className="text-center text-[24px] text-white font-Inter font-medium leading-[100%] mt-5"
                    >
                      {item.titel}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboute;
