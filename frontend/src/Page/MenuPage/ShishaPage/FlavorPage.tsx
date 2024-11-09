import React, { memo } from "react";
import CardSwiper from "../../../Component/modules/Swiper/CardSwiper";
import CustomLayout from "../../../Component/modules/Layout/CustomLayout";
import { Box, Container } from "@mui/material";

const FlavorPage = memo(() => {
  const cardList = [
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "ピーチ",
      textContent: "甘く爽やかな香りが特徴🔰",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "パイナップル",
      textContent: "甘酸っぱい香りが特徴",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "マンゴー",
      textContent: "濃厚で甘い香りが特徴",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "ダブルアップル",
      textContent: "甘さと爽やかさがクセになる",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "キウイ",
      textContent: "",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "ライチ",
      textContent: "",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "オレンジ",
      textContent: "",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "ライム",
      textContent: "",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "ストロベリー",
      textContent: "",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "チェリー",
      textContent: "",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "ブルーベリー",
      textContent: "",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "ラズベリー",
      textContent: "",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "カシス",
      textContent: "",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "ミント",
      textContent: "",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "香港ミルクティー",
      textContent: "",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "レモングラス",
      textContent: "",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "ジンジャエール",
      textContent: "",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "グレープフルーツ",
      textContent: "",
    },
  ];
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
          <CustomLayout tittleText="Flavor Menu">
            <Container>
              <CardSwiper cardList={cardList} fontSize="15px" />
            </Container>
          </CustomLayout>
        </Box>
      </Box>
    </>
  );
});

export default FlavorPage;
