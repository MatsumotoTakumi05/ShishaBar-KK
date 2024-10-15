import { Box } from "@mui/material";
import React, { memo } from "react";
import StoreImage from "./StoreImage/StoreImage";
import Information from "./Information/Information";

const MainContent = memo(() => {
  return (
    <Box sx={{ height: "00px", width: "100%", bgcolor: "#000", color: "#fff" }}>
      <StoreImage />
      <Information />
    </Box>
  );
});

export default MainContent;
