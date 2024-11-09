import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Box from "@mui/material/Box";
import { memo, useEffect, useState } from "react";
import CustomLayout from "../../../Component/modules/Layout/CustomLayout";
import CardSwiper from "../../../Component/modules/Swiper/CardSwiper";
import CustomTypography from "../../../Component/atoms/Typography/CustomTypography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDrinkPage } from "./useDrinkPage";

const DrinkPage = memo(() => {
  const [alignment, handleAlignment, cardList] = useDrinkPage();

 
  return (
    <>
      <Box
        height={"700px"}
        sx={{
          overflowY: "auto",
          backgroundImage: "url(/Normal_BgImage.jpeg)",
        }}
      >
        <Box height={"100%"}>
          <CustomLayout tittleText="Drink Menu">
            <Container>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Tooltip title="メニュー表を表示します。">
                  <Button
                    variant="contained"
                    onClick={() => window.open("/menu.pdf")}
                    sx={{ mr: "10px" }}
                    color="inherit"
                  >
                    PDF
                  </Button>
                </Tooltip>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={(e: any) => handleAlignment(e)}
                  aria-label="text alignment"
                  color="info"
                >
                  <ToggleButton
                    value="beer"
                    aria-label="beer aligned"
                    sx={{ color: "#fff", border: "solid 0.5px silver" }}
                  >
                    ビール/ハイボール
                  </ToggleButton>
                  <ToggleButton
                    sx={{ color: "#fff", border: "solid 0.5px silver" }}
                    value="wine"
                    aria-label="wine aligned"
                  >
                    ワイン
                  </ToggleButton>
                  <ToggleButton
                    sx={{ color: "#fff", border: "solid 0.5px silver" }}
                    value="sour"
                    aria-label="sour aligned"
                  >
                    サワー
                  </ToggleButton>
                  <ToggleButton
                    sx={{ color: "#fff", border: "solid 0.5px silver" }}
                    value="syochu"
                    aria-label="syochu aligned"
                  >
                    焼酎/果実酒
                  </ToggleButton>
                  <ToggleButton
                    sx={{ color: "#fff", border: "solid 0.5px silver" }}
                    value="cocktail1"
                    aria-label="cocktail aligned"
                  >
                    カクテル1
                  </ToggleButton>
                  <ToggleButton
                    sx={{ color: "#fff", border: "solid 0.5px silver" }}
                    value="cocktail2"
                    aria-label="cocktail2 aligned"
                  >
                    カクテル2
                  </ToggleButton>
                  <ToggleButton
                    sx={{ color: "#fff", border: "solid 0.5px silver" }}
                    value="shot"
                    aria-label="shot aligned"
                  >
                    ショット/シャンパン
                  </ToggleButton>
                  <ToggleButton
                    sx={{ color: "#fff", border: "solid 0.5px silver" }}
                    value="nonal"
                    aria-label="nonal aligned"
                  >
                    ノンアル
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Container>
            <CardSwiper cardList={cardList} disableOnInteraction={false} />
            <Box>
              <Typography sx={{ textAlign: "right" }}>
                ※写真はイメージです。
              </Typography>
            </Box>
          </CustomLayout>
        </Box>
      </Box>
    </>
  );
});

export default DrinkPage;
