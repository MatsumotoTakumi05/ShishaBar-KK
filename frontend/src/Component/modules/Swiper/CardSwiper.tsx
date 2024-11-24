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
import { Rating } from "@mui/material";

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
  beginner?: number;
  sweet?: number;
  fruity?: number;
  relax?: number;
}
interface Props {
  cardList: cardList[];
  slidesPerView?: number;
  isAutoplay?: boolean;
  disableOnInteraction?: boolean;
  fontSize?: string;
  flavorRank?: boolean;
}
const CardSwiper = memo((props: Props) => {
  const {
    cardList,
    slidesPerView,
    isAutoplay = true,
    disableOnInteraction = true,
    fontSize,
    flavorRank = false,
  } = props;

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    console.log("現在のスライドインデックス:", currentIndex);
  };
  return (
    <>
      <Stack
        direction="row"
        sx={{
          width: {
            xs: "80%", // スマートフォンなどの小さい画面
            sm: "100%", // 小型デバイス
            md: "100%", // 中型デバイス
          },
        }}
      >
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
            isAutoplay
              ? { delay: 2000, disableOnInteraction: disableOnInteraction }
              : false
          } // isAutoplayがtrueの場合のみautoplayを設定
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          onSlideChange={handleSlideChange}
        >
          {cardList.map((card, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  borderRadius: "5%",
                  width: card["outWidth"] ? card["outWidth"] : "300px",
                  height: card["outHeight"] ? card["outHeight"] : "350px",
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
                      height: card["textHeight"] ? card["textHeight"] : "150px",
                      backgroundColor: "#d3d3d3",
                      color: "#262626",
                    }}
                  >
                    <Typography>{card["textTittle"]}</Typography>
                    <Typography
                      sx={{
                        textAlign: "left",
                        fontSize: fontSize != undefined ? fontSize : "20px",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: card["textContent"] || "",
                      }}
                      gutterBottom
                    />
                    {flavorRank && (
                      <>
                        <Stack direction="row">
                          <Typography
                            sx={{
                              fontSize:
                                fontSize != undefined ? fontSize : "20px",
                            }}
                          >
                            初心者　　　：
                          </Typography>
                          <Rating
                            name="beginner"
                            sx={{
                              fontSize:
                                fontSize != undefined ? fontSize : "20px",
                              color: "#262626",
                            }}
                            value={card["beginner"]}
                            readOnly
                          />{" "}
                          {card["beginner"] === 6 ? "+1" : ""}
                        </Stack>
                        <Stack direction="row">
                          <Typography
                            sx={{
                              fontSize:
                                fontSize != undefined ? fontSize : "20px",
                            }}
                          >
                            甘さ　　　　：
                          </Typography>
                          <Rating
                            name="sweet"
                            sx={{
                              fontSize:
                                fontSize != undefined ? fontSize : "20px",
                              color: "#262626",
                            }}
                            value={card["sweet"]}
                            readOnly
                          />
                          {card["sweet"] === 6 ? "+1" : ""}
                        </Stack>
                        <Stack direction="row">
                          <Typography
                            sx={{
                              fontSize:
                                fontSize != undefined ? fontSize : "20px",
                            }}
                          >
                            フルーティー：
                          </Typography>
                          <Rating
                            name="fruity"
                            sx={{
                              fontSize:
                                fontSize != undefined ? fontSize : "20px",
                              color: "#262626",
                            }}
                            value={card["fruity"]}
                            readOnly
                          />{" "}
                          {card["fruity"] === 6 ? "+1" : ""}
                        </Stack>
                        <Stack direction="row">
                          <Typography
                            sx={{
                              fontSize:
                                fontSize != undefined ? fontSize : "20px",
                            }}
                          >
                            リラックス　：
                          </Typography>
                          <Rating
                            name="relax"
                            sx={{
                              fontSize:
                                fontSize != undefined ? fontSize : "20px",
                              color: "#262626",
                            }}
                            value={card["relax"]}
                            readOnly
                          />
                          {card["relax"] === 6 ? "+1" : ""}
                        </Stack>
                      </>
                    )}
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
