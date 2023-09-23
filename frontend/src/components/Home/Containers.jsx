import React from "react";
import FlexBetween from "../../layout/Flexbetween";
import { BsRobot,BsMicrosoftTeams } from "react-icons/bs";
import {SlDocs}  from "react-icons/sl"
import { colors } from "@mui/material";
const Containers = () => {
  return (
    <>
      <FlexBetween borderRadius={"10px"} style={{backgroundColor:"#FFFFFF"}} padding={"0.75rem 2rem"} marginX={"10rem"} marginY={"2rem"}>
        <div className="transition-all ">
          <BsRobot  size={40} className=" transformation" style={{color:"blueviolet"}}/>
        </div>
        <div className="transition-all ">
          <BsMicrosoftTeams size={40} className=" transformation" style={{color:"blueviolet"}}/>
        </div>
        <div className="transition-all ">
          <SlDocs  size={40} className=" transformation" style={{color:"blueviolet"}}/>
        </div>
      </FlexBetween>
    </>
  );
};

export default Containers;
