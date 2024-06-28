import React from "react";
import Image1 from "../assets/user_9793970.png";
import Image2 from "../assets/little-girl-with-laptop-plays-games-concept-game-addiction.jpg";

import Image from 'next/image';

const AboutUsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="grid items-center w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative flex items-center justify-center p-4 bg-white rounded-lg shadow-lg">
          <Image
            src={Image2}
            alt="Student"
            className="w-full h-auto rounded-lg"
            width={400}
            height={300}
            style={{ aspectRatio: '400 / 300', objectFit: 'cover' }}
          />
          <div className="absolute bottom-0 left-0 flex items-center p-4 bg-white rounded-lg shadow-lg translate-y-1/2">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden ">
              <Image
                src={Image1}
                alt="User"
                className="aspect-square h-full w-full"
                width={40}
                height={40}
              />
            </span>
            <div className="ml-4 text-left">
              <div className="text-lg font-bold text-gray-900">1K+</div>
              <div className="text-sm text-gray-600">Enrolled Learners</div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-sm font-semibold text-gray-600">ABOUT US</h2>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            India&apos;s best <span className="text-green-500 underline">online tuition</span> website for quality education
          </h1>
          <p className="mb-6 text-gray-700">
            We are committed to providing personalised online classes that cater to the unique learning needs of each
            student.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-lg text-gray-900">
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-green-500"
              >
                
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span className="ml-2 text-md ">Expert Trainers</span>
            </li>
            <li className="flex items-center text-lg text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-green-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span className="ml-2">1-on-1 Live Tuition</span>
            </li>
            <li className="flex items-center text-lg text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-green-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span className="ml-2">Flexible Timings</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
