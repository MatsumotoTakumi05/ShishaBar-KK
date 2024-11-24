import { Box, Button, Container, Typography } from "@mui/material";
import { Fade } from "react-swift-reveal";
import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../Component/atoms/Button/CustomButton";
import { useGetWindowSize } from "../../Style/useGetWindowSize";

interface Props {
  setPath: React.Dispatch<React.SetStateAction<string>>;
}
const YearConf = memo((props: Props) => {
  const { setPath } = props;

  // 画面サイズ
  const { windowSize } = useGetWindowSize();
  // 画面遷移用Hooks
  const navigate = useNavigate();

  // フェードイン完了後にTypographyを表示するための状態
  const [showText, setShowText] = useState(false);

  const nextBtnOnClick = () => {
    setPath("/KK");
    navigate("/KK");
  };
  // フェード処理が完了した後にTypographyを表示するタイマー
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000); // Fadeのdurationに合わせた時間

    return () => clearTimeout(timer); // コンポーネントがアンマウントされた際にタイマーをクリア
  }, []);

  // レスポンシブデザインの変数
  const styles = {
    OutLine: {
      bgcolor: "#262626",
    },
    Image: {
      height: `${windowSize.height}px`,
      width: `${windowSize.width}px`,
      objectFit: "cover",
    },
  };

  return (
    <>
      <Box sx={styles.OutLine}>
        <Fade duration={6000}>
          <Box
            component="video"
            src="./YearConfVideo.mp4"
            autoPlay // 自動再生を追加（必要に応じて）
            muted // 自動再生を行う場合はミュートを追加
            loop // ループ再生を追加（必要に応じて）
            sx={styles.Image}
          />
        </Fade>
        {showText && (
          <Container
            sx={{
              position: "absolute",
              top: { xs: "30%", md: "25%" },
              zIndex: 15,
              backgroundColor: "rgba(38, 38, 38, 0.5)",
              color: "#fff",
              height: { xs: "35%", md: "40%" },
              width: "60%",
              left: "20%",
              borderRadius: "5%",
            }}
          >
            <Fade>
              <Box
                sx={{
                  display: "flex", // フレックスボックスを使用
                  flexDirection: "column", // 縦方向に配置
                  alignItems: "center", // 水平方向に中央寄せ
                  margin: "0 auto",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    marginTop: "5%",
                    color: "#ffffff",
                    fontSize: { xs: "22px", md: "24px" },
                  }}
                >
                  年齢確認
                </Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    marginTop: 3,
                    fontSize: { xs: "16px", md: "20px" },
                  }}
                >
                  当店ご利用には20歳以上である必要があります。
                  <br />
                  あなたは20歳以上ですか？
                </Typography>
                <Box
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 5,
                    fontSize: { xs: "12px", md: "20px" },
                    width: { xs: "100%", md: "50%" },
                  }}
                >
                  <Box>
                    <CustomButton BtnContent="OK" BtnOnClick={nextBtnOnClick} />
                  </Box>
                  <Box>
                    <CustomButton BtnContent="No" BtnOnClick={nextBtnOnClick} />
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Container>
        )}
      </Box>
    </>
  );
});

export default YearConf;
