import React from "react";
import { Link } from "react-router-dom";

import { BsFillPlusCircleFill } from "react-icons/bs";
const Navigate = () => {
  return (
    <div className=" flex flex-col ">
      <div className="flex justify-around p-3 bg-sky-500 text-black">
        <Link to={"/"}>Home</Link>
        <Link to={"/properties"}>Properties</Link>

        <Link>About</Link>

        <Link to={"/addNew"}>
          <BsFillPlusCircleFill className="text-xl " />
        </Link>
      </div>
    </div>
  );
};

export default Navigate;
