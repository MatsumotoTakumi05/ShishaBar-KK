import { Box, Button, Container, Typography } from '@mui/material'
import React, { memo, useEffect, useRef } from 'react'
import CustomLayout from '../../../Component/modules/Layout/CustomLayout'
import { useNavigate } from 'react-router-dom'

interface Props {
    setXScale: React.Dispatch<React.SetStateAction<number[]>>,
    setYScale: React.Dispatch<React.SetStateAction<number[]>>
}

const AboutShisha = memo((props: Props) => {
    const { setXScale, setYScale } = props


    // 各コンポーネントのrefを作成（型を指定）
    const aboutShishaRef = useRef<HTMLDivElement | null>(null);

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

    useEffect(() => {
        if (aboutShishaRef.current) {
            const aboutShishaPosition = aboutShishaRef.current.getBoundingClientRect();
            setXScale((prevXScale: number[]) => {
                const updatedXScale = [...prevXScale]; // 現在の状態をコピー
                updatedXScale[2] = aboutShishaPosition.x; // 第一インデックスを更新
                return updatedXScale; // 更新した配列を返す
            });
            setYScale((prevYScale: number[]) => {
                const updatedYScale = [...prevYScale]; // 現在の状態をコピー
                updatedYScale[2] = aboutShishaPosition.y; // 第一インデックスを更新
                return updatedYScale; // 更新した配列を返す
            });
        }
    }, [])

    return (
        <CustomLayout tittleText="What's Shisha" backgroundBorder={bgImageStyle} ref={aboutShishaRef}>
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