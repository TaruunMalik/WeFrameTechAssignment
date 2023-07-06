import React from "react";
import {
  BsFillClockFill,
  BsPaperclip,
  BsFillFlagFill,
  BsXLg,
} from "react-icons/bs";
const InputCard = () => {
  return (
    <div className="bg-white text-gray-400 shadow-sm rounded-md flex flex-col p-3">
      <section className=" flex flex-row justify-between p-2 items-center mb-2">
        <span className=" text-gray-400">
          <BsXLg />
        </span>
        <input
          type="text"
          placeholder="Task name or type"
          className=" bg-transparent border-none outline-none text-sm w-3/4"
        />
        <img
          className=" w-[1rem] h-[1rem] rounded-full object-cover"
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />
      </section>
      <section className=" flex justify-around items-center">
        <span>
          <BsFillFlagFill />
        </span>
        <span>
          <BsPaperclip />
        </span>
        <span>
          <BsFillClockFill />
        </span>
        <button className=" bg-blue-600 p-2 text-xs rounded-md text-white">
          Save
        </button>
      </section>
    </div>
  );
};

export default InputCard;
