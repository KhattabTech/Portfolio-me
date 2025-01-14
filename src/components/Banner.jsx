import React from "react";
// image

// icons
import { FaGithub, FaInstagram , FaLinkedin  } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import CoderProfile from "./CoderProfile";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center py-10"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text  */}
          <div className="flex-1 text-center font-secondary lg:text-left uppercase">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[40px] sm:text-[55px] font-bold leading-[1.1] lg:text-[80px] xl:text-[110px]"
            >
              Mohamed <span className="text-accent">Khattab</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[24px] sm:text-[36px] lg:text-[48px] xl:text-[40px] font-secondary font-semibold uppercase leading-[1.1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                ]}
                speed={50}
                className="text-gradient"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-lg sm:text-base lg:text-lg"
            >
            I am a Web Developer
            I create modern, responsive websites that meet clients' needs and deliver a seamless user experience.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 gap-x-6 items-center mb-12 max-w-max mx-auto lg:mx-0"
            >
              <Link to="contact" className="btn btn-lg items-center flex cursor-pointer">Contact me</Link>
              <button className="text-gradient btn-link">
              <a href="https://drive.google.com/file/d/147lq7fO-0udjehmSB8jn74P2h7NBCbmY/view?usp=drive_link">
              Portfolio Cv
              </a>
              </button>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
            >
              <a href="https://github.com/KhattabTech">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/pus4e/?igsh=eWpkbmUyN3djaWpt#">
                <FaInstagram  />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-samir-7923aa322/">
                <FaLinkedin  />
              </a>
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:flex flex-1 max-w-[100%] lg:max-w-[100%] mx-auto lg:mx-0"
          >
            <CoderProfile />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
