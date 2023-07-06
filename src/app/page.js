import React from "react";
import Layout from "./components/Layout";
import LeftSidebar from "./components/LeftSidebar";
import Body from "./components/Body";

const page = () => {
  return (
    <Layout>
      <div className=" flex h-screen">
        <LeftSidebar />
        <Body />
      </div>
    </Layout>
  );
};

export default page;
