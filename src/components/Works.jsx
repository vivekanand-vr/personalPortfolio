import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  points,
  video,
  source_code_link,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <div 
      className='bg-[#11284b] p-3 md:p-4 rounded-xl sm:w-[350px] cursor-pointer hover:scale-110 duration-300 hover:bg-gray-800'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative h-52'>
        {/* Video will pause on hover end and reset */}
        <video
          ref={videoRef}
          src={video}
          className='w-full h-full object-cover rounded'
          muted
          playsInline
          loop
          preload="metadata"
          onLoadedData={() => {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }}
        />
        <div className='absolute inset-0 flex justify-end m-2'>
          <div onClick={() => window.open(source_code_link, "_blank")}
               className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'>
              <FaGithub size={20} /> 
            </div>
          </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-lg md:text-xl'>{name}</h3>
        <ul className="ml-2 mt-2 space-y-2">
          {points.map((point, index) =>(
              <li key={index}
                  className="text-gray-300 text-xs md:text-sm">
                ▶️  {point}
              </li>
          ))}
        </ul>
        <p className='mt-2 text-slate-300 text-xs md:text-sm'></p>
        
      </div>
    </div>
  );
};


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-slate-200 text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos.
        </motion.p>
      </div>

      <div className='mt-10 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
