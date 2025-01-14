import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const services = [
  {
    name: "UI/UX Design",
    description:
      "Creating user-friendly and responsive designs for all devices.",
    
  },
  {
    name: "Development",
    description:
      "Writing code that adheres to global standards using HTML, CSS, and JavaScript.",

  },
  {
    name: "Performance Optimization",
    description:
      "Enhancing website speed and user experience",
 
  },
  {
    name: "SEO Optimization",
    description:
      "Improving websites to rank higher on search engine results.",
  },
];
const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              As a Front-end Developer, I specialize in transforming ideas into
              outstanding websites. Here’s what I can offer:
            </h3>
            <button className="btn btn-sm">
              <Link to="work">see my work</Link>
            </button>
          </motion.div>
          {/* services */}
          <div className="flex-1">
            <div>
              {services.map((services, i) => {
                const { name, description, link } = services;
                return (
                  <motion.div
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={i}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
