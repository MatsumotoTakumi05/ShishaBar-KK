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
import DrinkPage from "../../MenuPage/DrinkPage/DrinkPage";
import ShishaPage from "../../MenuPage/ShishaPage/ShishaPage";

// 共通のスタイル変数を定義
const styles = {
  pageWrapper: {
    width: "100vw",
    zIndex: 12,
  },
  menuCard: {
    borderRadius: "2%",
    textAlign: "left",
    height: { xs: "100px", md: "120px" },
  },
  cardTitleStyle: {
    fontFamily: "Academy Engraved LET",
    fontSize: {
      xs: "26px", // スマホ向け
      md: "32px", // PC向け
    },
  },
  cardBodyStyle: {
    color: "text.secondary",
    fontFamily: "Shippori Mincho B1",
    fontSize: {
      xs: "14px", // スマホ向け
      md: "16px", // PC向け
    },
  },
  cardImageContent: {
    maxWidth: "320px",
    height: { xs: "190px", md: "240px" },
  },
  cardImageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

const Menu = memo(() => {
  const theme = useTheme();

  const navigate = useNavigate();
  const handleCardClick = (id: number) => {
    navigate(`./MenuPage/${id}`);
  };

  return (
    <>
      <Box height={{ xs: "1450px", md: "800px" }} sx={styles.pageWrapper}>
        <CustomLayout tittleText={"Menu"} id="menu">
          <Stack
            direction={{ md: "row", xs: "column" }}
            justifyContent="space-evenly"
            alignItems="flex-start"
            spacing={{ md: 4 }}
            height={{ xs: "1200px", md: "80%" }}
            borderRadius="2%"
            sx={{
              paddingLeft: { xs: "10%", md: "5%" },
            }}
          >
            {/* Shisha Card */}
            <Card sx={{ width: { md: "320px" } }}>
              <CardActionArea onClick={() => handleCardClick(1)}>
                <Box sx={styles.cardImageContent}>
                  <CardMedia
                    component="img"
                    sx={styles.cardImageStyle} // 画像のサイズを指定
                    image="/ShishaCard.jpg"
                    alt="Shisha"
                  />
                </Box>
                <CardContent sx={styles.menuCard}>
                  <Typography sx={styles.cardTitleStyle}>Shisha</Typography>
                  <Typography sx={styles.cardBodyStyle}>
                    基本料金について
                    <br />
                    厳選したフレーバーをご用意
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            {/* Drink Card */}
            <Card sx={{ width: { md: "320px" } }}>
              <CardActionArea onClick={() => handleCardClick(3)}>
                <Box sx={styles.cardImageContent}>
                  <CardMedia
                    component="img"
                    sx={styles.cardImageStyle} // 画像のサイズを指定
                    image="/DrinkCard.jpg"
                    alt="./ShishaPage"
                  />
                </Box>
                <CardContent sx={styles.menuCard}>
                  <Typography sx={styles.cardTitleStyle}>Drink</Typography>
                  <Typography sx={styles.cardBodyStyle}>
                    約60種のメニューで乾杯
                    <br />
                    カクテル、シャンパン、ハイボール...
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            {/* Snack Card */}
            <Card sx={{ width: { md: "320px" } }}>
              <CardActionArea onClick={() => handleCardClick(4)}>
                <Box sx={styles.cardImageContent}>
                  <CardMedia
                    component="img"
                    sx={styles.cardImageStyle} // 画像のサイズを指定
                    image="/SnackCard.jpg"
                    alt="./ShishaPage"
                  />
                </Box>
                <CardContent sx={styles.menuCard}>
                  <Typography sx={styles.cardTitleStyle}>Snack</Typography>
                  <Typography sx={styles.cardBodyStyle}>
                    シンプルなラインナップながらも
                    <br />
                    お酒にピッタリなメニューをご用意。
                    <br />
                    ナッツ、ポテトフライ...
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
