import React, { memo, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // BrowserRouterを使用
import Header from "./Page/Header/Header";
import Box from "@mui/material/Box";
import MainContent from "./Page/TopPage/MainContent";
import YearConf from "./Page/YearConf/YearConf";
import { Fade } from "react-swift-reveal";
import DetailShisha from "./Page/DetailShisha/DetailShisha";

const App = memo(() => {
  const [path, setPath] = useState("/");
  useEffect(() => {
    const currentPath = window.location.pathname;
    setPath(currentPath);
  }, [path]);
  return (
    <>
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
            <Box sx={{ height: "80px", backgroundColor: "#262626" }}>
              <Header />
            </Box>
            <Fade duration={1000}>
              <Box sx={{ height: "100%", bgcolor: "#262626", color: "#fff" }}>
                <Routes>
                  <Route path="/KK" element={<MainContent />} />
                  <Route path="/KK/AboutShisha" element={<DetailShisha />} />
                </Routes>
              </Box>
            </Fade>
          </>
        )}
      </Router>
    </>
  );
});

export default App;
