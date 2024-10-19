import { Box, Typography } from '@mui/material'
import React, { memo } from 'react'
import CustomTypography from '../../Component/atoms/Typography/CustomTypography'

const ShishaAbout = memo(() => {
    const explanShisha = " シーシャは、水タバコの一種で、香り豊かなフレーバーの煙をゆったりと楽しめる嗜好品です。<br />フルーツやミントなどのフレーバー付きタバコ葉を炭で加熱し、水を通して煙を吸うため、煙がまろやかで吸いやすいのが特徴です。フレーバーの種類も豊富なため、ぜひお気に入りのフレーバーを見つけ、極上のリラックス体験をお楽しみください。"
    return (
        <Box height="600px">
            <Box height="20px" sx={{ padding: "50px" }}>
                <Typography sx={{ fontFamily: "Academy Engraved LET", fontSize: "40px" }}>Shisha About</Typography>
            </Box>
            <Box height="580px">
                <Box width={"40%"} sx={{ padding: "100px" }}>
                    <CustomTypography displayText={explanShisha} />

                </Box>
            </Box>
        </Box >)
})

export default ShishaAbout