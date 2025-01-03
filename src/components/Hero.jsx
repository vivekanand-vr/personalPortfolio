import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Metrics, SocialHandles } from './SocialHandles';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
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
      className="min-h-screen text-white flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center justify-center mb-6 md:mb-12">
          <div className="w-40 h-48 md:w-56 md:h-72 mb-3 md:mb-0 md:mr-8">
            <motion.img 
              src="V.jpg" 
              alt="Vivekanand" 
              className="border-4 border-white rounded-xl shadow-lg object-cover w-40 h-48 md:w-56 md:h-72"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="w-96 md:w-2/3 text-center md:text-left">
            <motion.h2 
              className="text-xl md:mb-2"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hey there, I am
            </motion.h2>
            <motion.h1 
              className="text-4xl sm:text-5xl font-semibold mb-2 md:mb-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Vivekanand
            </motion.h1>
            <motion.h1 
              className="text-2xl sm:text-3xl font-semibold mb-2 md:mb-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I am a <span className='text-sky-400'>Full Stack Developer</span>
            </motion.h1>
            <motion.p 
              className="text-sm md:text-base text-gray-300 mb-6"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I craft engaging and responsive web applications that bring ideas to life. Let's build something amazing together!
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