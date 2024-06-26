import React from "react";
import Contact from "../assets/Mention (1).gif"
import bg from "../assets/background.png"
import Image from "next/image";


const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f3eada4d]">
      <div className="flex flex-row container px-4 md:px-6">
        <div className="flex flex-col w-[35%] items-center justify-center space-y-4 text-center animate__animated animate__fadeIn">
          <div className="space-y-4">
            <div className="inline-block rounded-lg  bg-gray-100 px-3 py-1 text-md dark:bg-gray-800">
              Contact Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#1a202c] sm:text-5xl">
              Get in <span className="text-[#ff6347]">Touch</span>
            </h2>
            <p className="mt-[2%] max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have any questions or need further information? Contact us today!
            </p>
            <div  className="mx-auto" style={{ width: '60%', height: '60%' }}>
              <Image
                src={Contact}
                alt="Hero"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
              />
            </div>
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
         }}>
          <form className="grid gap-4">
            <div className="grid gap-1">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="block w-full rounded-md bg-[#e3ebf9] border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="block w-full rounded-md bg-[#e3ebf9] border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-md bg-[#e3ebf9] border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
