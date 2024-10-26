import { Box } from "@mui/material";
import React, { memo, useEffect, useRef, useState } from "react";
import StoreImage from "./StoreImage/StoreImage";
import Information from "./Information/Information";
import AboutShisha from "./AboutShisha/AboutShisha";
import StoreAccess from "./StoreAccess/StoreAccess";
import Menu from "./Menu/Menu ";

const MainContent = memo(() => {

  return (
    <>
      <StoreImage />
      <Information />
      <Menu />
      <AboutShisha />
      <StoreAccess />
      
    </>
  )
})


export default MainContent;
