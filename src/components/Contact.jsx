import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div className="py-16 lg:section relative" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4
                className="text-xl text-accent uppercase font-medium mb-2
              tracking-wide"
              >
                Get in touch
              </h4> 
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together
              </h2>
            </div>
          </motion.div>
          {/* from */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col pb-24 p-6 gap-y-6 items-start"
          >
            <input
              className="bg-transparent w-full border-b py-3 outline-none placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent w-full border-b py-3 outline-none placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent w-full border-b py-12 mb-12 outline-none placeholder:text-white focus:border-accent transition-all resize-none"
              placeholder="Your massage"
            ></textarea>
            <button className="btn btn-lg">Send massage</button>
          </motion.form>
        </div>
      </div>
      <motion.footer
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full px-4 text-white text-start py-2 absolute bottom-0"
      >
        <p>© 2024 Mohamed Khattab. All Rights Reserved.</p>
      </motion.footer>
    </div>
  );
};

export default Contact;
