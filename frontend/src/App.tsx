import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // BrowserRouterを使用
import Header from './Page/Header/Header';
import Box from '@mui/material/Box';
import MainContent from './Page/TopPage/MainContent';

const App = memo(() => {
  return (
    <>
      <Box sx={{ height: "80px" }}>
        <Header />
      </Box>
      <Router>
        <Box sx={{ height: "900vh" }}>
          <Routes>
            <Route path="" element={<MainContent />} />
          </Routes>
        </Box>
      </Router>
    </>
  );
});

export default App;