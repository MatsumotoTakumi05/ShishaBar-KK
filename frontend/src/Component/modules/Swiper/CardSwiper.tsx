import Stack from "@mui/material/Stack";
import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// propsの型定義
interface cardList {
  outWidth?: string;
  outHeight?: string;
  imgUrl?: string;
  imgEx?: string;
  imgWidth?: string;
  imgHeight?: string;
  textHeight?: string;
  textTittle?: string;
  textContent?: string;
}
interface Props {
  cardList: cardList[];
  slidesPerView?: number;
  isAutoplay?: boolean;
}
const CardSwiper = memo((props: Props) => {
  const { cardList, slidesPerView, isAutoplay = true } = props;
  return (
    <>
      <Stack direction="row">
        <Swiper
          effect={"coverflow"}
          grabCursor
          centeredSlides={true}
          slidesPerView={slidesPerView ? slidesPerView : 3}
          coverflowEffect={{
            rotate: 90,
            stretch: 0,
            depth: 2000,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={
            isAutoplay ? { delay: 2000, disableOnInteraction: true } : false
          } // isAutoplayがtrueの場合のみautoplayを設定
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
        >
          {cardList.map((card, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  borderRadius: "5%",
                  width: card["outWidth"] ? card["outWidth"] : "300px",
                  margin: 7,
                  height: card["outHeight"] ? card["outHeight"] : "300px",
                  border: "solid 1px #262626",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={card["imgUrl"]}
                    alt={card["imgEx"]}
                    sx={{
                      height: card["imgHeight"] ? card["imgHeight"] : "200px",
                      width: card["imgWidth"] ? card["imgWidth"] : "100%",
                    }}
                  />
                  <CardContent
                    sx={{
                      height: card["textHeight"] ? card["textHeight"] : "100px",
                      backgroundColor: "#d3d3d3",
                      color: "#262626",
                    }}
                  >
                    <Typography>{card["textTittle"]}</Typography>
                    <Typography
                      sx={{ textAlign: "right" }}
                      component="div"
                      dangerouslySetInnerHTML={{
                        __html: card["textContent"] || "",
                      }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </>
  );
});

export default CardSwiper;
