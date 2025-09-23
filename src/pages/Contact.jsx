import { useState } from "react";
import Input from "../components/ui/Input";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
    message: "",
  });
AOS.init({
        duration: 1200,
        once: false,
        offset: 0,
      });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };



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
    <div className="container  pt-10 md:pt-[100px]     grid lg:grid-cols-2 gap-10">
      {/* Left Section */}
      <div
        className="max-w-[500px] w-full"
      >
        <h1 data-aos="fade-right" data-aos-delay="200"
          className="text-[24px] md:text-[48px]  font-bold font-Inter leading-[100%] pb-5 text-white-white"
        >
          Let’s Work <span className="text-green-pramery">Together!</span>
        </h1>
        <p data-aos="fade-right" data-aos-delay="400"
          className="text-white-white text-lg md:text-[24px] font-Inter font-normal"
        >
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        {/* Social Icons */}
        <div
          className="hidden lg:block mt-10"
        >
          <div className="flex gap-3">
            {[
              { href: "https://www.facebook.com/", src: "svg/facebook.svg" },
              { href: "https://twitter.com/", src: "svg/twitter.svg" },
              { href: "https://www.linkedin.com/feed/", src: "svg/linkedin.svg" },
              { href: "https://github.com/", src: "svg/github.svg" },
            ].map((social, i) => (
              <a data-aos="fade-up" data-aos-delay={i*100+400}
                key={i}
                href={social.href}
                target="_blank"
                className="p-2 border-2 border-green-500 rounded-full"
              >
                <img className="max-w-6 w-full" src={social.src} alt="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div      >
        <form
          onSubmit={handleSubmit}
          className=" bg-opacity-60   rounded-[24px] flex flex-col gap-6 backdrop-blur-md"
        >
          <div className="grid sm:grid-cols-2 gap-[32px]" >
            <Input data-aos="fade-down" data-aos-delay={1000}
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input data-aos="fade-down" data-aos-delay={800}
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div >
            <Input data-aos="fade-down" data-aos-delay={600}
              name="email"
              placeholder="Enter your E-mail"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div 
          
          
          >

           
            <textarea data-aos="fade-down" data-aos-delay={400}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              className="w-full px-4 py-2 mt-3 rounded-lg placeholder-white bg-transparent border border-green-pramery text-white outline-none"
            />
          </div>

          <button data-aos="fade-down" data-aos-delay={200}
            type="submit"
            className="py-3 text-center w-full  text-white-white cursor-pointer bg-green-pramery font-Inter font-medium text-[16px]  m-auto rounded-[24px] "
            transition={{ type: "spring", stiffness: 120 }}
          >
            Send message 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
