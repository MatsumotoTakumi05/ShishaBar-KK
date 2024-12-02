import { Box, Link, Stack } from "@mui/material";
import React, { memo } from "react";
import CustomTypography from "../../Component/atoms/Typography/CustomTypography";
import InstagramLink from "../../Component/modules/InstagramLink/InstagramLink";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Style/theme";
import { useGetWindowSize } from "../../Style/useGetWindowSize";

const Footer = memo(() => {
  const defaultPath = "/KK";
  const { windowSize } = useGetWindowSize();
  // リンクを生成する関数
  const linkPage = (hash: string) => {
    const currentPath = window.location.pathname;

    // デフォルトのパスかハッシュの前の部分と一致する場合
    if (currentPath === defaultPath || currentPath === hash.split("#")[0]) {
      return `${currentPath}${hash}`; // 現在のパスにハッシュを追加
    } else {
      return `${defaultPath}${hash}`; // デフォルトパスにハッシュを追加
    }
  };
  const navigate = useNavigate();
  const handleCardClick = (id: number) => {
    navigate(`/KK/MenuPage/${id}`);
  };

  // レスポンシブデザインの対応
  const spacing = windowSize.width > theme.breakpoints.values.md ? 25 : 2;

  return (
    <>
      <Box>
        <Box
          sx={{
            borderTop: "solid 3px #000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          pt={5}
          onClick={() => navigate("/KK")}
        >
          <Box mr={1}>
            <CustomTypography
              displayText={"ShishaBar"}
              tittleFlag
              fontSize="20px"
            />
          </Box>
          <Box>
            <CustomTypography displayText={`KK`} tittleFlag />
          </Box>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{ margin: "0 auto", justifyContent: "center" }}
        >
          <InstagramLink />
        </Stack>
        <Stack
          direction="row"
          spacing={spacing}
          sx={{ justifyContent: "center" }}
          mt={4}
        >
          <Box>
            <CustomTypography
              displayText={"Information"}
              tittleFlag
              fontSize="25px"
            />
            <Box sx={{ mt: 2 }}>
              <Link
                sx={{ fontFamily: "Shippori Mincho B1" }}
                color="#fff"
                href={linkPage("#info")}
              >
                Information
              </Link>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Link
                sx={{ fontFamily: "Shippori Mincho B1" }}
                color="#fff"
                href={linkPage("#about")}
              >
                About
              </Link>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Link
                sx={{ fontFamily: "Shippori Mincho B1" }}
                color="#fff"
                href={linkPage("/AboutShisha#detail")}
              >
                Detail
              </Link>
            </Box>
          </Box>
          <Box>
            <CustomTypography displayText={"Menu"} tittleFlag fontSize="25px" />
            <Box sx={{ mt: 2 }}>
              <Link
                sx={{ fontFamily: "Shippori Mincho B1" }}
                color="#fff"
                onClick={() => handleCardClick(1)}
              >
                Shisha Menu
              </Link>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Link
                sx={{ fontFamily: "Shippori Mincho B1" }}
                color="#fff"
                onClick={() => handleCardClick(3)}
              >
                Drink Menu
              </Link>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Link
                sx={{ fontFamily: "Shippori Mincho B1" }}
                color="#fff"
                onClick={() => handleCardClick(4)}
              >
                Food Menu
              </Link>
            </Box>
          </Box>
          <Box>
            <CustomTypography
              displayText={"StoreInfo"}
              tittleFlag
              fontSize="25px"
            />
            <Box sx={{ mt: 2 }}>
              <Link
                sx={{ fontFamily: "Shippori Mincho B1" }}
                color="#fff"
                href={linkPage("#access")}
              >
                Store/Access
              </Link>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
});

export default Footer;
