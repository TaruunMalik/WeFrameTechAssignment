import React from "react";
import {
  BsGlobeAmericas,
  BsGraphUp,
  BsFillBuildingFill,
  BsFillStarFill,
  BsMessenger,
  BsFillCompassFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import colorDot from "../images/color-dot-5.png";
import Image from "next/image";
const imageStyle = {
  position: "absolute",
  top: "0",
  right: "0",
  width: "10px",
};
const LeftSidebar = () => {
  return (
    <div className="h-full leftSidebar p-5 bg-slate-50 flex flex-col justify-around border-r-2 border-r-slate-200 ">
      <section className=" flex flex-col gap-3">
        <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-center">
          <BsFillCompassFill color="blue" />
        </span>
        <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-center">
          <BsFillStarFill />
        </span>
        <span className="bg-white relative rounded-full w-8 h-8 flex items-center justify-center text-center">
          <Image src={colorDot} style={imageStyle} />

          <BsMessenger />
        </span>
        <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-center">
          <BsGraphUp />
        </span>
        <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-center">
          <BsGlobeAmericas />
        </span>
        <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-center">
          <BsFillBuildingFill />
        </span>
      </section>
      <section className=" flex flex-col gap-3 items-center">
        <img
          className=" rounded-full w-8 h-8 flex items-center justify-center text-center object-cover"
          src="
          https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60
          "
        />
        <img
          className=" rounded-full w-8 h-8 flex items-center justify-center text-center object-cover"
          src="
          https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60
          "
        />
        <img
          className=" rounded-full w-8 h-8 flex items-center justify-center text-center object-cover"
          src="
          https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60
          "
        />
        <img
          className=" rounded-full w-8 h-8 flex items-center justify-center text-center object-cover"
          src="
          https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60
          "
        />
        <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-center">
          <BsFillPlusCircleFill />
        </span>
      </section>
    </div>
  );
};

export default LeftSidebar;
