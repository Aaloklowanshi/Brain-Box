import React from "react";
import Logo from "../assets/logo_brainbox-removebg-preview.png";
import Image from "next/image";
const Topbar: React.FC = () => {
  return (
    <header className="ms-[5%] px-4 lg:px-6 h-14 mt-[2%] flex items-center">
      <a className="flex items-center justify-center" href="#">
        <div style={{ width: "75%", height: "70%" }}>
          <Image
            src={Logo}
            alt="Hero"
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <span className="sr-only">Tutoring Experts</span>
      </a>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F3EADA"
            d="M38.3,-65.2C49.2,-60,57.3,-48.9,64.8,-37C72.4,-25.2,79.4,-12.6,78.8,-0.3C78.2,11.9,70,23.8,61.5,34C53,44.2,44.2,52.8,33.9,61.7C23.6,70.6,11.8,79.8,-1.5,82.4C-14.8,84.9,-29.5,80.8,-41.5,72.9C-53.5,65,-62.8,53.3,-71.4,40.5C-79.9,27.7,-87.8,13.9,-90.2,-1.4C-92.6,-16.7,-89.6,-33.3,-80.6,-45.5C-71.7,-57.6,-56.9,-65.3,-42.5,-68.5C-28.1,-71.7,-14.1,-70.3,-0.2,-70C13.7,-69.7,27.4,-70.4,38.3,-65.2Z"
            transform="translate(100 100)"
          />
        </svg>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          className="text-md font-semibold hover:underline underline-offset-4 transition-all duration-300 ease-in-out hover:text-bold text-"
          href="#"
        >
          Services
        </a>
        <a
          className="text-md font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out"
          href="#"
        >
          Tutors
        </a>
        <a
          className="text-md font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out"
          href="#"
        >
          Testimonials
        </a>
        <a
          className="text-md font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out"
          href="#"
        >
          Contact
        </a>
      </nav>
      
    
    </header>
  );
};

export default Topbar;
