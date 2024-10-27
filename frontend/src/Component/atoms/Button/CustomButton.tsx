import { Button } from '@mui/material'
import React, { memo } from 'react'
import { theme } from '../../../Style/theme'


interface Props {
    BtnContent: string // ボタンに表示する文字
    BtnOnClick: () => void
}

const CustomButton = memo((props: Props) => {
    const { BtnContent, BtnOnClick } = props

    const lg = theme.breakpoints.values.lg
    const xs = theme.breakpoints.values.xs

    const defaultSize = {
        width: xs ? "90px" : "100px",
        color: "#262626"
    }
    return (
        <Button onClick={BtnOnClick} sx={defaultSize} variant="contained" color="inherit">
            {BtnContent}
        </Button>
    )
})

export default CustomButton