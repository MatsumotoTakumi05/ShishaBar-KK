import Typography from '@mui/material/Typography'
import React, { memo } from 'react'


interface Props {
    displayText: any
    fontSize?: string
    tittleFlag?: boolean
}
const CustomTypography = memo((props: Props) => {
    const { displayText, fontSize, tittleFlag } = props

    // 1.fontSizeがあるか/2.タイトルか/3.通常
    const defaultFontSize = fontSize ? fontSize : tittleFlag ? "40px" : "20px"
    return (
        <Typography fontSize={defaultFontSize} fontFamily={tittleFlag ? "Academy Engraved LET" : ""} >{displayText}</Typography>
    )
})

export default CustomTypography