import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink } from 'react-icons/fa';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  image,
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
      className='bg-[#11284b] p-4 rounded-xl sm:w-[350px] cursor-pointer hover:scale-110 duration-300 hover:bg-gray-800'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative h-52'>
        {isHovered && video ? (
          <video
            ref={videoRef}
            src={video}
            className='w-full h-full object-cover rounded'
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded'
          />
        )}
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-2xl'>{name}</h3>
        <p className='mt-2 text-slate-300 text-sm'>{description}</p>
      </div>
      <div onClick={() => window.open(source_code_link, "_blank")}
           className="items-center mt-4 hover:text-green-400">
        <span className="flex flex-row items-center p-1 px-2 tracking-wider w-fit rounded border border-white">
          GitHub <FaGithub size={18} className="ml-2" />
        </span>
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
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");