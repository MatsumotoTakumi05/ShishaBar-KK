import React, { memo } from "react";
import CustomLayout from "../../../Component/modules/Layout/CustomLayout";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const SnackPage = memo(() => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#262626",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    border: "solid 1px #fff",
    color: theme.palette.text.secondary,
    borderRadius: 0,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <>
      <CustomLayout tittleText="Snack Menu">
        <Box>
          <Container>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container >
                <Grid size={4}>
                  <Item>size=4</Item>
                </Grid>
                <Grid size={4}>
                  <Item>size=4</Item>
                </Grid>
                <Grid size={2}>
                  <Item>size=2</Item>
                </Grid>
                <Grid size={1}>
                  <Item>size=8</Item>
                </Grid>
                <Grid size={2}>
                  <Item>size=4</Item>
                </Grid>
                <Grid size={2}>
                  <Item>size=8</Item>
                </Grid>
                <Grid size={2}>
                  <Item>size=4</Item>
                </Grid>
                <Grid size={2}>
                  <Item>size=8</Item>
                </Grid>
                <Grid size={2}>
                  <Item>size=4</Item>
                </Grid>
                <Grid size={2}>
                  <Item>size=8</Item>
                </Grid>
                <Grid size={2}>
                  <Item>size=4</Item>
                </Grid>
                <Grid size={2}>
                  <Item>size=8</Item>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </CustomLayout>
    </>
  );
});

export default SnackPage;
