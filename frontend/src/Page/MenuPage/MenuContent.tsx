import { Box } from "@mui/material";
import React, { memo, useEffect, useRef, useState } from "react";
import ShishaPage from "./ShishaPage/ShishaPage";
import DrinkPage from "./DrinkPage/DrinkPage";


const MenuContent = memo(() => {

  return (
    <>
      <ShishaPage />
      <DrinkPage />
    </>
  )
})


export default MenuContent;
