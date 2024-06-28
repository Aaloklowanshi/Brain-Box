import React from "react";
import Image1 from "../assets/teacher_12571469.png";
import Image2 from "../assets/online-test_13972644.png";
import Image3 from "../assets/blended-learning_15748362.png";
import Image4 from "../assets/languages_3898150.png";
import Image5 from "../assets/webinar_2997554.png";
import Image6 from "../assets/group_921347.png";

import Image from "next/image";
const ExtraSection: React.FC = () => {
  return (
    <section className="bg-[#f3eada4d] w-full py-12 md:py-24 lg:py-34 dark:bg-gray-800">
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-[90%] mx-auto">
      <div className="w-full md:w-1/4 mx-auto text-left mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a202c]">
          Online Learning With{" "}
          <span className="text-[#ff6347]">e-Tuitions</span>
        </h1>
        <p className="text-sm md:text-base text-[#4a5568] mt-4">
          We will connect you to your teachers &amp; peers. Let us tell you
          what makes us one of the Best Online Tuition website.
        </p>
      </div>
      <br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7 w-full md:w-2/4 mx-auto">
        <div className="rounded-lg border bg-card text-card-foreground shadow-md">
          <div className="p-6">
            <Image
              src={Image1}
              alt="Classes for School &amp; College Students"
              className="w-16 h-16 mb-4"
              width="60"
              height="60"
              style={{ aspectRatio: "60 / 60", objectFit: "cover" }}
            />
            <h2 className="text-lg font-semibold text-[#234e43]">
              Classes for School
            </h2>
            <p className="text-[#4a5568] text-sm mt-2">
              We offer online classes for students in school &amp; college.
            </p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-md">
          <div className="p-6">
            <Image
              src={Image5}
              alt="Book Demo Class"
              className="w-16 h-16 mb-4"
              width="60"
              height="60"
              style={{ aspectRatio: "60 / 60", objectFit: "cover" }}
            />
            <h2 className="text-lg font-semibold text-[#234e43]">
              Book Demo Class
            </h2>
            <p className="text-[#4a5568] text-sm mt-2">
              Just choose your subject/course &amp; take a free trial class.
            </p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-md">
          <div className="p-6">
            <Image
              src={Image4}
              alt="Classes in Regional Language"
              className="w-16 h-16 mb-4"
              width="60"
              height="60"
              style={{ aspectRatio: "60 / 60", objectFit: "cover" }}
            />
            <h2 className="text-lg font-semibold text-[#234e43]">
              Classes in Regional Language
            </h2>
            <p className="text-[#4a5568] text-sm mt-2">
              Find teachers who will teach you in your mother tongue.
            </p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-md">
          <div className="p-6">
            <Image
              src={Image3}
              alt="Diverse Courses"
              className="w-16 h-16 mb-4"
              width="60"
              height="60"
              style={{ aspectRatio: "60 / 60", objectFit: "cover" }}
            />
            <h2 className="text-lg font-semibold text-[#234e43]">
              Diverse Courses
            </h2>
            <p className="text-[#4a5568] text-sm mt-2">
              Coding, Foreign languages, Dance, Music. Take online classes for
              all.
            </p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-md">
          <div className="p-6">
            <Image
              src={Image6}
              alt="Experienced Teachers"
              className="w-16 h-16 mb-4"
              width="60"
              height="60"
              style={{ aspectRatio: "60 / 60", objectFit: "cover" }}
            />
            <h2 className="text-lg font-semibold text-[#234e43]">
              Experienced Teachers
            </h2>
            <p className="text-[#4a5568] text-sm mt-2">
              Take lessons from the Best Teachers in India.
            </p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-md">
          <div className="p-6">
            <Image
              src={Image2}
              alt="Student's Results"
              className="w-16 h-16 mb-4"
              width="60"
              height="60"
              style={{ aspectRatio: "60 / 60", objectFit: "cover" }}
            />
            <h2 className="text-lg font-semibold text-[#234e43]">
              Student's Results
            </h2>
            <p className="text-[#4a5568] text-sm mt-2">
              Every student's results &amp; reviews are important to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default ExtraSection;
