import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import TechCard from "./TechCard";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex justify-center mb-10"
      >
        <h2 className={`${styles.sectionHeadText}`}>My Skills.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap  justify-center gap-12 gap-y-20 ">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <TechCard icon={technology.icon} name={technology.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
