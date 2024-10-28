import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { memo } from "react";
import { useTheme } from "@mui/material/styles";
import CustomLayout from "../../../Component/modules/Layout/CustomLayout";
import { useNavigate } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";

// 共通のスタイル変数を定義
const styles = {
  pageWrapper: {
    width: "100vw",
    zIndex: 12,
  },
  menuCard: {
    width: { xs: "90%", sm: "60%", md: "40%" },
    padding: "20px",
    borderRadius: "8px",
    margin: "0 auto",
    textAlign: "center",
    height: { xs: "30%", sm: "30%", md: "30%" },
  },
  cardTitleStyle: {
    fontFamily: "Academy Engraved LET",
    fontSize: {
      xs: "1.2rem", // スマホ向け
      sm: "1.5rem", // タブレット向け
      md: "3rem", // PC向け
    },
  },
  cardBodyStyle: {
    color: "text.secondary",
    fontFamily: "Shippori Mincho B1",
    fontSize: {
      xs: "0.8rem", // スマホ向け
      sm: "1rem", // タブレット向け
      md: "1.5rem", // PC向け
    },
  },
  cardImageStyle: {
    height: {
      xs: 200, // スマホ向けの高さ
      sm: 200, // タブレット向けの高さ
      md: 200, // PC向けの高さ
    },
    width: {
      xs: "100%", // スマホ向けの幅（カードに合わせる）
      sm: 450, // タブレット向けの幅
      md: 450, // PC向けの幅
    },
  },
};

const Menu = memo(() => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // スマホ向けのブレークポイント

  const navigate = useNavigate();
  const handleCardClick = (url: string) => {
    navigate(url);
  };

  return (
    <>
      <Box height="800px" sx={styles.pageWrapper}>
        <CustomLayout tittleText={"Menu"} id="menu">
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            spacing={4}
            // height="80%"
            width="80%"
            borderRadius="2%"
            margin="0 auto"
            sx={{
              padding: "20px",
              flexDirection: isSmallScreen ? "column" : "row",
            }}
          >
            {/* Shisha Card */}
            <Card sx={{ maxWidth: 500, margin: 10 }}>
              <CardActionArea onClick={() => handleCardClick("./ShishaPage")}>
                <CardMedia
                  component="img"
                  sx={styles.cardImageStyle} // 画像のサイズを指定
                  image="/Shisha.jpeg"
                  alt="Shisha"
                />
                <CardContent sx={styles.menuCard}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={styles.cardTitleStyle}
                  >
                    Shisha
                  </Typography>
                  <Typography variant="body2" sx={styles.cardBodyStyle}>
                    基本料金
                    <br />
                    フレーバー
                    <br />
                    etc...
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            {/* Drink Card */}
            <Card sx={{ maxWidth: 500, margin: 10 }}>
              <CardActionArea onClick={() => handleCardClick("#")}>
                <CardMedia
                  component="img"
                  sx={styles.cardImageStyle} // 画像のサイズを指定
                  image="/Drink.jpeg"
                  alt="#"
                />
                <CardContent sx={styles.menuCard}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={styles.cardTitleStyle}
                  >
                    Drink
                  </Typography>
                  <Typography variant="body2" sx={styles.cardBodyStyle}>
                    ハイボール
                    <br />
                    カクテル
                    <br />
                    etc...
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            {/* Snack Card */}
            <Card sx={{ maxWidth: 500, margin: 10 }}>
              <CardActionArea onClick={() => handleCardClick("#")}>
                <CardMedia
                  component="img"
                  sx={styles.cardImageStyle} // 画像のサイズを指定
                  image="/Snack.jpeg"
                  alt="#"
                />
                <CardContent sx={styles.menuCard}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={styles.cardTitleStyle}
                  >
                    Snack
                  </Typography>
                  <Typography variant="body2" sx={styles.cardBodyStyle}>
                    スナック
                    <br />
                    ナッツ
                    <br />
                    etc...
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </CustomLayout>
      </Box>
    </>
  );
});

export default Menu;
