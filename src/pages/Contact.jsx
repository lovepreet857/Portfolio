import React, { useState } from "react";
import Input from "../components/ui/Input";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
  const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload nahi hoga
    alert("Successfully sent message!"); // alert show karega
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agree: false,
      message: "",
    }); // form reset
  };

  return (
    <div className="container py-3 sm:pt-10 items-center grid lg:grid-cols-2 gap-10">
      {/* Left Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInLeft}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          variants={fadeInUp}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[24px] md:text-[48px] font-bold font-Inter leading-[100%] pb-5 text-white-white"
        >
          Let’s Work <span className="text-green-pramery">Together!</span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-white-white text-lg md:text-[24px] font-Inter font-normal"
        >
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.5, staggerChildren: 0.15 }}
          className="hidden lg:block mt-10"
        >
          <div className="flex gap-3">
            {[
              { href: "https://www.facebook.com/", src: "svg/facebook.svg" },
              { href: "https://twitter.com/", src: "svg/twitter.svg" },
              { href: "https://www.linkedin.com/feed/", src: "svg/linkedin.svg" },
              { href: "https://github.com/", src: "svg/github.svg" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                className="p-2 border-2 border-green-500 rounded-full"
              >
                <img className="max-w-6" src={social.src} alt="social-icon" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Form Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInRight}
        transition={{ duration: 0.8 }}
      >
        <motion.form
          onSubmit={handleSubmit}
          className="hover:bg-transparent border-2 border-white-white hover:shadow-2xl shadow-white bg-opacity-60 py-10 md:py-[50px] px-5 md:px-10 rounded-[24px] flex flex-col gap-6 backdrop-blur-md"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="grid sm:grid-cols-2 gap-[32px]" variants={fadeInUp}>
            <Input
              name="firstName"
              placeholder="First Name"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Input
              name="email"
              placeholder="Enter your E-mail"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label className="text-white-white font-Inter font-normal text-base md:text-[24px] leading-[100%] pb-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              className="w-full px-4 py-2 mt-3 rounded-lg bg-transparent border border-white-white text-white outline-none"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="py-3 text-center w-full text-white-white bg-green-pramery font-Inter font-medium text-[16px] max-w-[208px] m-auto rounded-[24px] btn"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            variants={fadeInUp}
          >
            Send message 
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
