import React from "react";
import {
  BsFillPersonFill,
  BsFillClipboard2Fill,
  BsFillChatSquareFill,
  BsDot,
  BsFillCompassFill,
  BsWhatsapp,
  BsEnvelopeFill,
  BsThreeDots,
} from "react-icons/bs";
import whatsappImg from "../images/ic_whatsapp.png";
import telegramImg from "../images/ic_telegram.png";
import bookMode from "../images/chrome_reader_mode.png";
import mailIcon from "../images/mail.png";
import callIcon from "../images/local_phone.png";
import checkList from "../images/checkList.png";
import dashboard from "../images/dashboard.png";
import cloudIcon from "../images/cloud.png";
import mailIcon2 from "../images/email.png";
import peopleIcon from "../images/group.png";
import calendar from "../images/calendar.png";
import buildIcon from "../images/build.png";
import mainImg from "../images/mainImgg.png";
import Image from "next/image";

const LeftBody = () => {
  return (
    <div className=" leftBody mx-5 flex-[1] flex flex-col items-center">
      <section className=" flex justify-between w-[70%] p-3 ">
        <span className=" bg-white p-2 rounded-full text-gray-400 ">
          <BsFillPersonFill />
        </span>
        <span className=" bg-white p-2 rounded-full text-gray-400 flex ">
          <BsThreeDots />
        </span>
      </section>
      <section className=" flex justify-center items-center gap-3 relative flex-col w-full">
        <span className=" rounded-full w-6 text-sm  h-6 flex items-center justify-center text-white bg-blue-600 absolute right-[38%] bottom-[40%] ">
          2
        </span>
        <Image
          className=" w-[6rem] h-[6rem] p-1 border-2 border-b-blue-600 border-l-blue-600 border-t-blue-600 object-cover rounded-[50%]"
          src={mainImg}
        />
        <div className=" flex flex-col gap-3 items-center ">
          <span className=" text-md">Hello, Alfred Bryant</span>
          <span className=" text-xs text-slate-400">
            adrian.hajdin@yahoo.com
          </span>
        </div>
      </section>
      <section className=" w-[70%] rounded-lg border-2 mt-4 grid gap-[2px]  grid-cols-2 leftBody--container">
        <div className="hover:scale-125  hover:bg-white rounded-lg transition-all flex gap-3 flex-col items-center justify-center p-3">
          <span className=" text-gray-400">
            <Image src={dashboard} />
          </span>
          <span className=" text-[10px]">Dashboard</span>
        </div>
        <div className="hover:scale-125 hover:bg-white rounded-lg gap-3 transition-all flex flex-col items-center justify-center p-3">
          <span className=" text-gray-400 ">
            <Image src={checkList} />
          </span>
          <span className=" text-[10px]">Notes</span>
        </div>
        <div className="hover:scale-125 hover:bg-white rounded-lg gap-3 transition-all flex flex-col items-center justify-center p-3">
          <span className=" text-gray-400 ">
            <Image src={checkList} />
          </span>
          <span className=" text-[10px]">Tasks</span>
        </div>
        <div className="hover:scale-125 hover:bg-white rounded-lg gap-3 transition-all flex flex-col items-center justify-center p-3">
          <span className=" text-gray-400 ">
            <Image src={cloudIcon} />
          </span>
          <span className=" text-[10px]">Files</span>
        </div>
        <div className="hover:scale-125 hover:bg-white rounded-lg gap-3 transition-all flex flex-col items-center justify-center p-3">
          <span className=" text-gray-400 ">
            <Image src={mailIcon2} />
          </span>
          <span className=" text-[10px]">Emails</span>
        </div>
        <div className="hover:scale-125 hover:bg-white rounded-lg gap-3 transition-all flex flex-col items-center justify-center p-3">
          <span className=" text-gray-400 ">
            <Image src={peopleIcon} />
          </span>
          <span className=" text-[10px]">Clients</span>
        </div>
        <div className="hover:scale-125 hover:bg-white rounded-lg gap-3 transition-all flex flex-col items-center justify-center p-3">
          <span className=" text-gray-400 ">
            <Image src={calendar} />
          </span>
          <span className=" text-[10px]">Calendars</span>
        </div>
        <div className="hover:scale-125 hover:bg-white rounded-lg gap-3 transition-all flex flex-col items-center justify-center p-3">
          <span className=" text-gray-400 ">
            <Image src={buildIcon} />
          </span>
          <span className=" text-[10px]">Settings</span>
        </div>
      </section>
      <section className=" w-[70%] border-2 p-3 rounded-full flex justify-evenly mt-16 leftBody--items--container">
        <Image src={callIcon} />
        <Image src={mailIcon} />
        <Image src={bookMode} />
        <Image src={telegramImg} />
        <Image src={whatsappImg} />
      </section>
    </div>
  );
};

export default LeftBody;
