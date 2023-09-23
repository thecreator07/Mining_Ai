import React from "react";
import Navbar from "./NavBar";
import videos from "../assets/mining1.mp4";
import Welcome from "../components/Home/welcome";
import Containers from "../components/Home/Containers";
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
        <div className="w-full h-full bg-[rgba(0,0,0,0.7)]"></div>
        <div className="absolute top-0 w-full flex flex-col justify-center gap-4">
          <Navbar />
          <Welcome/>
          <Containers/>
        </div>
      </div>
    </>
  );
};

export default Homepage;
