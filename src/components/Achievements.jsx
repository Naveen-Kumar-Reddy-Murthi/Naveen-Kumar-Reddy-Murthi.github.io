import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { link } from "../assets";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const Achievement = ({
  index,
  desc,
  url,
  icon,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[200px] w-[250px]'
      >
        <div className='relative w-[150px] h-[150px]'>
          <img
            src={icon}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(url, "_blank")}
              className='black-gradient w-4 h-4 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={link}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <p className='mt-2 text-secondary text-[14px]'>{desc}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Certifications and etc.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {achievements.map((achievement, index) => (
          <Achievement key={index} index={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
