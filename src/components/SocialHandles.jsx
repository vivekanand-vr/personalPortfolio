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
    title: '4.5',
    text: 'Stars Average on Project Reviews and Mentorship Feedback'
  }
]

function Metrics(){
  return(
    <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}>
      {metrics.map((metric, index) => (
          <div key={index}>
            <h3 className="text-3xl font-semibold text-green-400">{metric.title}</h3>
            <p className="text-sm text-neutral-400">{metric.text}</p>
          </div>
      ))}
    </motion.div>
  )
}

function SocialHandles() {
  return (
    <motion.div
        className="flex justify-center md:justify-start space-x-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <a href="https://github.com/vivekanand-vr" target="_blank" className="text-3xl hover:text-green-400 transition-colors"><FaGithub /></a>
        <a href="https://leetcode.com/vicky_007/" target="_blank" className="text-3xl hover:text-green-400 transition-colors"><SiLeetcode/></a>
        <a href="https://www.linkedin.com/in/vivekanand-vernekar" target="_blank"  className="text-3xl hover:text-green-400 transition-colors"><FaLinkedin /></a>
        <a href='https://drive.google.com/file/d/1fZMbp_BIcp4OjkKEFqPMJfFcvpBiK0y9/view?usp=sharing' target="_blank" 
           className='text-xl border border-white p-2 -mt-2 hover:bg-white hover:text-black transition duration-250 ease-in'>Resume</a>
        </motion.div>
  );
}

export { Metrics, SocialHandles };