import { Box, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { Children, memo } from 'react'
import { theme } from '../../../Style/theme';
import CustomButton from '../../atoms/Button/CustomButton';

// TODO レスポンシブデザイン

interface Props {
    onClose: () => void;     // ダイアログを閉じる処理
    open: boolean,           // ダイアログの開閉状態
    DialogTittleText: string, // ダイアログのタイトル
    DialogDetail: string,     // ダイアログに表示する内容
}
const CustomDiaLog = memo((props: Props) => {
    const { onClose, open, DialogTittleText, DialogDetail } = props

    // レスポンシティティブデザイン
    const lg = theme.breakpoints.values.lg
    const xs = theme.breakpoints.values.xs

    return (

        <Dialog onClose={onClose} open={open} fullWidth sx={{
            '& .MuiDialog-paper': {
                height: xs ? '300px' : '600px',
                maxHeight: '80vh', // 最大の高さをビューの80%に制限
                width: lg ? "600px" : "300px"
            }
        }} >
            <Box sx={{ width: "100%", height: "20%", backgroundColor: "#dedede" }}>
                <DialogTitle>{DialogTittleText}</DialogTitle>
            </Box>
            <DialogContent sx={{ whiteSpace: 'pre-line' }}>
                <DialogContentText>
                    {DialogDetail}
                </DialogContentText>
            </DialogContent>
            <Box sx={{ margin: "0 auto", mb: 1 }}>
                <CustomButton BtnContent='閉じる' BtnOnClick={onClose} />
            </Box>
        </Dialog >
    )
})

export default CustomDiaLog