import React from "react";
import SuperSmallCard from "./SuperSmallCard";
import activity from "../../images/activity.png";
import directionRight from "../../images/subdirectory_arrow_right.png";
import flagIcon from "../../images/flag.png";
import cloudIcon from "../../images/cloud.png";
import commentIcon from "../../images/insert_comment.png";
import personImg from "../../images/Image.png";
import blueDot from "../../images/color-dot-4.png";
import linkIcon from "../../images/link.png";
import closeIcon from "../../images/close.png";
import rightArror from "../../images/chevron_right.png";
import rightArrow from "../../images/rightArrow.png";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
const NotificationCard = ({ handleView }) => {
  return (
    <div className="absolute right-5 bottom-5 shadow-sm rounded-md flex flex-col gap-4 bg-white p-3 notificationCard">
      <section className=" flex justify-around items-center">
        <Image src={blueDot} />
        <span className=" flex items-center gap-2 text-[12px] font-semibold">
          Development Apps
          <Image src={linkIcon} />
        </span>
        <Image
          src={closeIcon}
          onClick={handleView}
          className=" cursor-pointer"
        />
      </section>
      <section className=" grid grid-cols-2 place-items-center gap-2 text-[11px] font-bold">
        <SuperSmallCard imgSrc={directionRight} text="4 Subtasks" />
        <SuperSmallCard imgSrc={flagIcon} text="Priority Enabled" />
        <SuperSmallCard imgSrc={cloudIcon} text="3 Files" />
        <SuperSmallCard imgSrc={commentIcon} text="7 Comments" />
        <section className="  flex items-center gap-1 px-1 h-full ">
          <Image
            src={personImg}
            className="rounded-full w-8 h-8 flex items-center justify-center text-center object-cover"
          />
          <span>Tyler Norman</span>
        </section>
      </section>
      <section className=" w-full flex gap-3 mt-3 border-t-2 p-3 text-[10px]">
        <div className=" flex flex-col">
          <span className=" text-gray-400">START DATE</span>
          <span>Sep 3, 9:00 pm</span>
        </div>
        <Image src={rightArror} />
        <div className=" flex flex-col">
          <span className=" text-gray-400">DUE DATE</span>
          <span>Sep 4, 9:00 pm</span>
        </div>
        <div className=" flex flex-row items-center gap-2">
          <button className=" bg-green-400 rounded-full p-2 text-white">
            <FaPlay />
          </button>
          <span>00:00</span>
        </div>
      </section>
    </div>
  );
};

export default NotificationCard;
