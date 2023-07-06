"use client";
import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import SmallCard from "./card/SmallCard";
import PhotoCard from "./card/PhotoCard";
import InputCard from "./card/InputCard";
import NotificationCard from "./card/NotificationCard";

import Image from "next/image";
import checkList from "../images/checkList.png";
import dashboard from "../images/dashboard.png";
import calendar from "../images/calendar.png";
import layers from "../images/layers.png";
import menu from "../images/menu.png";
import activity from "../images/activity.png";
import { BsThreeDots } from "react-icons/bs";
const RightBody = () => {
  const [view, setView] = useState(true);
  const handleView = () => {
    setView(!view);
  };
  return (
    <div className="relative flex-[3] rounded-lg border-2 overflow-auto">
      <nav className="w-full flex rounded-t-lg justify-around h-[10%] border-b-2 rightBody--navbar">
        <div className=" flex flex-row justify-around text-xs items-center gap-5">
          <section className="  flex items-center gap-1 px-1 h-full ">
            <Image src={checkList} />
            <span className=" rightBody--item">List Tasks</span>
          </section>
          <section className="  flex items-center border-b-2 mb-[-3px] border-b-blue-500 text-blue-500 gap-1 px-1 h-full ">
            <Image src={dashboard} />
            <span className=" rightBody--item">Boards</span>
          </section>
          <section className="  flex items-center gap-1 px-1 h-full  mb-[-3px] ">
            <Image src={calendar} />
            <span className=" rightBody--item">Calendar</span>
          </section>
          <section className="  flex items-center gap-1 px-1 h-full  mb-[-3px]">
            <Image src={layers} />
            <span className=" rightBody--item">Gantt</span>
          </section>
          <section className="  flex items-center gap-1 px-1 h-full  mb-[-3px]">
            <Image src={menu} />
            <span className=" rightBody--item">Timeline</span>
          </section>
          <section className="  flex items-center gap-1 px-1 h-full  mb-[-3px]">
            <Image src={activity} />
            <span className=" rightBody--item">Activity</span>
          </section>
        </div>
        <form className=" flex gap-3 items-center w-[25%] rightBody--form  m-2 rounded-full p-3 bg-white shadow-sm">
          <ImSearch color="gray" />
          <input
            type="text"
            className=" rightBody--input bg-transparent border-none outline-none w-full"
            placeholder="Search Tasks"
          />
        </form>
      </nav>
      <div className=" rightBody--collector relative px-[40px] py-[30px] w-full flex gap-8 justify-around overflow-auto">
        <section className="rightBody--container w-1/4 flex flex-col gap-3">
          <section className=" flex justify-around py-2 bg-white shadow-md rounded-md items-center">
            <span className=" border-l-4 border-l-[#8833ff] ml-[-13px] p-2">
              TO DO
            </span>
            <span className=" bg-white border-[1px] px-2 py-[1px] shadow rounded-full">
              5
            </span>
            <BsThreeDots />
            <span>+</span>
          </section>
          <PhotoCard photoSrc="https://images.unsplash.com/photo-1688362379195-b8c04f735968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" />
          <SmallCard
            heading="Space Tasks 2"
            text="Make money online through"
            photoSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          />
          <SmallCard
            heading="Space Tasks 2"
            text="Search Engine optimization..."
            photoSrc="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />

          <SmallCard
            heading="Space Tasks 2"
            text="Importance Of The Custom..."
            photoSrc="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <p className=" text-gray-400">+ New Task</p>
        </section>
        <section className="rightBody--container w-1/4 flex flex-col gap-3">
          <section className=" flex justify-around py-2 bg-white shadow-md rounded-md items-center">
            <span className=" border-l-4 border-l-[#33bfff] ml-[-11px] p-2">
              IN WORK
            </span>
            <span className=" bg-white border-[1px] px-2 py-[1px] shadow rounded-full">
              5
            </span>
            <BsThreeDots />
            <span>+</span>
          </section>
          <SmallCard
            heading="Space Tasks 2"
            text="Make money online through"
            photoSrc="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <PhotoCard photoSrc="https://images.unsplash.com/photo-1688382955791-8ccc956c5f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

          <SmallCard
            heading="Space Tasks 2"
            text="Search Engine optimization..."
            photoSrc="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <p className=" text-gray-400">+New Task</p>
        </section>
        <section className="rightBody--container w-1/4 flex flex-col gap-3">
          <section className=" flex justify-around py-2 bg-white shadow-md rounded-md items-center">
            <span className=" border-l-4 border-l-yellow-300 ml-[-11px] p-2">
              REVIEW
            </span>
            <span className=" bg-white border-[1px] px-2 py-[1px] shadow rounded-full">
              5
            </span>
            <BsThreeDots />
            <span>+</span>
          </section>

          <SmallCard
            heading="Space Tasks 2"
            text="Make money online through"
            photoSrc="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <SmallCard
            heading="Space Tasks 2"
            text="Search Engine optimization..."
            photoSrc="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <InputCard />
        </section>
        <section className="rightBody--container w-1/4 flex flex-col gap-3">
          <section className=" flex justify-around py-2 bg-white shadow-md rounded-md items-center">
            <span className=" border-l-4 border-l-green-600 ml-[-13px] p-2">
              DONE
            </span>
            <span className=" bg-white border-[1px] px-2 py-[1px] shadow rounded-full">
              5
            </span>
            <BsThreeDots />
            <span>+</span>
          </section>
          <SmallCard
            heading="Space Tasks 2"
            text="Make money online through"
            photoSrc="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
        </section>
      </div>
      {view ? <NotificationCard handleView={handleView} /> : <></>}
    </div>
  );
};

export default RightBody;
