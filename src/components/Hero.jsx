import { styles } from "../styles";
import pimage from "../assets/V.jpg";
import Social_links from "./Social_links";

const Hero = () => {
  return (
    <section className="flex flex-wrap relative w-full h-screen items-center justify-center">
      <div className={`absolute inset-0 top-[150px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-8`}>
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center items-center w-36 h-36 sm:w-48 sm:h-48 rounded-full border-4 border-white overflow-hidden">
            <img src={pimage} alt="Profile Image" className="w-full h-auto" />
          </div>
          <br className="sm:block hidden" />
          <h1 style={{ textShadow: "blue 4px 3px 5px" }} className={`${styles.heroHeadText} text-gray-200 mt-4 sm:mt-0`}>
            Hi, I'm Vivekanand
          </h1>
          <h1 className="text-gray-200 text-xl sm:text-4xl font-semibold mt-2">I am a <span className="bg-blue-700 px-2 m-1 rounded-md ">Full Stack Developer</span></h1>
          <Social_links />
        </div>
      </div>
    </section>
  );
};

export default Hero;