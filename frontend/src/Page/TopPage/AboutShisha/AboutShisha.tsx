import { Box, Button, Container, Typography } from "@mui/material";
import React, { memo, useEffect, useRef } from "react";
import CustomLayout from "../../../Component/modules/Layout/CustomLayout";
import { useNavigate } from "react-router-dom";

const AboutShisha = memo(() => {
  // navigateの定義
  const navigate = useNavigate();

  const detailPageNaviOnClick = () => {
    navigate("/KK/AboutShisha");
  };

  const customLayout = {
    position: "absolute", // 絶対位置を設定
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
  return (
    <>
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          component="img"
          src="./AboutShisha.jpg"
          sx={{
            width: "100%",
            opacity: "0.5",
            height: { xs: "680px", md: "100%" },
          }}
        />
        <CustomLayout
          id="about"
          tittleText="About Shisha"
          backgroundBorder={[customLayout]}
        >
          <Container sx={{ display: "flex" }}>
            <Box sx={{ width: "70%", paddingLeft: "80px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "19px", md: "19px" },
                  fontFamily: "Shippori Mincho B1",
                  lineHeight: { xs: "30px", md: "75px" },
                }}
              >
                シーシャは、水タバコの一種で、香り豊かなフレーバーの煙をゆっくりと吸い込む嗜好品です。
                <br />
                フルーツやミントなどのフレーバー付きタバコ葉を炭で加熱し、水を通して吸うため、煙がまろやかになるのが特徴です。
                <br />
                数多くのフレーバーの中からお気に入りを見つけ、ぜひリラックスしたひと時をお過ごしください。
              </Typography>
              <Button
                variant="text"
                sx={{
                  mt: { xs: "10px", md: "30px" },
                  "&:hover": { opacity: "0.8" },
                  fontSize: { xs: "12px", md: "19px" },
                }}
                onClick={detailPageNaviOnClick}
                color="inherit"
              >
                Read More→
              </Button>
            </Box>
          </Container>
        </CustomLayout>
      </Box>
    </>
  );
});

export default AboutShisha;
