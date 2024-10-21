import { Box } from "@mui/material";
import React, { memo, useEffect, useRef, useState } from "react";
import StoreImage from "./StoreImage/StoreImage";
import Information from "./Information/Information";
import AboutShisha from "./AboutShisha/AboutShisha";
import StoreAccess from "./StoreAccess/StoreAccess";
import Menu from "./Menu/Menu ";

interface Props {
  setXScale: React.Dispatch<React.SetStateAction<number[]>>,
  setYScale: React.Dispatch<React.SetStateAction<number[]>>
}
const MainContent = memo((props: Props) => {
  const { setXScale, setYScale } = props

  return (
    <>
      <StoreImage setXScale={setXScale} setYScale={setYScale} />
      <Information setXScale={setXScale} setYScale={setYScale} />
      <AboutShisha setXScale={setXScale} setYScale={setYScale} />
      <StoreAccess setXScale={setXScale} setYScale={setYScale} />
      <Menu />
    </>
  )
})


export default MainContent;
