import { Box, Button, Container, Typography } from '@mui/material'
import React, { memo, useEffect, useRef } from 'react'
import CustomLayout from '../../../Component/modules/Layout/CustomLayout'
import { useNavigate } from 'react-router-dom'


const AboutShisha = memo(() => {



    // navigateの定義
    const navigate = useNavigate()
    // 外郭のcss変数
    const bgImageStyle = [{
        backgroundImage: "url(./AboutShisha.jpeg)",
        backgroundSize: "100% 100%",
    }]

    const detailPageNaviOnClick = () => {
        navigate("/KK/AboutShisha")
    }



    return (
        <CustomLayout id="about" tittleText="What's Shisha" backgroundBorder={bgImageStyle} >
            <Container maxWidth="md" sx={{ display: "flex", width: "100%", }}>
                <Box sx={{ width: "50%", padding: "30px" }} >
                    <Typography sx={{ fontSize: "24px" }}>
                        シーシャは、水タバコの一種で、香り豊かなフレーバーの煙をゆっくりと吸い込む嗜好品です。
                        フルーツやミントなどのフレーバー付きタバコ葉を炭で加熱し、水を通して吸うため、煙がまろやかになるのが特徴です。
                        数多くのフレーバーの中からお気に入りを見つけ、ぜひリラックスしたひと時をお過ごしください。
                    </Typography>
                    <Button variant="outlined" sx={{ mt: "30px" }} onClick={detailPageNaviOnClick}> Read More→</Button>
                </Box>
            </Container>

        </CustomLayout >
    )
})

export default AboutShisha