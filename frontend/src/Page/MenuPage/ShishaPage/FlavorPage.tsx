import React, { memo } from "react";
import CardSwiper from "../../../Component/modules/Swiper/CardSwiper";
import CustomLayout from "../../../Component/modules/Layout/CustomLayout";
import { Box, Container } from "@mui/material";

const FlavorPage = memo(() => {
  const cardList = [
    {
      imgUrl: "/PeachCard.jpg",
      imgEx: "./PeachCard",
      textTittle: "ピーチ",
      textContent: "甘く爽やかな香りが特徴🔰",
    },
    {
      imgUrl: "/PineappleCard.jpg",
      imgEx: "./PineappleCard",
      textTittle: "パイナップル",
      textContent: "甘酸っぱい香りが特徴",
    },
    {
      imgUrl: "/MangoCard.jpg",
      imgEx: "./MangoCard",
      textTittle: "マンゴー",
      textContent: "濃厚で甘い香りが特徴",
    },
    {
      imgUrl: "/AppleCard.jpg",
      imgEx: "./AppleCard",
      textTittle: "ダブルアップル",
      textContent: "甘さと爽やかさがクセになる",
    },
    {
      imgUrl: "/KiwiCard.jpg",
      imgEx: "./KiwiCard",
      textTittle: "キウイ",
      textContent: "",
    },
    {
      imgUrl: "/LitchiCard.jpg",
      imgEx: "./LitchiCard",
      textTittle: "ライチ",
      textContent: "",
    },
    {
      imgUrl: "/OrangeCard.jpg",
      imgEx: "./OrangeCard",
      textTittle: "オレンジ",
      textContent: "",
    },
    {
      imgUrl: "/LimeCard.jpg",
      imgEx: "./LimeCard",
      textTittle: "ライム",
      textContent: "",
    },
    {
      imgUrl: "/Strawberry.jpg",
      imgEx: "./Strawberry",
      textTittle: "ストロベリー",
      textContent: "",
    },
    {
      imgUrl: "/CherryCard.jpg",
      imgEx: "./CherryCard",
      textTittle: "チェリー",
      textContent: "",
    },
    {
      imgUrl: "/BlueBerryCard.jpg",
      imgEx: "./BlueBerryCard",
      textTittle: "ブルーベリー",
      textContent: "",
    },
    {
      imgUrl: "/RaspberryCard.jpg",
      imgEx: "./RaspberryCard",
      textTittle: "ラズベリー",
      textContent: "",
    },
    {
      imgUrl: "/KasisCard.jpg",
      imgEx: "./KasisCard",
      textTittle: "カシス",
      textContent: "",
    },
    {
      imgUrl: "/MintCard.jpg",
      imgEx: "./MintCard",
      textTittle: "ミント",
      textContent: "",
    },
    {
      imgUrl: "/MilkTeaCard.jpg",
      imgEx: "./MilkTeaCard",
      textTittle: "香港ミルクティー",
      textContent: "",
    },
    {
      imgUrl: "/LemonCard.jpg",
      imgEx: "./LemonCard",
      textTittle: "レモングラス",
      textContent: "",
    },
    {
      imgUrl: "/GingerCard.jpg",
      imgEx: "./GingerCard",
      textTittle: "ジンジャエール",
      textContent: "",
    },
    {
      imgUrl: "/GrepFruitCard.jpg",
      imgEx: "./GrepFruitCard",
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
