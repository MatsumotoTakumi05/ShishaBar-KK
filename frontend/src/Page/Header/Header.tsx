import {
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-swift-reveal";
import InstagramLink from "../../Component/modules/InstagramLink/InstagramLink";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { theme } from "../../Style/theme";
import { useGetWindowSize } from "../../Style/useGetWindowSize";

const Header = memo(() => {
  const { windowSize } = useGetWindowSize();
  const navigate = useNavigate();

  const StartPathOnClick = () => {
    window.scroll(0, 0);
    navigate("/KK");
  };

  const backURLOnClick = () => {
    navigate("/KK");
  };

  const styles = {
    OutLine: {
      position: "fixed",
      bgcolor: "#000",
      width: "100%",
    },
    OutHeight: {
      height: { xs: "60px", md: "80px" },
    },
    Image: {
      height: "100%",
      width: { xs: "60px", md: "110px" },
      cursor: "pointer",
    },
    LinkOutLine: {
      mt: { xs: "25px", md: "35px" },
      fontSize: { xs: "16px", md: "20px" },
      width: "100%",
    },
  };

  const IconSpacing =
    theme.breakpoints.values.sm > windowSize.width
      ? 3
      : theme.breakpoints.values.sm < windowSize.width &&
        theme.breakpoints.values.md > windowSize.width
      ? 50
      : theme.breakpoints.values.md < windowSize.width
      ? 35
      : 0;
  const LinkSpacing = theme.breakpoints.values.md > windowSize.width ? 2 : 6;
  const iconMargin =
    theme.breakpoints.values.md > windowSize.width ? -0.8 : -1.5;

  // Drawerの開閉を管理
  const [drawerOpen, setDrawerOpen] = useState(false);
  // メニューが細分化する場合に開閉を保持

  // Drawerのイベントハンドラー
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <AppBar sx={styles.OutLine}>
        <Fade duration={2000}>
          <Stack direction="row" sx={styles.OutHeight}>
            <Box sx={{ pt: 1 }}>
              <IconButton onClick={handleDrawerToggle} sx={{ color: "silver" }}>
                <MenuIcon />
              </IconButton>

              {/* Drawer */}
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "#262626",
                    height: "100%",
                    color: "#fff",
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <IconButton
                      onClick={handleDrawerToggle}
                      sx={{ color: "silver" }}
                    >
                      <MenuIcon />
                    </IconButton>
                  }
                >
                  <ListItem disablePadding>
                    <ListItemButton onClick={StartPathOnClick}>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </ListItem>
                  <Divider sx={{ bgcolor: "#fff" }} />
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Menu" />
                    </ListItemButton>
                  </ListItem>
                  <Divider sx={{ bgcolor: "#fff" }} />
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="about" />
                    </ListItemButton>
                  </ListItem>
                  <Divider sx={{ bgcolor: "#fff" }} />
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Store/Access" />
                    </ListItemButton>
                  </ListItem>{" "}
                  <Divider sx={{ bgcolor: "#fff" }} />
                </List>
              </Drawer>
            </Box>
            <Box
              sx={{
                "&:hover": {
                  opacity: 0.5, // hover時の不透明度
                },
              }}
            >
              <Box
                component="img"
                src="/store_icon.jpeg"
                onClick={StartPathOnClick}
                sx={styles.Image}
              />
            </Box>
            <Box>
              {/* <Stack
                spacing={LinkSpacing}
                direction="row"
                sx={styles.LinkOutLine}
              >
                <Link
                  underline="none"
                  color="#ffffff"
                  sx={{
                    "&:hover": {
                      opacity: 0.5,
                    },
                    fontFamily: "Academy Engraved LET",
                    cursor: "pointer",
                  }}
                  onClick={StartPathOnClick}
                >
                  Home
                </Link>
                <Link
                  underline="none"
                  color="#ffffff"
                  sx={{
                    "&:hover": {
                      opacity: 0.5,
                    },
                    fontFamily: "Academy Engraved LET",
                    cursor: "pointer",
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
                    "&:hover": {
                      opacity: 0.5,
                    },
                    fontFamily: "Academy Engraved LET",
                    cursor: "pointer",
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
                    "&:hover": {
                      opacity: 0.5,
                    },
                    fontFamily: "Academy Engraved LET",
                    cursor: "pointer",
                  }}
                  href="#access"
                  onClick={backURLOnClick}
                >
                  Store/Access
                </Link>
                <Box>
                  <InstagramLink mt={iconMargin} toolFlag />
                </Box>
              </Stack> */}
            </Box>
          </Stack>
        </Fade>
      </AppBar>
    </>
  );
});

export default Header;
