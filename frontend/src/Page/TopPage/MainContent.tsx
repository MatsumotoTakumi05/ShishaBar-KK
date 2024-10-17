import { Box } from "@mui/material";
import React, { memo } from "react";
import StoreImage from "./StoreImage/StoreImage";
import Information from "./Information/Information";

const MainContent = memo(() => {
  return (
    <Box sx={{ height: "100px", width: "100%", bgcolor: "#262626", color: "#fff" }}>
      <StoreImage />
      <Information />
    </Box>
  );
});

export default MainContent;
