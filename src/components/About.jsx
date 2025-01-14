import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // استيراد useInView فقط من react-intersection-observer
import { motion } from "framer-motion"; // استيراد motion من framer-motion
import { fadeIn } from "../variants";
import animationData from "../assets/Animation.json";
import Lottie from "lottie-react";


const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div className="section" id="about" ref={ref}>
      <div className="container mx-auto py-32">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0"
        >
          {/* animationData  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 hide-on-small bg-contain bg-no-repeat mix-blend-lighten bg-top"
          >
            <Lottie
              className="hide-on-small"
              animationData={animationData}
              loop={true}
            />{" "}
          </motion.div>
          {/* text  */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
            I’m a Freelance Front-end Developer aspiring to deliver innovative and practical web solutions.
            </h3>
            <p className="mb-6">
            I focus on writing clean code and creating user-friendly designs.
            </p>
            {/* state */}
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
