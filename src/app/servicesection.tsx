import React from "react";
import Imagetest from "../assets/Online test.gif";
import Imageacad from "../assets/Online learning-1.gif";
import Imagelang from "../assets/Learning languages.gif";
import Image from "next/image";

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate__animated animate__fadeIn">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 text-customDgreen py-1 text-sm dark:bg-gray-800">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-grey-900 sm:text-5xl">
              Tailored Tutoring for Your Success
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our experienced tutors offer personalized support in a wide range
              of subjects to help you reach your academic goals.
            </p>
          </div>
        </div>
        <div className="mx-auto justify-center items-center grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12 animate__animated animate__fadeInUp">
          <div className=" grid gap-1">
            <div style={{ width: "70%", height: "70%" }}>
              <Image
                src={Imageacad}
                alt="Hero"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl mb-1 font-bold">Academic Tutoring</h3>
            <p className="w-[70%] text-gray-500 dark:text-gray-400">
              Get personalized support in core academic subjects like math,
              science, and English.
            </p>
          </div>
          <div className="grid gap-1">
            <div style={{ width: "70%", height: "70%" }}>
              <Image
                src={Imagetest}
                alt="Hero"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl mb-1 font-bold">Test Prep</h3>
            <p className="w-[70%] text-gray-500 dark:text-gray-400">
              Prepare for standardized tests like the SAT, ACT, and GRE with
              expert guidance.
            </p>
          </div>
          <div className="grid gap-1">
          <div style={{ width: "70%", height: "70%" }}>
              <Image
                src={Imagelang}
                alt="Hero"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl w-[50%] font-bold">Language Learning</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Learn a new language or improve your proficiency with our
              experienced tutors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
