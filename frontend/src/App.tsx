import React, { memo, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // BrowserRouterを使用
import Header from './Page/Header/Header';
import Box from '@mui/material/Box';
import MainContent from './Page/TopPage/MainContent';
import YearConf from './Page/YearConf/YearConf';
import { Fade } from 'react-swift-reveal';

const App = memo(() => {
  const [path, setPath] = useState("/")
  useEffect(() => {
    const currentPath = window.location.pathname
    setPath(currentPath)
  }, [path])
  return (
    <>
      <Router>
        {/* ローカルの場合のみ,本番の場合は変更するため環境変数を作成する必要あり */}
        {path === "/" ?
          <>
            <Box sx={{ bgcolor: "#000" }}>
              <YearConf setPath={setPath} />
            </Box>
          </>
          :
          <>
            <Fade>
              <Box sx={{ height: "80px" }}>
                <Header />
              </Box>
              <Box sx={{ height: "900vh", bgcolor: "#000" }}>
                <Routes>
                  <Route path="/KK" element={<MainContent />} />
                </Routes>
              </Box>
            </Fade>
          </>
        }
      </Router>
    </>
  );
});

export default App;