import { styles } from "../styles";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pimage from "../assets/V.jpg";
import Social_links from "./Social_links";

const titles = [
  { text: "Full Stack Developer", color: "bg-red-800" },
  { text: "Frontend Developer", color: "bg-blue-800" },
  { text: "Backend Developer", color: "bg-emerald-800" }
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-wrap relative w-full h-screen items-center justify-center">
      <div className={`absolute inset-0 top-[150px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-8`}>
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center items-center w-36 h-36 sm:w-48 sm:h-48 rounded-full border-4 border-white overflow-hidden">
            <img src={pimage} alt="Profile" className="w-full h-auto" />
          </div>
          <br className="sm:block hidden" />
          <h1 style={{ textShadow: "blue 4px 3px 5px" }} className={`${styles.heroHeadText} text-gray-200 mt-4 sm:mt-0`}>
            Hi, I'm Vivekanand
          </h1>
          <h1 className="text-gray-200 text-xl sm:text-4xl font-semibold mt-2">
            I am a  
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTitleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`${titles[currentTitleIndex].color} p-1 m-1 ml-2 w-60 md:w-[400px] rounded-md inline-block`}
              >
                {titles[currentTitleIndex].text}
              </motion.span>
            </AnimatePresence>
          </h1>
          <Social_links />
        </div>
      </div>
    </section>
  );
};

export default Hero;