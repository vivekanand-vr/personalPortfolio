import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Metrics, SocialHandles } from './SocialHandles';

const titles = [
  { text: "Frontend Engineer", color: "from-blue-400 to-cyan-300" },
  { text: "Backend Engineer", color: "from-purple-400 to-pink-300" },
  { text: "Full Stack Engineer", color: "from-emerald-400 to-green-300" }
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={fadeIn}
      className="relative min-h-screen text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
   
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center mb-6 md:mb-12">
          <div className="w-40 h-48 md:w-56 md:h-72 mb-3 md:mb-0 md:mr-8">
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="V_Image.jpg" 
                alt="Vivekanand" 
                className="rounded-lg shadow-lg object-cover w-40 h-48 md:w-56 md:h-72 transition-all"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <motion.h2 
              className="text-xl md:text-2xl text-blue-300 mb-2"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hey there, I am
            </motion.h2>
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Vivekanand
            </motion.h1>

            <div className="h-[40px] mb-4 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTitleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full"
                >
                  <h2 className="text-2xl sm:text-3xl font-semibold">
                    I am a{" "}
                    <span className={`bg-gradient-to-r ${titles[currentTitleIndex].color} bg-clip-text text-transparent px-2 py-1 rounded`}>
                      {titles[currentTitleIndex].text}
                    </span>
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p 
              className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I craft engaging and responsive web applications that bring ideas to life. 
              With expertise in both frontend and backend technologies, 
              I transform complex problems into elegant solutions.
            </motion.p>
            
            <SocialHandles />
          </div>
        </div>
        <Metrics />
      </div>
    </motion.section>
  );
};

export default Hero;