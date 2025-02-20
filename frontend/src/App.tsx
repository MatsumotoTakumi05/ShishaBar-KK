import React, { memo, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // BrowserRouterを使用
import Header from "./Page/Header/Header";
import Box from "@mui/material/Box";
import MainContent from "./Page/TopPage/MainContent";
import YearConf from "./Page/YearConf/YearConf";
import { Fade } from "react-swift-reveal";
import DetailShisha from "./Page/DetailShisha/DetailShisha";
import Footer from "./Page/Footer/Footer";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Style/theme";
import MenuPage from "./Page/MenuPage/MenuPage";
import { useGetWindowSize } from "./Style/useGetWindowSize";

const App = memo(() => {
  // ウィンドウサイズ
  const { windowSize } = useGetWindowSize();
  // 現在のパスを保持
  const [path, setPath] = useState("/");
  useEffect(() => {
    const currentPath = window.location.pathname;
    setPath(currentPath);
  }, [path]);

  console.log(windowSize);
  document.title = "KK";
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          {/* ローカルの場合のみ,本番の場合は変更するため環境変数を作成する必要あり */}
          {path === "/" ? (
            <>
              <Box sx={{ bgcolor: "#262626" }}>
                <YearConf setPath={setPath} />
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  height: { xs: "50px", md: "80px" },
                  backgroundColor: "#262626",
                  width: "100%",
                }}
              >
                <Header />
              </Box>
              <Fade duration={1000}>
                <Box
                  sx={{
                    bgcolor: "#262626",
                    color: "#fff",
                  }}
                >
                  <Routes>
                    <Route path="/KK" element={<MainContent />} />
                    <Route path="/KK/AboutShisha" element={<DetailShisha />} />
                    <Route path="/KK/MenuPage/:id" element={<MenuPage />} />
                  </Routes>
                </Box>
              </Fade>
              <Box
                sx={{
                  height: "400px",
                  backgroundColor: "#262626",
                  color: "#fff",
                }}
              >
                <Footer />
              </Box>
            </>
          )}
        </Router>
      </ThemeProvider>
    </>
  );
});

export default App;
