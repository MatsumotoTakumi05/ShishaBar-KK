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
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "ポテトフライ",
      textContent: "¥ 600",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "チキンナゲット",
      textContent: "¥ 600",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "ナッツ",
      textContent: "¥ 500",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
      textTittle: "チョコレート盛合わせ",
      textContent: "¥ 500",
    },
    {
      imgUrl: "/Snack.jpeg",
      imgEx: "./ShishaPage",
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
          backgroundImage: "url(../Normal_BgImage.jpeg)",
        }}
      >
        <Box height={"100%"}>
          <CustomLayout tittleText="Snack Menu">
            <CardSwiper cardList={cardList} />
          </CustomLayout>
        </Box>
      </Box>
    </>
  );
});

export default SnackPage;
