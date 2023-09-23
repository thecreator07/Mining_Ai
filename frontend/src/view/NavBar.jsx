import React from "react";
import { ButtonBase } from "@mui/material";
import FlexBetween from "../layout/Flexbetween";
const Navbar = () => {
  return (
    <>
      <FlexBetween className="" borderRadius={"10px"} style={{backgroundColor:"whitesmoke"}} padding={"0.75rem 2rem"} marginX={"5rem"} marginY={"2rem"}>
        <div className=" h-full">
          {/* <img src="" alt=""> */}
          <h1 className={`text-black text-3xl text-ellipsis font-semibold `}>return 0</h1>
        </div>
        <div className="">
          <ul className="flex gap-5 justify-between ">
            {["home", "Chatbot", "Consultancy", "Doc Analysis", "About Us"].map(
              (item, index) => (
                <>
                  <li
                    key={index}
                    style={{
                      color: item === "home" ? "rgb(206 138 10)" : "black",
                    }}
                    className="font-medium text-base"
                  >
                    {item}
                  </li>
                </>
              )
            )}
          </ul>
        </div>
        <div className="flex gap-4">
          <ButtonBase  style={{padding:"0.25rem 0.75rem",fontSize:"1rem",fontWeight:"500" ,backgroundColor:"rgb(206 138 10)",borderRadius:"35px"}}>SignUp</ButtonBase>
          <ButtonBase  style={{padding:"0.25rem 0.75rem",fontSize:"1rem",fontWeight:"500" ,backgroundColor:"white",border:"solid 1px rgb(206 138 10)",borderRadius:"35px"}}>Login</ButtonBase>
        </div>
      </FlexBetween>
    </>
  );
};

export default Navbar;
