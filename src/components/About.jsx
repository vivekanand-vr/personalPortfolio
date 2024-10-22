import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { FaReact, FaJava } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p className='mt-4 text-slate-200 text-sm md:text-lg max-w-3xl leading-6 tracking-wide'>
        My expertise lies in <span className="text-sky-300 font-semibold">React JS <FaReact className="inline-block -mt-1" /> </span> for building dynamic front-end interfaces and &nbsp;
        <span className="text-green-400 font-semibold">Java <FaJava className="inline-flex -mt-1" /> </span>for robust back-end systems. 
        I've had the opportunity to work on diverse projects that have sharpened my skills in development.
        I'm always eager to learn and apply new technologies to solve complex problems efficiently.
      </p>

      <p className={`${styles.sectionSubText} mt-10`}>Coding Metrics</p>
      <h2 className="mb-10 mt-2 font-mukta font-extrabold text-white text-2xl md:text-5xl">Programming Stats</h2>
      
      <div className="flex flex-wrap gap-4 rounded-md max-w-fit">
        <img className="border border-gray-300 rounded-md overflow-hidden inline-block" src="https://leetcard.jacoblin.cool/vicky_007?theme=dark&font=Nunito&ext=contest" alt="leetcode profile"></img>
        <span className="space-y-4">
          <img src="https://github-readme-stats.vercel.app/api?username=vivekanand-vr&theme=react&show_icons=true&hide_border=true&count_private=true" alt="github stats" />
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=vivekanand-vr&theme=react&hide_border=true" alt="github stats" />
        </span>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
