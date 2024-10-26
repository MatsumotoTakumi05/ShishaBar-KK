import { Box } from "@mui/material";
import React, { memo } from "react";
import CustomTypography from "../../atoms/Typography/CustomTypography";

interface Props {
  tittleText: string; // タイトルテキストの型をstringに変更
  backgroundBorder?: { [key: string]: string }[]; // 外側のBoxに指定するsxの値
  headerBorder?: { [key: string]: string }[]; // ヘッダーのBoxに指定するsxの値
  children: React.ReactNode; // childrenの型をReact.ReactNodeに変更
  id?: string;
}

const CustomLayout = memo(
  React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { tittleText, backgroundBorder, headerBorder, children, id } = props;

    /**
     * タグ別の高さ指定関数
     * @param id ユニークkey
     * @returns
     */
    const customHeight = (id: string) => {
      switch (id) {
        case "border":
          return "700px";
        case "headerBorder":
          return "20px";
        case "mainBorder":
          return "680px";
        default:
          break;
      }
    };

    // headerBorder が配列なので、オブジェクトとしてマージ
    const headerBorderStyle = {
      padding: "80px 60px",
      ...(headerBorder ? Object.assign({}, ...headerBorder) : {}), // 配列をオブジェクトにマージ
    };

    // backgroundBorderが配列なので、オブジェクトに変換
    const backgroundImageStyle = {
      ...(backgroundBorder ? Object.assign({}, ...backgroundBorder) : {}), // 配列をオブジェクトにマージ
    };

    return (
      <Box id={id} height={customHeight("border")} sx={backgroundImageStyle}>
        <Box sx={headerBorderStyle} height={customHeight("headerBorder")}>
          <CustomTypography displayText={tittleText} tittleFlag />
        </Box>
        <Box height={customHeight("mainBorder")}>{children}</Box>
      </Box>
    );
  })
);

export default CustomLayout;
