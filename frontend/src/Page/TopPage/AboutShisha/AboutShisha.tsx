// import { Box, Button, Container, Typography } from "@mui/material";
// import React, { memo, useEffect, useRef } from "react";
// import CustomLayout from "../../../Component/modules/Layout/CustomLayout";
// import { useNavigate } from "react-router-dom";

// const AboutShisha = memo(() => {
//   // navigateの定義
//   const navigate = useNavigate();

//   const detailPageNaviOnClick = () => {
//     navigate("/KK/AboutShisha");
//   };

//   return (
//     <CustomLayout id="about" tittleText="What's Shisha">
//       <Container maxWidth="md" sx={{ display: "flex", width: "100%" }}>
//         <Box sx={{ width: "50%", padding: "30px" }}>
//           <Typography sx={{ fontSize: "24px" }}>
//             シーシャは、水タバコの一種で、香り豊かなフレーバーの煙をゆっくりと吸い込む嗜好品です。
//             フルーツやミントなどのフレーバー付きタバコ葉を炭で加熱し、水を通して吸うため、煙がまろやかになるのが特徴です。
//             数多くのフレーバーの中からお気に入りを見つけ、ぜひリラックスしたひと時をお過ごしください。
//           </Typography>
//           <Button
//             variant="outlined"
//             sx={{ mt: "30px" }}
//             onClick={detailPageNaviOnClick}
//           >
//             {" "}
//             Read More→
//           </Button>
//         </Box>
//         <Box
//           component="img"
//           src="./AboutShisha.jpg" // 拡張子を追加
//           sx={{
//             width: "50%",
//             height: "100%",
//             opacity: 0.3,
//           }}
//         />
//       </Container>
//     </CustomLayout>
//   );
// });

// export default AboutShisha;

import { Box, Button, Container, Typography } from "@mui/material";
import React, { memo } from "react";
import CustomLayout from "../../../Component/modules/Layout/CustomLayout";
import { useNavigate } from "react-router-dom";

const AboutShisha = memo(() => {
  const navigate = useNavigate();

  const detailPageNaviOnClick = () => {
    navigate("/KK/AboutShisha");
  };

  return (
    <CustomLayout id="about" tittleText="What's Shisha">
      <Container
        maxWidth="md"
        sx={{ position: "relative", width: "100%", height: "500px" }}
      >
        <Box
          sx={{
            position: "absolute", // 絶対位置を設定
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url(./AboutShisha.jpg)", // 背景画像を設定
            backgroundSize: "cover", // 画像をカバー
            backgroundPosition: "center", // 中央に配置
            opacity: 0.5, // 透明度を設定（必要に応じて調整）
            zIndex: 0, // 背景として表示
          }}
        />
        <Box
          sx={{
            position: "relative", // テキストを前面に表示
            zIndex: 1, // テキストを前面に表示
            padding: "30px",
            color: "#fff", // テキストの色を白に設定
          }}
        >
          <Typography sx={{ fontSize: "24px" }}>
            シーシャは、水タバコの一種で、香り豊かなフレーバーの煙をゆっくりと吸い込む嗜好品です。
            フルーツやミントなどのフレーバー付きタバコ葉を炭で加熱し、水を通して吸うため、煙がまろやかになるのが特徴です。
            数多くのフレーバーの中からお気に入りを見つけ、ぜひリラックスしたひと時をお過ごしください。
          </Typography>
          <Button
            variant="outlined"
            sx={{ mt: "30px" }}
            onClick={detailPageNaviOnClick}
          >
            Read More→
          </Button>
        </Box>
      </Container>
    </CustomLayout>
  );
});

export default AboutShisha;
