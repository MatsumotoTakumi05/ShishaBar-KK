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
    color: "#fff",
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
              <Grid container>
                <Grid size={5} rowSpacing={2}>
                  <Item>フライドポテト</Item>
                </Grid>
                <Grid size={5} rowSpacing={2}>
                  <Item>¥600</Item>
                </Grid>
              </Grid>
              <Grid container>
                <Grid size={5} rowSpacing={2}>
                  <Item>チキンナゲット</Item>
                </Grid>
                <Grid size={5} rowSpacing={2}>
                  <Item>¥600</Item>
                </Grid>
              </Grid>
              <Grid container>
                <Grid size={5} rowSpacing={2}>
                  <Item>ナッツ</Item>
                </Grid>
                <Grid size={5} rowSpacing={2}>
                  <Item>¥500</Item>
                </Grid>
              </Grid>
              <Grid container>
                <Grid size={5} rowSpacing={2}>
                  <Item>ポテトチップス</Item>
                </Grid>
                <Grid size={5} rowSpacing={2}>
                  <Item>¥500</Item>
                </Grid>
              </Grid>
              <Grid container>
                <Grid size={5} rowSpacing={2}>
                  <Item>チョコレート盛り合わせ</Item>
                </Grid>
                <Grid size={5} rowSpacing={2}>
                  <Item>¥500</Item>
                </Grid>
              </Grid>
              <Grid container>
                <Grid size={5} rowSpacing={2}>
                  <Item>カップ麺</Item>
                </Grid>
                <Grid size={5} rowSpacing={2}>
                  <Item>¥500</Item>
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
