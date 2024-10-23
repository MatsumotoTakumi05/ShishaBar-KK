import { Link, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import React, { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Fade } from "react-swift-reveal";
import InstagramLink from "../../Component/modules/InstagramLink/InstagramLink";


const Header = memo(() => {

  const navigate = useNavigate()

  const StartPathOnClick = () => {
    window.scroll(0, 0)
    navigate('/KK')
  }

  const backURLOnClick = () => {
    navigate("/KK")
  }

  return (
    <>
      <AppBar sx={{ position: "fixed", backgroundColor: "#000" }}>
        <Fade duration={2000}>
          <Stack spacing={80} direction="row" sx={{ height: "80px" }}>
            <Box sx={{
              '&:hover': {
                opacity: 0.5, // hover時の不透明度
              },
            }}>
              <img
                src="./store_icon.jpeg"
                style={{ height: "80px", width: "110px", cursor: "pointer", }}
                onClick={StartPathOnClick}
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
                  sx={{
                    '&:hover': {
                      opacity: 0.5,
                    }, fontFamily: "Academy Engraved LET", cursor: "pointer"
                  }}
                  onClick={StartPathOnClick}
                >
                  Home
                </Link>
                <Link
                  underline="none"
                  color="#ffffff"
                  sx={{
                    '&:hover': {
                      opacity: 0.5,
                    }, fontFamily: "Academy Engraved LET", cursor: "pointer"
                  }}
                  onClick={backURLOnClick}
                  href="#menu"
                >
                  Menu
                </Link>
                <Link
                  underline="none"
                  color="#ffffff"
                  sx={{
                    '&:hover': {
                      opacity: 0.5,
                    }, fontFamily: "Academy Engraved LET", cursor: "pointer"
                  }}
                  href="#about"
                  onClick={backURLOnClick}
                >
                  About
                </Link>
                <Link
                  underline="none"
                  color="#ffffff"
                  sx={{
                    '&:hover': {
                      opacity: 0.5,
                    }, fontFamily: "Academy Engraved LET", cursor: "pointer"
                  }}
                  href="#access"
                  onClick={backURLOnClick}
                >
                  Store/Access
                </Link>
                <Box>
                  <InstagramLink mt={-1.5} toolFlag />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Fade>
      </AppBar >
    </>
  );
});

export default Header;
