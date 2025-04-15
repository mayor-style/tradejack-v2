import React from "react";
import DashSideNav from "../components/dashboard/DashSideNav";
import DashTopNav from "../components/dashboard/DashTopNav";
import DashMain from "@/components/dashboard/DashMain";
import DashSide from "@/components/dashboard/DashSide";
import Footer from "@/components/Footer";
import InAppNav from "@/components/InAppNav";

const Dashboard = () => {
  return (
    <>
      <InAppNav />
      <div className=" lg:pt-[75px] md:pt-[75px] pt-[75px] pb-[50px] flex gap-[15px] min-h-screen bg-black lg:p-[2%] md:p-[2.5%]  ">
        <DashSideNav />
        <DashMain />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
