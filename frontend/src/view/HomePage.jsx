import React from "react";
import Navbar from "./NavBar";
import videos from "../assets/mining1.mp4";
import pic from "../assets/react.svg";
const Homepage = () => {
  return (
    <>
      <div className="w-screen h-screen  transition-all relative">
        <video
          src={videos}
          className="-z-10 absolute top-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          style={{}}
        />
        <div className="w-full h-full bg-[rgba(0,0,0,0.2)]"></div>
        <div className="absolute top-0 w-full flex flex-col gap-4">
          <Navbar />
          <h3 class="text-white text-center font-bold mt-56 ">Welcome to Mining</h3>
        </div>
      </div>
    </>
  );
};

export default Homepage;
