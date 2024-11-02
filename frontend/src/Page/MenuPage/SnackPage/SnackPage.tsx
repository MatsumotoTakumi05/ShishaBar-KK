import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
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

const SnackPage = memo(() => {
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
          <CustomLayout tittleText="Food Menu">
            {/* <Container> */}
            <Stack direction="row">
              <Swiper
                effect={"coverflow"}
                grabCursor
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Card
                    sx={{
                      borderRadius: "5%",
                      width: "300px",
                      margin: 7,
                      height: "300px",
                      border: "solid 1px #262626",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image="/Snack.jpeg"
                        alt="./ShishaPage"
                        sx={{ height: "200px" }}
                      />
                      <CardContent
                        sx={{
                          height: "100px",
                          backgroundColor: "#d3d3d3",
                          color: "#262626",
                        }}
                      >
                        <Typography>ポテトフライ</Typography>
                        <Typography>¥ 600</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    sx={{
                      borderRadius: "5%",
                      width: "300px",
                      margin: 7,
                      height: "300px",
                      border: "solid 1px #262626",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image="/Snack.jpeg"
                        alt="./ShishaPage"
                        sx={{ height: "200px" }}
                      />
                      <CardContent
                        sx={{
                          height: "100px",
                          backgroundColor: "#d3d3d3",
                          color: "#262626",
                        }}
                      >
                        <Typography>チキンナゲット</Typography>
                        <Typography>¥ 600</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    sx={{
                      borderRadius: "5%",
                      width: "300px",
                      margin: 7,
                      height: "300px",
                      border: "solid 1px #262626",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image="/Snack.jpeg"
                        alt="./ShishaPage"
                        sx={{ height: "200px" }}
                      />
                      <CardContent
                        sx={{
                          height: "100px",
                          backgroundColor: "#d3d3d3",
                          color: "#262626",
                        }}
                      >
                        <Typography>ナッツ</Typography>
                        <Typography>¥ 500</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    sx={{
                      borderRadius: "5%",
                      width: "300px",
                      margin: 7,
                      height: "300px",
                      border: "solid 1px #262626",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image="/Snack.jpeg"
                        alt="./ShishaPage"
                        sx={{ height: "200px" }}
                      />
                      <CardContent
                        sx={{
                          height: "100px",
                          backgroundColor: "#d3d3d3",
                          color: "#262626",
                        }}
                      >
                        <Typography>ポテトチップス</Typography>
                        <Typography>¥ 500</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    sx={{
                      borderRadius: "5%",
                      width: "300px",
                      margin: 7,
                      height: "300px",
                      border: "solid 1px #262626",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image="/Snack.jpeg"
                        alt="./ShishaPage"
                        sx={{ height: "200px" }}
                      />
                      <CardContent
                        sx={{
                          height: "100px",
                          backgroundColor: "#d3d3d3",
                          color: "#262626",
                        }}
                      >
                        <Typography>チョコ盛合わせ</Typography>
                        <Typography>¥ 500</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    sx={{
                      borderRadius: "5%",
                      width: "300px",
                      margin: 7,
                      height: "300px",
                      border: "solid 1px #262626",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image="/Snack.jpeg"
                        alt="./ShishaPage"
                        sx={{ height: "200px" }}
                      />
                      <CardContent
                        sx={{
                          height: "100px",
                          backgroundColor: "#d3d3d3",
                          color: "#262626",
                        }}
                      >
                        <Typography>カップ麺各種</Typography>
                        <Typography>¥ 500</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </Stack>
            {/* </Container> */}
          </CustomLayout>
        </Box>
      </Box>
    </>
  );
});

export default SnackPage;
