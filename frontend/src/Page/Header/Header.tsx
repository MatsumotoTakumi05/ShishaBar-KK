import { Link, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import React, { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Fade } from "react-swift-reveal";

interface Props {
  xScale: number[],
  yScale: number[]
}
const Header = memo((props: Props) => {
  const { xScale, yScale } = props

  const navigate = useNavigate()

  // Headerのメニューのクリック関数
  const MenuElementOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id
    switch (id) {
      case "Home":
      case "icon":
        window.scrollTo(0, 0);
        navigate('/KK')
        break;
      case "Menu":
        window.scrollTo(0, 0);
        break;
      case "About":
        window.scrollTo(xScale[2], yScale[2]);
        break;
      case "Access":
        window.scrollTo(xScale[3], yScale[3]);
        break
    }
  }
  return (
    <>
      <AppBar sx={{ position: "fixed", backgroundColor: "#000" }}>
        <Fade duration={2000}>
          <Stack spacing={95} direction="row" sx={{ height: "80px" }}>
            <Box>
              <img
                src="./store_icon.jpeg"
                id="icon"
                style={{ height: "80px", width: "110px", cursor: "pointer" }}
                onClick={(e: any) => MenuElementOnClick(e)}

              />
            </Box>
            <Box>
              <Stack
                spacing={6}
                direction="row"
                sx={{ marginTop: "35px", fontSize: "18px" }}
              >
                <Link
                  onClick={(e: any) => MenuElementOnClick(e)}
                  underline="none"
                  color="#ffffff"
                  sx={{ fontFamily: "Academy Engraved LET", cursor: "pointer" }}
                  id="Home"
                >
                  Home
                </Link>
                <Link
                  onClick={(e: any) => MenuElementOnClick(e)}
                  underline="none"
                  color="#ffffff"
                  sx={{ fontFamily: "Academy Engraved LET", cursor: "pointer" }}
                  id="Menu"
                >
                  Menu
                </Link>
                <Link
                  onClick={(e: any) => MenuElementOnClick(e)}
                  underline="none"
                  color="#ffffff"
                  sx={{ fontFamily: "Academy Engraved LET", cursor: "pointer" }}
                  id="About"
                >
                  About
                </Link>
                <Link
                  onClick={(e: any) => MenuElementOnClick(e)}
                  underline="none"
                  color="#ffffff"
                  sx={{ fontFamily: "Academy Engraved LET", cursor: "pointer" }}
                  id="Access"
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
