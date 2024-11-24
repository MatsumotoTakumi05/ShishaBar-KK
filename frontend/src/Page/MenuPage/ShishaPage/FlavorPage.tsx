import React, { memo } from "react";
import CardSwiper from "../../../Component/modules/Swiper/CardSwiper";
import CustomLayout from "../../../Component/modules/Layout/CustomLayout";
import { Box, Container, Typography } from "@mui/material";

const FlavorPage = memo(() => {
  const cardList = [
    {
      imgUrl: "/PeachCard.jpg",
      imgEx: "./PeachCard",
      textTittle: "ピーチ",
      beginner: 5,
      sweet: 5,
      fruity: 4,
      relax: 4,
    },
    {
      imgUrl: "/PineappleCard.jpg",
      imgEx: "./PineappleCard",
      textTittle: "パイナップル",
      beginner: 0,
      sweet: 0,
      fruity: 0,
      relax: 0,
    },
    {
      imgUrl: "/MangoCard.jpg",
      imgEx: "./MangoCard",
      textTittle: "マンゴー",
      beginner: 0,
      sweet: 0,
      fruity: 0,
      relax: 0,
    },
    {
      imgUrl: "/AppleCard.jpg",
      imgEx: "./AppleCard",
      textTittle: "ダブルアップル",
      beginner: 5,
      sweet: 4,
      fruity: 4,
      relax: 4,
    },
    {
      imgUrl: "/KiwiCard.jpg",
      imgEx: "./KiwiCard",
      textTittle: "キウイ",
      beginner: 3,
      sweet: 4,
      fruity: 3,
      relax: 3,
    },
    {
      imgUrl: "/LitchiCard.jpg",
      imgEx: "./LitchiCard",
      textTittle: "ライチ",
      beginner: 0,
      sweet: 0,
      fruity: 0,
      relax: 0,
    },
    {
      imgUrl: "/OrangeCard.jpg",
      imgEx: "./OrangeCard",
      textTittle: "オレンジ",
      beginner: 5,
      sweet: 2,
      fruity: 4,
      relax: 5,
    },
    {
      imgUrl: "/LimeCard.jpg",
      imgEx: "./LimeCard",
      textTittle: "ライム",
      beginner: 0,
      sweet: 0,
      fruity: 0,
      relax: 0,
    },
    {
      imgUrl: "/Strawberry.jpg",
      imgEx: "./Strawberry",
      textTittle: "ストロベリー",
      beginner: 0,
      sweet: 0,
      fruity: 0,
      relax: 0,
    },
    {
      imgUrl: "/CherryCard.jpg",
      imgEx: "./CherryCard",
      textTittle: "チェリー",
      beginner: 5,
      sweet: 4,
      fruity: 3,
      relax: 4,
    },
    {
      imgUrl: "/BlueBerryCard.jpg",
      imgEx: "./BlueBerryCard",
      textTittle: "ブルーベリー",
      beginner: 5,
      sweet: 3,
      fruity: 4,
      relax: 4,
    },
    {
      imgUrl: "/RaspberryCard.jpg",
      imgEx: "./RaspberryCard",
      textTittle: "ラズベリー",
      beginner: 0,
      sweet: 0,
      fruity: 0,
      relax: 0,
    },
    {
      imgUrl: "/KasisCard.jpg",
      imgEx: "./KasisCard",
      textTittle: "カシス",
      beginner: 0,
      sweet: 0,
      fruity: 0,
      relax: 0,
    },
    {
      imgUrl: "/MintCard.jpg",
      imgEx: "./MintCard",
      textTittle: "ミント",
      beginner: 5,
      sweet: 1,
      fruity: 1,
      relax: 6,
    },
    {
      imgUrl: "/MilkTeaCard.jpg",
      imgEx: "./MilkTeaCard",
      textTittle: "香港ミルクティー",
      beginner: 0,
      sweet: 0,
      fruity: 0,
      relax: 0,
    },
    {
      imgUrl: "/LemonCard.jpg",
      imgEx: "./LemonCard",
      textTittle: "レモングラス",
      beginner: 0,
      sweet: 0,
      fruity: 0,
      relax: 0,
    },
    {
      imgUrl: "/GingerCard.jpg",
      imgEx: "./GingerCard",
      textTittle: "ジンジャエール",
      beginner: 0,
      sweet: 0,
      fruity: 0,
      relax: 0,
    },
    {
      imgUrl: "/GrepFruitCard.jpg",
      imgEx: "./GrepFruitCard",
      textTittle: "グレープフルーツ",
      beginner: 0,
      sweet: 0,
      fruity: 0,
      relax: 0,
    },
    {
      imgUrl: "/GrepFruitCard.jpg",
      imgEx: "./GrepFruitCard",
      textTittle: "チョコレート",
      beginner: 5,
      sweet: 5,
      fruity: 1,
      relax: 3,
    },
    {
      imgUrl: "/GrepFruitCard.jpg",
      imgEx: "./GrepFruitCard",
      textTittle: "バニラ",
      beginner: 5,
      sweet: 5,
      fruity: 1,
      relax: 4,
    },
    {
      imgUrl: "/GrepFruitCard.jpg",
      imgEx: "./GrepFruitCard",
      textTittle: "ローズ",
      beginner: 5,
      sweet: 1,
      fruity: 1,
      relax: 5,
    },
    {
      imgUrl: "/GrepFruitCard.jpg",
      imgEx: "./GrepFruitCard",
      textTittle: "ココナッツ",
      beginner: 3,
      sweet: 5,
      fruity: 1,
      relax: 2,
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
              <CardSwiper cardList={cardList} fontSize="14px" flavorRank />
            </Container>
            <Box sx={{ textAlign: "right" }}>
              <Typography>※写真はイメージです。</Typography>
            </Box>
          </CustomLayout>
        </Box>
      </Box>
    </>
  );
});

export default FlavorPage;
