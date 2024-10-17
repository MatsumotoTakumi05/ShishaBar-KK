import { Box, Container, Typography } from '@mui/material'
import React, { memo } from 'react'

const AboutShisha = memo(() => {
    return (
        <Box height="700px">
            <Box sx={{ height: "20px", padding: "50px" }}>
                <Typography sx={{ fontFamily: "Academy Engraved LET", fontSize: "40px" }}>What's Shisha</Typography>
            </Box >
            <Container maxWidth="md">
                <Box>
                    <Typography>
                        シーシャは、水タバコの一種で、香り豊かなフレーバーの煙をゆっくりと吸い込む嗜好品です。<br />
                        フルーツやミントなどのフレーバー付きタバコ葉を炭で加熱し、水を通して吸うため、煙がまろやかになるのが特徴です。
                        数多くのフレーバーの中からお気に入りを見つけ、ぜひリラックスしたひと時をお過ごしください。
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
})

export default AboutShisha