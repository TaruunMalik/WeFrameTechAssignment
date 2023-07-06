import React from "react";

const SmallCard = ({ heading, text, photoSrc }) => {
  return (
    <div className=" flex flex-col w-full p-2 gap-2 h-max bg-white rounded-md shadow-sm">
      <div className=" flex justify-between items-center">
        <span className=" text-[10px] text-gray-400">{heading}</span>
        <div className=" flex flex-row">
          <img
            className=" w-[1rem] h-[1rem] rounded-full object-cover"
            src={photoSrc}
          />
          <img
            className=" w-[1rem] h-[1rem] rounded-full object-cover"
            src={photoSrc}
          />
        </div>
      </div>
      <p className=" text-[12px] font-semibold">{text}</p>
    </div>
  );
};

export default SmallCard;
