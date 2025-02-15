import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p className='mt-4 text-slate-200 text-sm md:text-lg max-w-4xl'>
        My expertise is in building dynamic, responsive interfaces with React JS and developing robust backend systems with Java. 
        Working on diverse projects has deepened my skills across the full stack, with a primary focus on front-end engineering.
      </p>

      <p className={`${styles.sectionSubText} mt-10`}>Coding Metrics</p>
      <h2 className="mb-12 mt-2 font-dmsans font-extrabold tracking-wide text-white text-2xl md:text-7xl">Programming Stats</h2>
      
      <div className="flex flex-wrap gap-4 rounded-md max-w-fit">
        <img className="bg-white rounded-md overflow-hidden inline-block" src="https://leetcard.jacoblin.cool/vicky_007?theme=light&font=IBM%20Plex%20Mono&ext=contest" alt="leetcode profile"></img>
        <span className="space-y-4">
          <img src="https://github-readme-stats.vercel.app/api?username=vivekanand-vr&theme=graywhite&show_icons=true&hide_border=true&count_private=true" alt="github stats" />
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=vivekanand-vr&theme=graywhite&hide_border=true" alt="github stats" />
        </span>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
