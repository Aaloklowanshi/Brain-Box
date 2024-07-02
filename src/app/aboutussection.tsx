import React from "react";
import Image1 from "../assets/user_9793970.png";
import Image2 from "../assets/little-girl-with-laptop-plays-games-concept-game-addiction.jpg";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when half of the element is in view
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="grid items-center w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center p-4 bg-white rounded-lg shadow-lg"
        >
          <div className="relative w-[400px] h-[300px]">
            <Image
              src={Image2}
              alt="Student"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 flex items-center p-4 bg-white rounded-lg shadow-lg translate-y-1/2">
            <div className="relative w-10 h-10 overflow-hidden rounded-full">
              <Image
                src={Image1}
                alt="User"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="ml-4 text-left">
              <div className="text-lg font-bold text-gray-900">1K+</div>
              <div className="text-sm text-gray-600">Enrolled Learners</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="transform transition-transform duration-1000"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsSection;
