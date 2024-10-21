import { Box } from '@mui/material';
import React, { memo } from 'react';
import CustomTypography from '../../atoms/Typography/CustomTypography';

interface Props {
    tittleText: string; // タイトルテキストの型をstringに変更
    backgroundBorder?: { [key: string]: string }[]; // 外側のBoxに指定するsxの値
    headerBorder?: { [key: string]: string }[]; // ヘッダーのBoxに指定するsxの値
    children: React.ReactNode; // childrenの型をReact.ReactNodeに変更
    ref?: React.Ref<HTMLDivElement>; // refの型を明示化
}

const CustomLayout = memo(React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { tittleText, backgroundBorder, headerBorder, children } = props;

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
                return "auto";
        }
    };

    // headerBorder が配列なので、オブジェクトとしてマージ
    const headerBorderStyle = {
        padding: "50px",
        ...(headerBorder ? Object.assign({}, ...headerBorder) : {}) // 配列をオブジェクトにマージ
    };

    // backgroundBorderが配列なので、オブジェクトに変換
    const backgroundImageStyle = {
        ...(backgroundBorder ? Object.assign({}, ...backgroundBorder) : {}) // 配列をオブジェクトにマージ
    };

    return (
        <Box height={customHeight("border")} sx={backgroundImageStyle} ref={ref}>
            <Box sx={headerBorderStyle} height={customHeight("headerBorder")}>
                <CustomTypography displayText={tittleText} tittleFlag />
            </Box>
            <Box height={customHeight("mainBorder")}>
                {children}
            </Box>
        </Box>
    );
}));

export default CustomLayout;
