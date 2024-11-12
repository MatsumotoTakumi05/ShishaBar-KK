import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { memo } from "react";
import CustomButton from "../../atoms/Button/CustomButton";
import { useGetWindowSize } from "../../../Style/useGetWindowSize";

interface Props {
  onClose: () => void; // ダイアログを閉じる処理
  open: boolean; // ダイアログの開閉状態
  DialogTittleText: string; // ダイアログのタイトル
  DialogDetail: string; // ダイアログに表示する内容
}

const CustomDiaLog = memo((props: Props) => {
  const { onClose, open, DialogTittleText, DialogDetail } = props;
  const { windowSize } = useGetWindowSize();
  return (
    <Dialog
      onClose={onClose}
      open={open}
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          ml: { xs: "-50px", md: "0" }, // 左マージンを調整
          height: windowSize.height, // 高さをレスポンシブに設定
          maxHeight: windowSize.height, // 最大の高さを設定
          width: { xs: "70%", sm: "80%", md: "60%" }, // 幅をレスポンシブに設定
          fontFamily: "Shippori Mincho B1",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { xs: "10%", sm: "20%", md: "20%" }, // 高さをレスポンシブに設定
          backgroundColor: "#dedede",
        }}
      >
        <DialogTitle>{DialogTittleText}</DialogTitle>
      </Box>
      <DialogContent sx={{ whiteSpace: "pre-line", height: "80%" }}>
        <DialogContentText>{DialogDetail}</DialogContentText>
      </DialogContent>
      <Box sx={{ margin: "0 auto", mb: 1 }}>
        <CustomButton BtnContent="閉じる" BtnOnClick={onClose} />
      </Box>
    </Dialog>
  );
});

export default CustomDiaLog;
