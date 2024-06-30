"use client";

import React from "react";


import { sendEmail } from "@/actions/sendemail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";


const ContactSection: React.FC = () => {

  // const { ref } = useSectionInView("Contact");

  return (


    <section 
    id="contact"
    className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="py-[2%] bg-[#ff6347f4]">
       <h2 className="text-xl text-white font-semibold text-left sm:text-3xl ms-[3%] md:text-3xl">Subscribe now to make learning easy and smart!</h2>
</div>
      <div className="flex flex-col justify-center items-center  container px-4 sm:flex-row  md:px-6  ">
        <div className="flex flex-col w-[35%] items-center justify-center space-y-4 text-center animate__animated animate__fadeIn">
          <div className="space-y-4">
            <div className="inline-block rounded-lg  bg-gray-100 px-3 py-1 text-md dark:bg-gray-800">
              Contact Us
            </div>
            <h2 className=" text-4xl font-bold tracking-tighter text-[#1a202c] sm:text-5xl">
              Get in <span className="text-[#ff6347]"> Touch</span>
            </h2>
            <p className="mt-[2%] max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have any questions or need further information? Contact us today!
            </p>
            {/* <div  className="mx-auto" style={{ width: '60%', height: '60%' }}>
              <Image
                src={Contact}
                alt="Hero"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
              />
            </div> */}
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="mx-auto w-[70%] h-[60%] justify-center items-center mt-[5%] bg-[#ffffff] max-w-2xl py-12 animate__animated animate__fadeInUp p-[5%] rounded-md shadow-md" 
         style={{ 
           backgroundImage:'url("/background.png")',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}
        >
          <form 
          className="grid gap-4"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
  
            if (error) {
              toast.error(error);
              return;
            }
  
            toast.success("Email sent successfully!");
          }}
          >
            <div className="grid gap-1">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="block p-2 w-full rounded-md bg-[#e3ebf9] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                className="block w-full p-2 rounded-md bg-[#e3ebf9] border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name = "senderEmail"
                type="email"
                required
                maxLength={500}
          placeholder="Your email"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
               name="message"
               placeholder="Your message"
               required
               maxLength={5000}
                rows={4}
                className="block w-full p-2 rounded-md bg-[#e3ebf9] border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <SubmitBtn />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
