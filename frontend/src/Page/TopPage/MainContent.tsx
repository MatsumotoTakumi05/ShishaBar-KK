import { Box } from "@mui/material";
import React, { memo } from "react";
import StoreImage from "./StoreImage/StoreImage";
import Information from "./Information/Information";
import AboutShisha from "./AboutShisha/AboutShisha";
import StoreAccess from "./StoreAccess/StoreAccess";
import ShishaAbout from "../ShishaAbout/ShishaAbout";
import Menu from "./Menu/Menu ";

const MainContent = memo(() => {
  return (
    <>
      <StoreImage />
      <Information />
      <ShishaAbout />
      <StoreAccess />
      <Menu />
    </>
  );
});

export default MainContent;
