import React from "react";
import FlexBetween from "../../layout/Flexbetween";
import { BsRobot, BsMicrosoftTeams } from "react-icons/bs";
import { SlDocs } from "react-icons/sl";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Flexcenter from "../../layout/Flexcenter";
const Containers = () => {
  return (
    <>
      <Flexcenter marginX={"10rem"} marginY={"2rem"}>
        <FlexBetween

          borderRadius={"10px"}
          style={{ backgroundColor: "#FFFFFF" }}
          padding={"0.75rem 2rem"}
          alignItems={"flex-start"}
          gap={"2rem"}
        >
          <Accordion>
            <AccordionSummary sx={{display:"flex",gap:"3rem",justifyContent:"space-around",flexDirection:"row"}}>
              <BsRobot
                size={40}
                className=" transformation cursor-pointer"
                style={{ color: "blueviolet" }}
              /><h1 className="pl-4 text-[2rem] font-semibold text-[#333333]">ChatBot</h1>
            </AccordionSummary>
            <AccordionDetails>
              <h2 className="text-justify  ">
                A chatbot is a software application or web interface that aims
                to mimic human conversation through text or voice interactions
              </h2>
            </AccordionDetails>
          </Accordion>
         
          <Accordion>
            <AccordionSummary>
              <BsMicrosoftTeams
                size={40}
                className=" transformation cursor-pointer"
                style={{ color: "blueviolet" }}
              /><h1 className="pl-4 text-[2rem] font-semibold text-[#333333]">Community</h1>
            </AccordionSummary>
            <AccordionDetails>
              <h2 className="text-justify ">
                A chatbot is a software application or web interface that aims
                to mimic human conversation through text or voice interactions
              </h2>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <SlDocs
                size={40}
                className=" transformation cursor-pointer"
                style={{ color: "blueviolet" }}
              /><h1 className="pl-4 text-[2rem] font-semibold text-[#333333]">Doc Analysis</h1>
            </AccordionSummary>
            <AccordionDetails>
              <h2 className="text-justify ">
                A chatbot is a software application or web interface that aims
                to mimic human conversation through text or voice interactions
              </h2>
            </AccordionDetails>
          </Accordion>
          {/* <div className="transition-all  items-center grid grid-flow-col-dense gap-2 transforming">
            <BsRobot
              size={40}
              className=" transformation cursor-pointer"
              style={{ color: "blueviolet" }}
            />
            <h2 className="text-justify texter">
              A chatbot is a software application or web interface that aims to
              mimic human conversation through text or voice interactions
            </h2>
          </div> */}
          {/* <div className="transition-all items-center transforming grid grid-flow-col-dense gap-2 ">
            <BsMicrosoftTeams
              size={40}
              className=" transformation cursor-pointer"
              style={{ color: "blueviolet" }}
            />
            <h2 className="text-justify texter">
              A chatbot is a software application or web interface that aims to
              mimic human conversation through text or voice interactions
            </h2>
          </div>
          <div className="transition-all items-center transforming grid grid-flow-col-dense gap-2 ">
            <SlDocs
              size={40}
              className=" transformation cursor-pointer"
              style={{ color: "blueviolet" }}
            />
            <h2 className="text-justify texter">
              A chatbot is a software application or web interface that aims to
              mimic human conversation through text or voice interactions
            </h2>
          </div> */}
        </FlexBetween>
        {/* </Gridcol> */}
      </Flexcenter>
    </>
  );
};

export default Containers;
