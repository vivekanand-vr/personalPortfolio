import React, { useState, useRef, useEffect } from "react";
import SectionWrapper from '../hoc/SectionWrapper'
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { projects } from '../constants/index';

const ProjectCard = ({
  name,
  description,
  video,
  source_code_link,
  tags = [],
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
      className="bg-white p-4 rounded-md sm:w-[380px] 
                 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg 
                 hover:shadow-blue-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden rounded-md">
        <div className="absolute inset-0 bg-black/20 z-10" /> {/* Overlay for better contrast */}
        <video
          ref={videoRef}
          src={video}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
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
        <div className="absolute top-3 right-3 z-20 flex gap-3">
          {source_code_link && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-black backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <a href={source_code_link} target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-sky-400 transition-colors">
                <FaGithub size={20} />
              </a>
            </motion.div>
          )}
        </div>
      </div>

      <div className="mt-6 ml-2">
        <h3 className="text-2xl font-bold text-black">
          {name}
        </h3>
        
        <p className="mt-3 text-gray-800 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-4 mb-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-sky-900/60 text-white 
                         border border-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <div className="relative z-0 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-8">
          <p className={styles.sectionSubText}>MY WORK</p>
          <h2 className={styles.sectionHeadText}>
            Projects.
          </h2>
          
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-32 pb-16">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
