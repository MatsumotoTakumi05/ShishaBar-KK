import { Box } from "@mui/material";
import React, { memo } from "react";
import StoreImage from "./StoreImage/StoreImage";
import Information from "./Information/Information";
import AboutShisha from "./AboutShisha/AboutShisha";
import StoreAccess from "./StoreAccess/StoreAccess";

const MainContent = memo(() => {
  return (
    <>
      <StoreImage />
      <Information />
      <AboutShisha />
      <StoreAccess />
    </>
  );
});

export default MainContent;
