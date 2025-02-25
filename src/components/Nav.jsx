import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-[2rem] lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[75px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-2xl text-white/50">
          <Link
            to="home"
            activeClass='active'
            spy={true}
            offset={-200}
            smooth={true}
            duration={500}
            className="flex w-[60px] h-[60px] items-center justify-center cursor-pointer hover:text-white transition duration-200"
            aria-label="Home"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass='active'
            spy={true}
            smooth={true}
            duration={500}
            className="flex w-[60px] h-[60px] items-center justify-center cursor-pointer hover:text-white transition duration-200"
            aria-label="About"
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            activeClass='active'
            spy={true}
            smooth={true}
            duration={500}
            className="flex w-[60px] h-[60px] items-center justify-center cursor-pointer hover:text-white transition duration-200"
            aria-label="Services"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            activeClass='active'
            spy={true}
            smooth={true}
            duration={500}
            className="flex w-[60px] h-[60px] items-center justify-center cursor-pointer hover:text-white transition duration-200"
            aria-label="Work"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass='active'
            spy={true}
            smooth={true}
            duration={500}
            className="flex w-[60px] h-[60px] items-center justify-center cursor-pointer hover:text-white transition duration-200"
            aria-label="Contact"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
