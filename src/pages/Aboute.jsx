import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Skilldata from "../json/aboute.json";
import Lovepreet from "../../public/img/hhh.jpg"
// Skill Circle Component
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
    <motion.div
      className="relative flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
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
        <span className="text-lg font-semibold">{displayValue}%</span>
      </div>
    </motion.div>
  );
};

const Aboute = () => {
  const [activeTab, setActiveTab] = useState("about"); // "about" or "skill"
  const [Change, setChange] = useState(false);

  return (
    <div className="my-8">
      <div className="container">
        <motion.div
          className="flex flex-col lg:flex-row gap-[25px] md:gap-[50px]  w-full items-center md:justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Left Section */}
          <motion.div
            className="flex flex-col max-w-[500px] gap-5 md:gap-10 lg:w-1/3 "
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
                duration: 1,
              }}
              className=" lg:hidden border-4 border-amber-50 transition-all hover:shadow-2xl shadow-white rounded-[24px] object-cover"
              src="/img/hhh.jpg"
              alt="Profile"
            />
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              <motion.h1
                className=" text-[24px] sm:text-[30px] md:text-5xl font-bold text-white"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                About Me...
              </motion.h1>
              <motion.p
                className="text-white text-sm sm:text-base md:text-lg md:text-[32px] font-normal"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Who I Am and What I Do
              </motion.p>
              <motion.p
                className="text-white text-lg  sm:text-2xl leading-[120%] max-w-[880px] w-full"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              >
                "I am <span className="text-green-pramery">Lovepreet</span>a
                passionate <span className="text-green-pramery">Fullstack</span>{" "}
                Developer, <span className="text-green-pramery">skilled</span>{" "}
                in both <span className="text-green-pramery">frontend</span> and
                backend technologies. I love building{" "}
                <span className="text-green-pramery">responsive</span> and
                efficient web applications that provide seamless user
                experiences."
              </motion.p>
            </div>

            {/* Tabs */}
        <div className="w-full max-w-[500px] gap-5 sm:flex-row flex-col flex md:mt-5">
  <button
    onClick={() => setActiveTab("about")}
    className={`rounded-[30px] hover:bg-green-pramery outline-none py-3 transition-all duration-700 shadow-[0_0_10px_#7cf03d] border-[#76e43a] w-full font-medium border-2 font-Inter ${
      activeTab === "about" ? "hidden" : "bg-transparent text-green-pramery"
    }`}
  >
    <img
      className="w-8 sm:w-12 mx-auto"
      src="public/svg/arrow-left-solid.svg"
      alt=""
    />
  </button>

  <a
    href="img/lovepreet_Resume.pdf"
    download="Lovepreet-CV.pdf"
    className={`w-full ${activeTab === "about" ? "block" : "hidden"}`}
  >
    <button
      onClick={() => setChange(!Change)}
      className={`text-lg sm:text-[24px] outline-none hover:bg-green-pramery hover:text-black shadow-[0_0_10px_#7cf03d] border-[#76e43a] rounded-[30px] py-3 transition-all duration-700 w-full font-medium border-2 font-Inter ${
        activeTab === "about"
          ? "block"
          : "hidden"
      } ${Change ? "bg-green-pramery text-black" : "bg-transparent text-green-pramery"}`}
    >
      Download CV
    </button>
  </a>

  <button
    onClick={() => {
      setActiveTab("skill");
      setChange(false); // <-- Reset CV button styles when Skill is clicked
    }}
    className={`text-black-secondery text-lg sm:text-[24px] outline-none shadow-[0_0_10px_#7cf03d] hover:bg-green-pramery hover:text-black border-[#76e43a] rounded-[30px] py-3 transition-all duration-700 w-full font-medium border-2 font-Inter ${
      activeTab === "skill" ? "bg-green-pramery text-black" : "bg-transparent text-green-pramery"
    }`}
  >
    Skill
  </button>
</div>

          </motion.div>
          {activeTab === "about" && (
            <>
              <div className="max-w-[500px] w-full   flex flex-col ">
                <motion.img
                  initial={{ opacity: 0, y: 50, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                    duration: 1,
                  }}
                  className=" hidden lg:block  border-4 border-amber-50 transition-all hover:shadow-2xl shadow-white rounded-[24px] object-cover"
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
          <motion.div
            className="flex flex-col gap-[50px]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {activeTab === "skill" && (
              <div className="grid sm:grid-cols-2 w-[500px] md:grid-cols-3 gap-3 sm:gap-5 md:gap-10">
                {Skilldata.map((item, index) => (
                  <div key={index}>
                    <SkillCircle
                      icon={item.img}
                      percentage={item.percentage}
                      color={item.color}
                    />
                    <motion.p
                      className="text-center text-[24px] text-white font-Inter font-medium leading-[100%] mt-5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      {item.titel}
                    </motion.p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboute;
