import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-slate-200 text-[17px] max-w-3xl leading-[30px]'
      >
        Hello there! 👋 I'm a passionate full stack developer with a focus on Java-based technologies. 
        My journey into the world of software development began with coursework in Java full stack development.
        <br></br>
        During my coursework and subsequent internship experiences, I had the opportunity to work on a variety of projects, honing my skills in both frontend and backend development. 
      </motion.p>

      <div className="mt-10 mb-5 text-bold text-3xl font-bold">My Leetcode & GitHub Stats.</div>
      <div className="flex flex-wrap gap-5 rounded-md max-w-fit">
        <img className="border border-gray-300 rounded-md overflow-hidden inline-block" src="https://leetcard.jacoblin.cool/vicky_007?theme=dark&font=Rubik&ext=contest" alt="leetcode profile"></img>
        <img src="https://github-readme-stats.vercel.app/api?username=vivekanand-vr&theme=algolia&show_icons=true&hide_border=false&count_private=true" alt="github stats"></img>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
