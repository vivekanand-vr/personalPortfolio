import React, { useState, useRef, useEffect } from "react";
import { FaGithub } from 'react-icons/fa';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

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
      className='bg-[#11284b] p-3 md:p-4 rounded-lg sm:w-[350px] cursor-pointer md:hover:scale-110 duration-300 hover:bg-gray-800'
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
               className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:text-green-400'>
              <FaGithub size={20} /> 
            </div>
          </div>
      </div>

      <div className='mt-5 mb-4'>
        <h3 className='ml-2 text-white font-bold text-lg md:text-xl'>{name}</h3>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          {points.map((point, index) =>(
              <li key={index} className="text-gray-200 text-sm leading-5">
                 {point}
              </li>
          ))}
        </ul>   
      </div>
    </div>
  );
};


const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <p className='mt-3 text-slate-200 text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos.
        </p>
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
