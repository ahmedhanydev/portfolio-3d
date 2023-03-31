import { motion } from "framer-motion";
import { styles } from "../styles";
import myImg from "../assets/myimg2.png";
import fairGif from "../assets/right-hand.gif";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[95px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div
          className="flex flex-col justify-center items-center mt-5
        "
        >
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40  violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Ahmed</span>
          </h1>
          <p className={`${styles.heroSubText}  text-white-100`}>
            I MERN Stack Developer
          </p>
        </div>
      </div>

      {/* <div className="w-2/3 absolute right-0 bg-red-50 h-screen"> */}
      <ComputersCanvas />
      {/* </div> */}

      <div className="absolute sm:top-0 sm:right-0  lg:top-2 lg:right-4">
        <img
          src={myImg}
          alt="my photo"
          className="object-contain w-[460px] relative"
        />
        <img
          src={fairGif}
          alt="right hand "
          className="absolute object-contain w-92   top-[155px] right-[-91px]"
        />
      </div>
    </section>
  );
};

export default Hero;
