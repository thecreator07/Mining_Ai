import { Button, ButtonBase } from "@mui/material";
import FlexBetween from "../../layout/Flexbetween";
import React from "react";

const Welcome = () => {
  return (
    <>
      <FlexBetween flexDirection={"column"} gap={"1rem"}>
        <h1 className="text-base px-8 py-2 font-semibold rounded-full bg-yellow-400">
          Welcome to the ultimate Guidance for all your concerns
        </h1>
        <h2 className="text-3xl text-yellow-400 font-semibold">
          Indian Mining Acts and Regulations
        </h2>
        <p className="w-3/4 text-center text-[#CCCCCC]">
          Step into the Premier Hub for all your mining queries and inquiries.
          Delving into the complexities of mining endeavours while ensuring
          compliance with regulatory frameworks can seem overwhelming, yet we've
          streamlined the process, offering you invaluable insights, expert
          counsel, and tailored solutions.
        </p>
        <ButtonBase
          style={{
            borderRadius: "9999px",
            color: "#CCCCCC",
            wordSpacing: "",
            padding: "0.25rem 1rem",
            backgroundColor: "black",
            fontWeight:"500"
          }}
        >
          Start&nbsp;<span className="text-yellow-600"> Exploring </span>
          &nbsp;Today
        </ButtonBase>
      </FlexBetween>
    </>
  );
};

export default Welcome;
