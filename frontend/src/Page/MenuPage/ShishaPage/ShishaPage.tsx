import React, { memo } from "react";
import CustomLayout from "../../../Component/modules/Layout/CustomLayout";
import Box from "@mui/material/Box";
import CustomTypography from "../../../Component/atoms/Typography/CustomTypography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Paper, Typography } from "@mui/material";
import { theme } from "../../../Style/theme";
import BasicSystem from "./BasicSystem";
import { Padding } from "@mui/icons-material";
import FlavorPage from "./FlavorPage";

const ShishaPage = memo(() => {
  return (
    <>
      <Box
        height={"700px"}
        sx={{
          overflowY: "auto",
          backgroundImage: "url(../Normal_BgImage.jpeg)",
        }}
      >
        <Box height={"100%"}>
          <CustomLayout tittleText="Basic System">
            <Box
              sx={{
                backgroundColor: "rgba(110, 110, 110, 0.4)",
                height: "85%",
                width: "80%",
                borderRadius: "2%",
                margin: "0 auto",
              }}
            >
              <Container sx={{color:"silver"}}>
                <BasicSystem />
              </Container>
            </Box>
          </CustomLayout>
          <CustomLayout tittleText="Flavor Menu">
            <Container>
              <FlavorPage />
            </Container>
          </CustomLayout>
        </Box>
      </Box>
    </>
  );
});

export default ShishaPage;
