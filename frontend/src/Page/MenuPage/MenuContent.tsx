import { Box } from "@mui/material";
import React, { memo, useEffect, useRef, useState } from "react";
import ShishaPage from "./ShishaPage/ShishaPage";
import DrinkPage from "./DrinkPage/DrinkPage";
import SnackPage from "./SnackPage/SnackPage";


const MenuContent = memo(() => {

  return (
    <>
      <ShishaPage />
      <DrinkPage />
      <SnackPage />
    </>
  )
})


export default MenuContent;
