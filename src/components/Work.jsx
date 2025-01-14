import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
// Image
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import Img4 from "../assets/portfolio-img4.png";
import { Link } from "react-scroll";

const Work = () => {
  return (
    <div className="section py-10" id="work">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="h2 text-accent leading-tight text-start lg:text-left">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-md lg:mx-0 text-left text-xl font-semibold leading-relaxed lg:text-left mb-8 lg:mb-12 h3 max-w-[455px] mb-16">
                Here are some of the projects I've completed, and I'm
                continually working on new ones.
              </p>
              <div className="text-start lg:text-start">
                <button className="btn btn-sm justify-start items-center">
                  <a href="https://github.com/KhattabTech?tab=repositories">
                    {" "}
                    View all projects
                  </a>
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {/* Portfolio Item 1 */}
            <PortfolioItem
              img={Img1}
              title="Task and habit management"
              link={"https://planify-v1.netlify.app/"}
            />

            {/* Portfolio Item 2 */}
            <PortfolioItem
              img={Img2}
              title="Library of summaries books"
              link={"https://booksnap-1.netlify.app/"}
            />

            {/* Portfolio Item 3 */}
            <PortfolioItem
              img={Img3}
              title="E-commerce"
              link={"https://e-commerce-eta-seven-82.vercel.app"}
            />

            {/* Portfolio Item 4 */}
            <PortfolioItem
              img={Img4}
              title="To Do List Advance"
              link={"https://to-do-list-eight-kappa-25.vercel.app/"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const PortfolioItem = ({ img, title, link = "#" }) => (
  <a
    className="group relative overflow-hidden border-2 border-white/50 rounded-xl block"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {/* overlay */}
    <div
      className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all 
      duration-500 ease-in-out"
    ></div>
    {/* img */}
    <img
      className="group-hover:scale-110 transition-transform duration-500 ease-in-out w-full h-64"
      src={img}
      alt={title}
    />
    {/* category */}
    <div
      className="absolute -bottom-full left-8 group-hover:bottom-24 transition-all 
      duration-500 ease-in-out z-50"
    ></div>
    {/* title */}
    <div
      className="absolute -bottom-full left-8 group-hover:bottom-12 transition-all 
      duration-700 ease-in-out z-50"
    >
      <span className="text-gradient">{title}</span>
    </div>
  </a>
);

export default Work;
