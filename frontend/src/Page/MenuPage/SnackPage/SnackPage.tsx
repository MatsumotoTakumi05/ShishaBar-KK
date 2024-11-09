import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Box from "@mui/material/Box";
import { memo } from "react";
import Menu from "../../TopPage/Menu/Menu ";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Footer from "../../Footer/Footer";
import CustomLayout from "../../../Component/modules/Layout/CustomLayout";
import CardSwiper from "../../../Component/modules/Swiper/CardSwiper";

const SnackPage = memo(() => {
  const cardList = [
    {
      imgUrl: "/PotetoFlyCard.jpg",
      imgEx: "./PotetoFlyCard",
      textTittle: "ポテトフライ",
      textContent: "¥ 600",
    },
    {
      imgUrl: "/NuggetsCard.jpg",
      imgEx: "./NuggetsCard",
      textTittle: "チキンナゲット",
      textContent: "¥ 600",
    },
    {
      imgUrl: "/NutsCard.jpg",
      imgEx: "./NutsCard",
      textTittle: "ナッツ",
      textContent: "¥ 500",
    },
    {
      imgUrl: "/ChocoCard.jpg",
      imgEx: "./ChocoCard",
      textTittle: "チョコレート盛合わせ",
      textContent: "¥ 500",
    },
    {
      imgUrl: "/CupMenCard.jpg",
      imgEx: "./CupMenCard",
      textTittle: "カップ麺各種",
      textContent: "¥ 500",
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
          <CustomLayout tittleText="Snack Menu">
            <CardSwiper cardList={cardList} />
            <Box sx={{ textAlign: "right" }}>
              <Typography>※写真はイメージです。</Typography>
            </Box>
          </CustomLayout>
        </Box>
      </Box>
    </>
  );
});

export default SnackPage;
