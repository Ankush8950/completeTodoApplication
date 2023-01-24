import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-[20rem] h-screen bg-[#4338CA] text-white fixed">
      <ul className="flex items-center  flex-col p-10">
        <Link
          activeClass="active"
          to="AddTitle"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <button className="font-semibold text-lg bg-black mt-2 p-1 w-44 flex items-center justify-center">
            Home
          </button>
        </Link>
        <Link
          activeClass="active"
          to="AddTasks"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
            <button className="font-semibold text-lg bg-black mt-2 p-1 w-44 flex items-center justify-center">
              User List
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
