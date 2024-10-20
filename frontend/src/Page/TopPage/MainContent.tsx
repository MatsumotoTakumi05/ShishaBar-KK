import { Box } from "@mui/material";
import React, { memo } from "react";
import StoreImage from "./StoreImage/StoreImage";
import Information from "./Information/Information";
import AboutShisha from "./AboutShisha/AboutShisha";

const MainContent = memo(() => {
  return (
   
    <>
      <StoreImage />
      <Information />
      <AboutShisha />
    </>
  );
});

export default MainContent;
