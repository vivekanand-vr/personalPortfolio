import React from 'react';
import { FaGithub, FaLinkedin,  } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { motion } from 'framer-motion';

const metrics = [
  {
    title: '2+',
    text: 'Years of Developer Experience'
  },
  {
    title: '10+',
    text: 'Full Stack Projects Completed'
  },
  {
    title: '700+',
    text: 'LeetCode Problems Solved'
  },
  {
    title: '3★',
    text: 'Ratings on CodeChef'
  }
]

function Metrics(){
  return(
    <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}>
      {metrics.map((metric, index) => (
          <div key={index}>
            <h3 className="text-xl md:text-3xl font-semibold text-sky-400">{metric.title}</h3>
            <p className="text-xs md:text-sm text-neutral-400">{metric.text}</p>
          </div>
      ))}
    </motion.div>
  )
}

function SocialHandles() {
  return (
    <motion.div
        className="flex justify-center md:justify-start space-x-4 md:space-x-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <a href="https://github.com/vivekanand-vr" target="_blank" className="text-xl md:text-3xl hover:text-sky-400 transition-colors"><FaGithub /></a>
        <a href="https://leetcode.com/vicky_007/" target="_blank" className="text-xl md:text-3xl hover:text-sky-400 transition-colors"><SiLeetcode/></a>
        <a href="https://www.linkedin.com/in/vivekanand-vernekar" target="_blank"  className="text-xl md:text-3xl hover:text-sky-400 transition-colors"><FaLinkedin /></a>
        <a href='https://drive.google.com/file/d/1e7AKsfWZ8t1ledklyEZtp8OsQnWT7d1I/view?usp=sharing' target="_blank" 
           className='text-sm md:text-xl border border-white p-1.5 md:p-2 -mt-2 hover:bg-white hover:text-black transition duration-250 ease-in'>Resume</a>
        </motion.div>
  );
}

export { Metrics, SocialHandles };
