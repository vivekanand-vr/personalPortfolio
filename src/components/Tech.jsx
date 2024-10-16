import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';

const Tech = () => {
  return (
    <>
      <p className={`${styles.sectionSubText} text-center`}>Technologies I use</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Dev Arsenal.</h2>
      <div className='mt-5 flex flex-row flex-wrap justify-center gap-4 md:gap-8'>
      
        {technologies.map((technology) => (
          <motion.div 
              whileHover={{ scale: 1.2 }}
              className='w-12 h-12 md:w-24 md:h-24' key={technology.name}>
              <img src = {technology.icon} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
