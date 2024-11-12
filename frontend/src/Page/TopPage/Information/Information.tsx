import { Box, Container, Link, Typography } from "@mui/material";
import React, { memo, useEffect, useRef, useState } from "react";
import CustomDiaLog from "../../../Component/modules/DiaLog/CustomDiaLog";
import CustomLayout from "../../../Component/modules/Layout/CustomLayout";
import { Height } from "@mui/icons-material";

interface Info {
  date: string;
  text: string;
  DialogTittleText: string;
  DialogDetail: any;
}
const Information = memo(() => {
  // ダイアログの表示を管理
  const [isOpenDiaLog, setIsOpenDiaLog] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<Info | null>(null); // 選択された情報を保存

  const Information: Info[] = [
    {
      date: "2024/10/14",
      text: "HPの公開について",
      DialogTittleText: "お知らせ",
      DialogDetail: (
        <>
          いつもご利用いただきありがとうございます。
          <br />
          このたび、当店の公式ホームページがオープンしました。
          <br />
          ホームページでは、お店の雰囲気やシステム、アクセス情報など、さまざまな内容をお届けしています。これからも、みなさまに楽しんでいただけるよう頑張っていきます。今後ともよろしくお願いいたします。
        </>
      ),
    },
    {
      date: "2024/10/01",
      text: "Instagramのご紹介",
      DialogTittleText: "お知らせ",
      DialogDetail: (
        <>
          いつもご利用いただきありがとうございます。
          <br />
          当店のInstagramアカウントのご紹介です。
          <br />
          Instagramではお店のリアルタイムの情報や、キャンペーンのお知らせを行います。
          ぜひフォローをお願いします。
          <br />
          <Link
            href="https://www.instagram.com/shishabar_kk/"
            target="_blank"
            rel="noopener"
            sx={{ color: "blue" }}
          >
            Instagramはこちら
          </Link>
        </>
      ),
    },
  ];

  // ダイアログを閉じる処理
  const onClose = () => {
    setIsOpenDiaLog(false);
    setSelectedInfo(null); // 選択された情報をクリア
  };

  // リンクをクリックしてダイアログを開く処理
  const onOpen = (info: Info) => {
    setSelectedInfo(info); // クリックされた情報を保存
    setIsOpenDiaLog(true); // ダイアログを表示
  };

  return (
    <CustomLayout
      backgroundBorder={[{ height: "450px" }]}
      tittleText="Information"
      id="info"
    >
      <Container
        sx={{
          zIndex: 1,
          backgroundColor: "rgb(110, 110, 110, 0.4)",
          color: "#fff",
          maxHeight: "300px",
          minHeight: "300px",
          overflowY: "scroll",
          width: { md: "60%", xs: "80%" },
          left: { md: "20%" },
          borderRadius: "2%",
          paddingTop: "10px",
        }}
      >
        <Box maxWidth="md">
          {Information.map((info: Info) => (
            <Box
              sx={{
                display: { md: "flex" },
                margin: "50px 0",
                borderBottom: "dotted 0.5px #fff",
                fontFamily: "Shippori Mincho B1",
              }}
              key={info.text}
              onClick={() => onOpen(info)}
            >
              <Box sx={{ justifyContent: "flex-start" }}>
                <Typography>{info.date}</Typography>
              </Box>
              <Box sx={{ marginLeft: { md: "200px", xs: "10%" } }}>
                <Link
                  sx={{
                    "&:hover": { opacity: "0.8" },
                    cursor: "pointer",
                    color: "#fff",
                    fontSize: "20px",
                  }}
                  underline="none"
                >
                  {info.text}
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
      {/* ダイアログの内容を表示 */}
      {selectedInfo && (
        <CustomDiaLog
          open={isOpenDiaLog}
          onClose={onClose}
          DialogTittleText={selectedInfo.DialogTittleText}
          DialogDetail={selectedInfo.DialogDetail}
        />
      )}
    </CustomLayout>
  );
});

export default Information;
