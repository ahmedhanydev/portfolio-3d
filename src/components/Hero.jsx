import { motion } from "framer-motion";
import { styles } from "../styles";
import myImg from "../assets/myimg2.png";
import fairGif from "../assets/right-hand.gif";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full   h-screen mx-auto  ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[90px] lg:top-[130px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div
          className=" flex-col justify-center items-center hidden dark:flex mt-5
        "
        >
          <div className="w-5 h-5 rounded-full bg-gray-500 dark:bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40   violet-gradient" />
        </div>
        <div>
          <div>
            <h1
              className={`${styles.heroHeadText} text-gray-500 dark:text-white`}
            >
              Hi, I'm{" "}
              <span className="dark:text-[#915eff]  text-[#112A46]">Ahmed</span>
            </h1>
            <p
              className={`${styles.heroSubText}  text-gray-700 dark:text-white-100`}
            >
              I MERN Stack Developer
            </p>
          </div>
          <div className="flex justify-evenly mt-10 gap-3 lg:gap-0">
            <div className="">
              <a
                href="#contact"
                className="border-gray-500 hover:bg-gray-500 text-gray-700 hover:text-white dark:border-violet-500 dark:hover:bg-violet-500 border-2 font-bold rounded-xl dark:text-white px-5 py-3 lg:px-10 "
              >
                Hire Me
              </a>
            </div>
            <div>
              <button className=" border-gray-500 hover:bg-gray-500 text-gray-700 hover:text-white dark:border-violet-500 dark:hover:bg-violet-500 border-2 font-bold rounded-xl dark:text-white lg:px-7 px-3 py-3">
                MY Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-2/3 absolute right-0 bg-red-50 h-screen"> */}
      {/* <ComputersCanvas /> */}
      {/* </div> */}

      <div className="absolute top-[200px]  right-[30px]  lg:top-1 lg:right-[50px]">
        <img
          src={myImg}
          alt="my photo"
          className="object-contain  w-[360px]  lg:w-[460px] relative"
        />
        <img
          src={fairGif}
          alt="right hand "
          className="absolute object-contain w-92 top-[100px] right-[-58px]  lg:top-[155px] lg:right-[-91px] "
        />
      </div>
      <div className="absolute bottom-[-10px]  lg:bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
