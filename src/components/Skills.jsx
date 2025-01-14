import React from "react";
import "./skills.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
// استيراد الصور
import jsIcon from "../assets/js.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import reactIcon from "../assets/react.png";
import bootstrapIcon from "../assets/bootstrap.png";
import tailwindIcon from "../assets/tailwind.png";
import tsIcon from "../assets/typescript.png";

const Skills = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="slider"
        style={{
          "--width": "145px",
          "--height": "100px",
          "--quantity": "7",
        }}
      >
        <h2 className="h2 h2 text-accent flex mx-auto justify-center mb-9 ">
          Skills me
        </h2>
        <div className="list">
          <div className="item " style={{ "--position": 1 }}>
            <img src={jsIcon} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={htmlIcon} alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={cssIcon} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={reactIcon} alt="React" />
            <p>React</p>
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src={bootstrapIcon} alt="Bootstrap" />
            <p>Bootstrap</p>
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src={tailwindIcon} alt="Tailwind" />
            <p>Tailwind</p>
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src={tsIcon} alt="TypeScript" />
            <p>TypeScript</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
