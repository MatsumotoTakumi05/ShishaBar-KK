import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import React, { memo, useState } from "react";

interface Props {
  mt?: number;
  toolFlag?: boolean;
}
const InstagramLink = memo((props: Props) => {
  const { mt = 0, toolFlag = false } = props;
  const [storeElement, setStoreElement] = useState(null);
  const open = Boolean(storeElement);

  const handleClick = (event: any) => {
    setStoreElement(event.currentTarget);
  };

  const handleClose = () => {
    setStoreElement(null);
  };

  const openInstagramProfile = (username: string) => {
    // InstagramアプリのURL
    const appUrl = `instagram://user?username=${username}`;
    // InstagramのWeb URL
    const webUrl = `https://www.instagram.com/${username}/`;

    // モバイル端末ならアプリを試し、失敗したらWebで開く
    window.location.href = appUrl;

    // アプリがない場合にWebにフォールバック
    setTimeout(() => {
      window.open(webUrl, "_blank", "noopener,noreferrer");
    }, 500); // 500ms待機してアプリが開かなければWebへ
  };

  const styles = {
    Img: {
      width: { xs: "20px", md: "40px" },
      height: { xs: "20px", md: "40px" },
      borderRadius: "50%",
      "&:hover": {
        opacity: 0.7,
      },
    },
  };
  return (
    <>
      <Tooltip title={toolFlag ? "Instagramはこちらから" : undefined}>
        <Box
          component="img"
          src="/InstagramIcon.png"
          sx={styles.Img}
          onClick={handleClick}
          mt={mt}
        />
      </Tooltip>
      <Menu
        anchorEl={storeElement}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            // Paperコンポーネントのスタイルを指定
            borderRadius: "12px", // 角を丸くする
            backgroundColor: "rgba(26, 26, 26, 0.8)", // 背景色を白に設定
            color: "#fff",
            width: { xs: "60%", md: "25%" },
            height: { xs: "15%", md: "15%" },
          },
        }}
      >
        <MenuItem
          onClick={() => openInstagramProfile("shishabar_kk")}
          sx={{ fontSize: { xs: "8px", md: "18px" } }}
        >
          @shishabar_kk(湯田店)
        </MenuItem>
        <MenuItem
          onClick={() => openInstagramProfile("shishabar_kk_tokuyama")}
          sx={{ fontSize: { xs: "8px", md: "18px" } }}
        >
          @shishabar_kk_tokuyama(徳山店)
        </MenuItem>
      </Menu>
    </>
  );
});

export default InstagramLink;
