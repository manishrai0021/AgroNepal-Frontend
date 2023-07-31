import React from "react";
import { Link } from "react-router-dom";

import Leaf from "../../Assets/Svgs/leaf.svg";

const Nav = () => {
  return (
    <div className="shadow-lg">
      <div className="flex justify-between p-4">
        <Link
          to="/"
          className=" flex gap-1 text-2xl font-bold text-[2rem] text-white"
        >
          AgroEco <img src={Leaf} alt="" className="w-[50px]" />{" "}
        </Link>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="border-[2px] border-[#0cb01d] rounded-md px-2 text-white hover:bg-[#0cb01d] hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="border-[2px] rounded-md border-[#0cb01d]  px-2 hover:bg-[#0cb01d] text-white"
          >
            Signup
          </Link>
        </div>
      </div>
      <div className="h-[2px] w-full bg-gradient-to-r from-[#0cb01d] via-[#0b8417] to-[#45b6fe] " ></div>
    </div>
  );
};

export default Nav;
