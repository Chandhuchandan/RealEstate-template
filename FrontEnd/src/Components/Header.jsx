import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { BsFillPlusCircleFill } from "react-icons/bs";
const Header = () => {
  return (
    <div className=" flex flex-col ">
      <div className="   flex justify-center">
        <h1 className="m-5 text-4xl font-mono font-bold text-sky-400">
          Real Estate Template
        </h1>
      </div>

      <div className="flex justify-between p-4  bg-sky-500 text-black">
        <div>
          <Link to={"/"} className="p-5 hover:bg-black hover:text-white">
            Home
          </Link>
          <Link
            to={"/properties"}
            className="p-5 hover:bg-black hover:text-white"
          >
            Properties
          </Link>

          <Link className="p-5 hover:bg-black hover:text-white ">About</Link>
        </div>

        <Link to={"/addNew"} className="px-5 ml-10">
          <BsFillPlusCircleFill className="text-2xl hover:text-white " />
        </Link>
      </div>
    </div>
  );
};

export default Header;
