import { Button } from "@mui/material";
import React, { memo } from "react";
import { theme } from "../../../Style/theme";

interface Props {
  BtnContent: string; // ボタンに表示する文字
  BtnOnClick: () => void;
  customSx?: {};
}

const CustomButton = memo((props: Props) => {
  const { BtnContent, BtnOnClick, customSx } = props;

  const defaultSize = {
    width: { xs: "20px", md: "100px" },
    fontSize: { xs: "12px", md: "20px" },
    color: "#262626",
    ...customSx,
  };
  return (
    <Button
      onClick={BtnOnClick}
      sx={defaultSize}
      variant="contained"
      color="inherit"
      size={theme.breakpoints.down("md") ? "small" : "medium"}
    >
      {BtnContent}
    </Button>
  );
});

export default CustomButton;
