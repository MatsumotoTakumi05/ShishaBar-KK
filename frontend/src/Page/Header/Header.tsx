import { Link, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import React, { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Fade } from "react-swift-reveal";

const Header = memo(() => {
  const navigate = useNavigate()
  // アイコンクリックでhomeに戻る
  const backTopPathOnClick = () => {
    navigate('/KK')
  }
  return (
    <>
      <AppBar sx={{ position: "fixed", backgroundColor: "#000" }}>
        <Fade duration={2000}>
          <Stack spacing={95} direction="row" sx={{ height: "80px" }}>
            <Box>
              <img
                src="./store_icon.jpeg"
                style={{ height: "80px", width: "110px", cursor: "pointer" }}
                onClick={backTopPathOnClick}
              />
            </Box>
            <Box>
              <Stack
                spacing={6}
                direction="row"
                sx={{ marginTop: "35px", fontSize: "18px" }}
              >
                <Link
                  underline="none"
                  color="#ffffff"
                  sx={{ fontFamily: "Academy Engraved LET", cursor: "pointer" }}
                >
                  Home
                </Link>
                <Link
                  underline="none"
                  color="#ffffff"
                  sx={{ fontFamily: "Academy Engraved LET", cursor: "pointer" }}
                >
                  Menu
                </Link>
                <Link
                  underline="none"
                  color="#ffffff"
                  sx={{ fontFamily: "Academy Engraved LET", cursor: "pointer" }}
                >
                  About
                </Link>
                <Link
                  underline="none"
                  color="#ffffff"
                  sx={{ fontFamily: "Academy Engraved LET", cursor: "pointer" }}
                >
                  Store/Access
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Fade>
      </AppBar>
    </>
  );
});

export default Header;
