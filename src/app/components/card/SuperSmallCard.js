import React from "react";
import Image from "next/image";
const SuperSmallCard = ({ imgSrc, text }) => {
  return (
    <section className="  flex items-center gap-1 px-1 h-full ">
      <Image src={imgSrc} />
      <span>{text}</span>
    </section>
  );
};

export default SuperSmallCard;
