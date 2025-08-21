import React, { useState } from 'react'
import Input from '../components/ui/input'

const Contact = () => {
   const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
    message:""
  });
    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
  <>
  <div className='container py-5 md:mp-10 lg:py-[60px] md:h-screen grid lg:grid-cols-2'>
    <div>

      <div className=' mb-10 md:mb-[70px] lg:mb-[137px] max-w-[528px] w-full'>
        <h1 className='text-[24px] md:text-[48px] font-bold font-Inter leading-[100%] pb-5 text-white-white'>Let’s Work <span className='text-green-pramery'>Together!</span></h1>
        <p className='text-white-white text-lg md:text-[24px] font-Inter font-normal'>I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
      </div>
      <div className='hidden lg:block'>

       <div className="flex gap-3 pb-[32px]">
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
            <div className='flex flex-col gap-[14px]'>
              <span className='flex items-center gap-[10px]'>
                <img src="public/svg/email.svg" alt="" />
                 <p className='text-white-white font-Inter text-lg leading-[130%] font-normal'>Email: <a className='text-green-pramery' href="">singhlovepreet8575@gmail.com</a></p>
              </span>
              <span className='flex items-center gap-[10px]'>
                <img src="public/svg/phone.svg" alt="" />
                 <p className='text-white-white font-Inter text-lg leading-[130%] font-normal'>Phone: <a className='text-green-pramery' href="">+91 77175 62499</a></p>
              </span><span className='flex items-center gap-[10px]'>
                <img src="public/svg/location.svg" alt="" />
                 <p className='text-white-white font-Inter text-lg leading-[130%] font-normal'>Address: <a className='text-green-pramery' href="">Abohar Punjab</a></p>
              </span>
            </div>
      </div>
    </div>
    <div>
       <form className=' bg-gray-600 py-10 md:py-[50px] px-5 md:px-10 rounded-[24px] flex flex-col gap-6'>
          <div className="grid sm:grid-cols-2 gap-[32px] max-w-full">
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
          </div> 
          <div>
             <Input
            name="email"
            placeholder="Enter your E-mail"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          </div>
            <div>
              <label className='text-white-white font-Inter font-normal text-base md:text-[24px] leading-[100%] pb-3'>Message Textarea</label>
           <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Write your message..."
    rows={5}
    className="w-full px-4 py-2 mt-3 rounded-lg bg-transparent border border-white-white text-white outline-none "
  />
          </div>
          <button className='py-3 text-center w-full text-white-white bg-green-pramery font-Inter font-medium text-[16px]   max-w-[208px] m-auto rounded-[24px] btn'>View Projects</button>
       </form>
    </div>
    <div className='lg:hidden mt-[60px]'>

       <div className="flex gap-3 pb-[32px]">
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
            <div className='flex flex-col gap-[14px]'>
              <span className='flex items-center gap-[10px]'>
                <img src="public/svg/email.svg" alt="" />
                 <p className='text-white-white font-Inter text-lg leading-[130%] font-normal'>Email: <a className='text-green-pramery' href="">singhlovepreet8575@gmail.com</a></p>
              </span>
              <span className='flex items-center gap-[10px]'>
                <img src="public/svg/phone.svg" alt="" />
                 <p className='text-white-white font-Inter text-lg leading-[130%] font-normal'>Phone: <a className='text-green-pramery' href="">+91 77175 62499</a></p>
              </span><span className='flex items-center gap-[10px]'>
                <img src="public/svg/location.svg" alt="" />
                 <p className='text-white-white font-Inter text-lg leading-[130%] font-normal'>Address: <a className='text-green-pramery' href="">Abohar Punjab</a></p>
              </span>
            </div>
      </div>
  </div>
  </>
  )
}

export default Contact
