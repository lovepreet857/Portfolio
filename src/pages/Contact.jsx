import { useState, useEffect } from "react";
import Input from "../components/ui/Input";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 0,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_neuue49";   
    const templateId = "template_jw6yz2p";  
    const publicKey = "CnPP-qPNBy8PIt8ya";       

    
    emailjs
      .send(serviceId, templateId, {
        from_name: `${formData.firstName} ${formData.lastName}`, 
        reply_to: formData.email, 
        message: formData.message, 
      }, publicKey)
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("❌ Error:", error.text);
          alert("Failed to send message. Check console for details.");
        }
      );
  };

  return (
    <div className="container sm:pt-30 sm:pb-0  pt-[100px] pb-[100px] grid lg:grid-cols-2 gap-10 ">
      {/* Left Section */}
      <div className="max-w-[500px] w-full">
        <h1
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-[24px] md:text-[48px] font-bold font-Inter leading-[100%] pb-5 text-white-white"
        >
          Let’s Work <span className="text-green-pramery">Together!</span>
        </h1>
        <p
          data-aos="fade-right"
          data-aos-delay="400"
          className="text-white-white text-lg md:text-[24px] font-Inter font-normal"
        >
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </div>

      {/* Right Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-opacity-60 rounded-[24px] flex flex-col gap-6 backdrop-blur-md p-6"
        >
          <div className="grid sm:grid-cols-2 gap-[32px]">
            <Input
              data-aos="fade-down"
              data-aos-delay={1000}
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input
              data-aos="fade-down"
              data-aos-delay={800}
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Input
              data-aos="fade-down"
              data-aos-delay={600}
              name="email"
              placeholder="Enter your E-mail"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <textarea
              data-aos="fade-down"
              data-aos-delay={400}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              required
              className="w-full px-4 py-2 mt-3 rounded-lg placeholder-white bg-transparent border border-green-pramery text-white outline-none"
            />
          </div>

          <button
            data-aos="fade-down"
            data-aos-delay={200}
            type="submit"
            className="py-3 text-center w-full text-white-white cursor-pointer bg-green-pramery font-Inter font-medium text-[16px] m-auto rounded-[24px]"
          >
            Send message
          </button>
        </form>
    </div>
  );
};

export default Contact;
