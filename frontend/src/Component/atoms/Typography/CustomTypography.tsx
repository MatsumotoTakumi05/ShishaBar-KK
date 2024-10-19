import Typography from '@mui/material/Typography'
import React, { memo } from 'react'


interface Props {
    displayText: string
    fontSize?: string
}
const CustomTypography = memo((props: Props) => {
    const { displayText, fontSize } = props

    const defaultFontSize = fontSize ? fontSize : "20px"
    return (
        <Typography fontSize={defaultFontSize}>{displayText}</Typography>
    )
})

export default CustomTypography