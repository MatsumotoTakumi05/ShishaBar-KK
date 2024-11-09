import { Box } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const StoreImage = memo(() => {
  // 表示する画像リスト
  const topImage = [
    "./ShishaAbout_BgImage.jpeg",
    "./Access_BgImage.png",
    "./Flavor_BgImage.jpeg",
    "./ShishaAbout_BgImage.jpeg",
    "./ShishaAbout_BgImage.jpeg",
    "./ShishaAbout_BgImage.jpeg",
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null); // thumbsSwiperの初期値をnullに設定

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          height: "500px",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined} // thumbsSwiperが存在する場合のみ渡す
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        speed={3000}
      >
        {topImage.map((img, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={img}
              sx={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper} // サムネイルスワイパーを設定
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        speed={3000}
      >
        {topImage.map((img, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={img}
              sx={{ width: "100%", height: "100px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});

export default StoreImage;
