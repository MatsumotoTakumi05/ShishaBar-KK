import React, { memo, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Tabs } from "@mui/material";
import DrinkPage from "./DrinkPage/DrinkPage";
import SnackPage from "./SnackPage/SnackPage";
import BasicSystem from "./ShishaPage/BasicSystem";
import FlavorPage from "./ShishaPage/FlavorPage";
import { useParams } from "react-router-dom";

const MenuPage = memo(() => {
  const { id } = useParams();
  const [value, setValue] = React.useState(id);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    window.scroll(0, 0);
    setValue(id);
  }, [id]);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          position: "fixed",
          bgcolor: "#262626",
          zIndex: "10",
        }}
      >
        <Tabs
          textColor="inherit"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Basic" value="1" />
          <Tab label="Flavor" value="2" />
          <Tab label="Drink" value="3" />
          <Tab label="Snack" value="4" />
        </Tabs>
      </Box>
      <Box>
        {value === "1" && <BasicSystem />}
        {value === "2" && <FlavorPage />}
        {value === "3" && <DrinkPage />}
        {value === "4" && <SnackPage />}
      </Box>
    </>
  );
});

export default MenuPage;
