import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    <h2 className={`${styles.sectionHeadText} text-center`}> My Tech Stack. </h2>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <img src = {technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
