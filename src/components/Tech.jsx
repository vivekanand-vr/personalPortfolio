import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    <h2 className={`${styles.sectionHeadText} text-center`}> My Tech Stack. </h2>
      {technologies.map((technology) => (
        <motion.div 
            whileHover={{ scale: 1.2 }}
            className='w-28 h-28' key={technology.name}>
            <img src = {technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
