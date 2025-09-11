import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import projectdata from "../json/projects.json";

const Projects = () => {
  // Card container to stagger children
  const cardContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Individual element variants
  const imgVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center gap-5 pt-5 md:pt-10">
        <h1 className="font-Inter font-bold text-[28px] md:text-[48px] leading-[100%] text-white-white">
          Proj<span className="text-green-pramery">ects</span>
        </h1>
        <p className="text-white-white font-normal font-Inter text-lg md:text-[24px] leading-[100%]">
          A selection of my recent work
        </p>
      </div>

      {/* Grid */}
      <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-10  md:my-20">
        {projectdata.map((item, index) => (
          <motion.div
            key={index}
            className="max-w-[419px] mx-auto border-2 border-white-white transition duration-700 hover:shadow-2xl shadow-white-white w-full h-96 bg-black-secondery rounded-[24px] overflow-hidden"
            variants={cardContainer}
            initial="hidden"
            animate="visible" 
          >
            <a href={item.projectlink} target="_blank" rel="noopener noreferrer">
              <motion.img src={item.projectimg} alt="" className="h-[215px]" variants={imgVariants} />
              <div className="px-5 pt-5 pb-6">
                <motion.h1
                  className="text-white-white text-[24px] font-Inter font-normal leading-[100%] pb-[10px]"
                  variants={titleVariants}
                >
                  {item.projectname}
                </motion.h1>
                <motion.p
                  className="text-white-white font-normal font-Inter text-lg leading-[100%] line-clamp-1"
                  variants={textVariants}
                >
                  {item.projecttext}
                </motion.p>
                <motion.button
                  className="max-w-full mt-6 w-full bg-transparent py-[10px] text-white-white hover:bg-green-pramery transition duration-700 shadow-[0_0_10px_#7cf03d] rounded-[30px] border border-[#76e43a]"
                  variants={buttonVariants}
                >
                  {item.button}
                </motion.button>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Swiper */}
      <div className="lg:hidden mb-20">
        <Swiper
          spaceBetween={32}
  modules={[Autoplay]}
  pagination={{ clickable: true }}
  loop={true}
  autoplay={{
    delay: 2500, // 2.5s ke baad next slide
    disableOnInteraction: false, // user swipe kare to bhi autoplay continue
  }}
  breakpoints={{
    375: { slidesPerView: 1 },
    500: { slidesPerView: 1.2 },
    640: { slidesPerView: 1.5 },
    750: { slidesPerView: 1.6 },
    768: { slidesPerView: 2 },
    1124: { slidesPerView: 2.5 },
    1200: { slidesPerView: 3 },
  }}
        >
          {projectdata.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="max-w-[419px] w-full bg-black-secondery rounded-[24px] overflow-hidden mt-10 border-2 border-white-white hover:shadow-2xl shadow-white-white"
                variants={cardContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <a href={item.projectlink} target="_blank" rel="noopener noreferrer">
                  <motion.img src={item.projectimg} alt="" className="h-[215px]" variants={imgVariants} />
                  <div className="px-5 pt-5 pb-6">
                    <motion.h1
                      className="text-white-white text-lg sm:text-[24px] font-Inter font-normal leading-[100%] pb-[10px]"
                      variants={titleVariants}
                    >
                      {item.projectname}
                    </motion.h1>
                    <motion.p
                      className="text-white-white font-normal font-Inter text-base sm:text-lg leading-[100%] line-clamp-1"
                      variants={textVariants}
                    >
                      {item.projecttext}
                    </motion.p>
                    <motion.button
                      className="max-w-full mt-6 w-full bg-transparent py-[10px] text-white-white hover:bg-green-pramery transition duration-500 shadow-[0_0_10px_#7cf03d] rounded-[30px] border border-[#76e43a]"
                      variants={buttonVariants}
                    >
                      {item.button}
                    </motion.button>
                  </div>
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
