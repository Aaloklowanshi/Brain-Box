import React from "react";
import HeroImg from "./../assets/Online learning-amico.png";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const TypingText: React.FC<{ text: string }> = ({ text }) => {
    const lines = text.split("\n");

    return (
      <>
        {lines.map((line, lineIndex) => (
          <motion.div
            key={lineIndex}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              lineHeight: "0.7",
              paddingBottom: "0.2em",
            }}
          >
            {line.split("").map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: (lineIndex * line.length + letterIndex) * 0.05,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <br />
          </motion.div>
        ))}
      </>
    );
  };

  return (
    <section className="w-full py-8 md:py-16 lg:py-24 xl:py-20">
      <div className="container mx-auto flex flex-row w-full px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] w-full">
          <div className="space-y-4 animate__animated animate__fadeIn">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, repeatType: "loop" }}
              >
                <TypingText text={`Unlock Your Potential\nwith Brain Box`} />
              </motion.div>
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Personalized tutoring services to help you excel in any subject.
              Our experienced tutors are dedicated to your academic success.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate__animated animate__fadeInUp">
              <a
                className="inline-flex h-10 items-center justify-center rounded-md bg-customOrange px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Get Started
              </a>
              <a
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center rounded-xl object-cover object-center sm:w-full lg:order-last animate__animated animate__fadeInRight">
            <div style={{ width: '100%', height: '80%' }}>
              <Image
                src={HeroImg}
                alt="Hero"
                width={200}
                height={200}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
