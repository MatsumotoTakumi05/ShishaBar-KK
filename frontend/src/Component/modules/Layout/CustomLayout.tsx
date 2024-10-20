import { Box } from '@mui/material'
import React, { memo } from 'react'
import CustomTypography from '../../atoms/Typography/CustomTypography'

interface Props {
    tittleText: any                            // ヘッダーに表示するタイトル名
    headerBorder?: { [key: string]: string }[] // ヘッダーのBoxに指定するsxの値（デフォルトでpadding:50pxを指定）
    children: any                              // メインの表示内容
}

const CustomLayout = memo((props: Props) => {
    const { tittleText, headerBorder, children } = props

    /**
     * タグ別の高さ指定関数
     * @param id ユニークkey
     * @returns 
     */
    const customHeight = (id: string) => {
        let val = "auto"
        switch (id) {
            case "border":
                val = "700px"
                break;
            case "headerBorder":
                val = "20px"
                break;
            case "mainBorder":
                val = "680px"
                break;
            default:
                val = "auto"
        }
        return val
    }

    // `headerBorder` が配列なので、オブジェクトとしてマージ
    const headerBorderStyle = {
        padding: "50px",
        ...(headerBorder ? headerBorder.reduce((acc, curr) => ({ ...acc, ...curr }), {}) : {})
    }


    return (
        <Box height={customHeight("border")}>
            <Box sx={headerBorderStyle} height={customHeight("headerBorder")}>
                <CustomTypography displayText={tittleText} tittleFlag />
            </Box>
            <Box height={customHeight("mainBorder")} >
                {/* 他のコンテンツ */}
                {children}
            </Box>
        </Box>
    )
})

export default CustomLayout
