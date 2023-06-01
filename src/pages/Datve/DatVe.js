import React from "react";
import { useState } from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";

function DatVe() {
  const steps = [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];
  return (
    <div className="flex">
      <section style={{ flex: "75%" }}>
        <div
          style={{ boxShadow: "0 0 15px rgb(0 0 0 / 30%)" }}
          className="w-full h-full p-2.5 justify-between items-stretch"
        >
          {/* <Box sx={{ width: "100%" }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box> */}
        </div>
      </section>
      <section style={{ flex: "25%" }}>
        <h2>hoàng 239</h2>
      </section>
    </div>
  );
}

export default DatVe;
