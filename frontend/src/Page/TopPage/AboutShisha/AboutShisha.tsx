import { Box, Button, Container, Typography } from '@mui/material'
import React, { memo } from 'react'
import CustomLayout from '../../../Component/modules/Layout/CustomLayout'

const AboutShisha = memo(() => {
    return (
        <CustomLayout tittleText="What's Shisha">
            <Container maxWidth="md" sx={{ display: "flex", width: "100%", backgroundImage: "./ShishaAbout_BgImage.jpeg" }}>
                <Box sx={{ width: "30%" }}>
                    <Typography>
                        シーシャは、水タバコの一種で、香り豊かなフレーバーの煙をゆっくりと吸い込む嗜好品です。<br />
                        フルーツやミントなどのフレーバー付きタバコ葉を炭で加熱し、水を通して吸うため、煙がまろやかになるのが特徴です。
                        数多くのフレーバーの中からお気に入りを見つけ、ぜひリラックスしたひと時をお過ごしください。
                    </Typography>
                    <Button variant="outlined">Read More→</Button>
                </Box>
            </Container>

        </CustomLayout >
    )
})

export default AboutShisha