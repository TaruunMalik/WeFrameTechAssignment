import React from "react";
import RightBody from "./RightBody";
import LeftBody from "./LeftBody";
const Body = () => {
  return (
    <div className=" bg-slate-50 w-full flex flex-row py-4 px-5">
      <LeftBody />
      <RightBody />
    </div>
  );
};

export default Body;
