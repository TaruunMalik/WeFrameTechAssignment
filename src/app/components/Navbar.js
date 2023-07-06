import React from "react";

import { ImSearch } from "react-icons/im";
import { PiListBold } from "react-icons/pi";
import { BsFillPersonFill, BsBellFill, BsXCircleFill } from "react-icons/bs";
import colorDot from "../images/color-dot-5.png";

import { BsThreeDots } from "react-icons/bs";
const imageStyle = {
  position: "absolute",
  top: "-5px",
  right: "-5px",
  width: "20px",
};
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="navbar  w-full p-4 bg-slate-50 flex justify-around flex-shrink-0 items-center border-b-2 border-b-slate-200 ">
      <section className=" flex gap-5 items-center">
        <button className=" bg-white shadow-sm p-2 rounded-full text-gray-400">
          <PiListBold />
        </button>
        <span className=" font-semibold">Constructor</span>
      </section>
      <ul className=" flex gap-5 text-xs items-center">
        <li className=" text-gray-400 font-semibold navbar--item ">
          Dashboard
        </li>
        <li className=" text-gray-400 font-semibold navbar--item">About Us</li>
        <li className=" text-gray-400 font-semibold navbar--item">News</li>
        <li className=" text-gray-400 font-semibold navbar--item">
          User Policy
        </li>
        <li className=" text-gray-400 font-semibold navbar--item">Contacts</li>
        <button className=" flex text-[10px] font-bold text-gray-400 navbar--item">
          <BsThreeDots />
        </button>
      </ul>
      <form className=" flex gap-3 items-center w-[25%] rounded-full p-3 bg-white shadow-sm navbar--form">
        <ImSearch color="gray" />
        <input
          type="text"
          className=" bg-transparent border-none outline-none w-full"
          placeholder="Search Products, Orders and Clients"
        />
      </form>

      <section className=" flex gap-7 items-center ">
        <span className=" bg-white p-2 rounded-full text-gray-400 ">
          <BsFillPersonFill />
        </span>
        <span className=" text-sm font-semibold text-gray-600 navbar--item">
          Clayton Santos
        </span>
        <button className=" bg-white p-2 relative rounded-full text-gray-400  navbar--item">
          <Image src={colorDot} style={imageStyle} />
          <BsBellFill />
        </button>
        <button className=" bg-white p-2 rounded-full text-gray-400 navbar--item ">
          <BsXCircleFill />
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
