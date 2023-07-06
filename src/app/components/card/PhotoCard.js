import React from "react";
import { BsFillAlarmFill, BsPaperclip } from "react-icons/bs";
import listIcon from "./list.png";
import Image from "next/image";
const PhotoCard = ({ photoSrc }) => {
  return (
    <div className=" flex flex-col">
      <img className=" rounded-tl-lg rounded-tr-lg" src={photoSrc} />
      <div className=" flex flex-col w-full p-3 gap-2 h-max bg-white rounded-b-lg ">
        <div className=" flex justify-between items-center">
          <span className=" text-[10px] text-gray-400">Make Money Online</span>

          <img
            className=" w-[1rem] h-[1rem] rounded-full object-cover"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
        </div>
        <div className=" w-full flex flex-row justify-between items-center text-[12px] font-semibold">
          <span className=" flex items-center gap-1">
            <Image src={listIcon} /> 4
          </span>
          <span className="flex items-center gap-1">
            <BsPaperclip /> 2
          </span>
          <span className=" flex items-center gap-1">
            <BsFillAlarmFill color=" gray" /> 6 days left
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
