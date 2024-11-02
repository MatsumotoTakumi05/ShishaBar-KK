import { Box } from "@mui/material";
import React, { memo, useEffect, useRef, useState } from "react";
import StoreImage from "./StoreImage/StoreImage";
import Information from "./Information/Information";
import AboutShisha from "./AboutShisha/AboutShisha";
import StoreAccess from "./StoreAccess/StoreAccess";
import Menu from "./Menu/Menu ";
import Footer from "../Footer/Footer";

const MainContent = memo(() => {
  return (
    <>
      <Box
        height={"600px"}
        sx={{
          overflowY: "auto",
          backgroundImage: "url(./Normal_BgImage.jpeg)",
        }}
      >
        <Box height={"100%"}>
          <StoreImage />
          <Information />
          <Menu />
          <AboutShisha />
          <StoreAccess />
        </Box>
      </Box>
    </>
  );
});

export default MainContent;
