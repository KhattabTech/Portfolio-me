import React from "react";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className="py-8" >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a className="text-[20px] sm:text-[22px] font-bold leading-[1.1] lg:text-[22px] xl:text-[24px] uppercase" href="#">
            <h1>Mohamed <br /> <span className="text-accent">Khattab</span></h1>
          </a>
          <Link to="work" className="btn btn-sm flex items-center cursor-pointer">Working me</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
