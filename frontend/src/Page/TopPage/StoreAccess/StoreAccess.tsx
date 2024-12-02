import { Link, Stack, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { memo, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { Height } from "@mui/icons-material";

const styles = {
  pageWrapper: {
    backgroundImage: `url('Access_BgImage.png')`,
    backgroundSize: { xs: "100% 70%", md: "100% 100%" },
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "absolute",
  },
  headerBox: {
    height: "20px",
    padding: "80px 60px",
  },
  headerText: {
    fontFamily: "Academy Engraved LET",
    fontSize: { xs: "32px", md: "40px" },
  },
  storeBox: {
    width: "100%",
    padding: "20px",
    borderRadius: "8px",
    "& > div": {
      marginBottom: { xs: "20px", md: "30px" },
    },
  },
  storeTitle: {
    fontWeight: "bold",
    marginBottom: "16px",
    fontSize: { xs: "20px", sm: "24px", md: "38px" },
    fontFamily: "Shippori Mincho B1",
  },
  storeDetailText: {
    fontWeight: "bold",
    fontSize: { xs: "14px", sm: "16px", md: "28px" },
    fontFamily: "Shippori Mincho B1",
    lineHeight: { xs: 1.8, md: 2 },
  },
  storeContentText: {
    fontSize: { xs: "14px", sm: "16px", md: "28px" },
    fontFamily: "Shippori Mincho B1",
    lineHeight: { xs: 1.8, md: 2 },
  },
};

const StoreAccess = memo(() => {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Box sx={styles.headerBox} id="access">
          <Typography sx={styles.headerText}>ACCESS／STORE</Typography>
        </Box>

        <Box
          width="80%"
          sx={{
            borderRadius: "2%",
            margin: "0 auto",
            backgroundColor: "rgba(110, 110, 110, 0.4)",
            padding: "0 20px",
          }}
        >
          <Box sx={styles.pageWrapper}>
            <Box sx={styles.storeBox}>
              <Typography sx={styles.storeTitle}>湯田店</Typography>
              <Box sx={{ display: "flex" }}>
                <Typography sx={styles.storeDetailText}>住所：</Typography>
                <Typography sx={styles.storeContentText}>
                  <Link
                    href="https://maps.app.goo.gl/5KeYMFDBV4qLj6Dy5"
                    target="_blank"
                    rel="noopener"
                    color={"#fff"}
                  >
                    〒753−0056 <br />
                    山口県山口市湯田温泉１丁目７−２２
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={styles.storeDetailText}>TEL：</Typography>
                <Typography sx={styles.storeContentText}>
                  <Link href="tel:08056100408" color={"#fff"}>
                    080-5610-0408
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={styles.storeDetailText}>営業時間：</Typography>
                <Typography sx={styles.storeContentText}>
                  21:00 〜 26:00
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={styles.storeDetailText}>定休日：</Typography>
                <Typography sx={styles.storeContentText}>木曜日</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={styles.storeDetailText}>席数：</Typography>
                <Typography sx={styles.storeContentText}>20席</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={styles.storeDetailText}>決済：</Typography>
                <Typography sx={styles.storeContentText}>クレカ/</Typography>
                <Typography sx={styles.storeContentText}>
                  QRコード決済/
                </Typography>
                <Typography sx={styles.storeContentText}>現金</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          width="80%"
          sx={{
            borderRadius: "2%",
            margin: "0 auto",
            backgroundColor: "rgba(110, 110, 110, 0.4)",
            padding: "0 20px",
          }}
        >
          {/* 徳山店 */}
          <Box sx={styles.pageWrapper} mt={5}>
            <Box sx={styles.storeBox}>
              <Typography sx={styles.storeTitle}>徳山店</Typography>
              <Box sx={{ display: "flex" }}>
                <Typography sx={styles.storeDetailText}>住所：</Typography>
                <Typography sx={styles.storeContentText}>
                  <Link
                    href="https://maps.app.goo.gl/yc39m7XBcnN9yoco7"
                    target="_blank"
                    rel="noopener"
                    color={"#fff"}
                  >
                    〒745−0014 <br />
                    山口県周南市飯島町２丁目１６
                    <br />
                    セウズール２−１
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={styles.storeDetailText}>TEL：</Typography>
                <Typography sx={styles.storeContentText}>
                  <Link href="tel:08056100408" color={"#fff"}>
                    080-8243-7202
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={styles.storeDetailText}>営業時間：</Typography>
                <Typography sx={styles.storeContentText}>
                  21:00 〜 26:00
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={styles.storeDetailText}>定休日：</Typography>
                <Typography sx={styles.storeContentText}>木曜日</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={styles.storeDetailText}>席数：</Typography>
                <Typography sx={styles.storeContentText}>35席</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={styles.storeDetailText}>決済：</Typography>
                <Typography sx={styles.storeContentText}>クレカ/</Typography>
                <Typography sx={styles.storeContentText}>
                  QRコード決済/
                </Typography>
                <Typography sx={styles.storeContentText}>現金</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
});

export default StoreAccess;
