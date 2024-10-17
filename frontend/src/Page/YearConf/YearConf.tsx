import { Box, Button, Container, Typography } from '@mui/material'
import { Fade } from 'react-swift-reveal';
import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../../Component/atoms/Button/CustomButton';


interface Props {
    setPath: React.Dispatch<React.SetStateAction<string>>
}
const YearConf = memo((props: Props) => {
    const { setPath } = props
    // 画面遷移用Hooks
    const navigate = useNavigate();

    // フェードイン完了後にTypographyを表示するための状態
    const [showText, setShowText] = useState(false);

    const nextBtnOnClick = () => {
        setPath("/KK")
        navigate('/KK')
    }
    // フェード処理が完了した後にTypographyを表示するタイマー
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true);
        }, 3000); // Fadeのdurationに合わせた時間

        return () => clearTimeout(timer); // コンポーネントがアンマウントされた際にタイマーをクリア
    }, []);


    return (
        <>
            <Box sx={{ bgcolor: "#262626" }}>
                <Fade duration={6000}>
                    <Box component="img" src='./yearConf_BgImage.jpeg' />
                </Fade>
                {
                    showText && (

                        <Container sx={{
                            position: "absolute",
                            top: "25%",
                            zIndex: 15,
                            backgroundColor: "rgba(38, 38, 38, 0.5)",
                            color: "#fff",
                            height: "300px",
                            width: "40%",
                            left: "30%",
                            borderRadius: "5%",

                        }}
                        >
                            <Fade>
                                <Typography sx={{ textAlign: "center", marginTop: "5%", color: "#ffffff" }}>
                                    年齢確認
                                </Typography>
                                <Typography sx={{ textAlign: "center", marginTop: "10%" }}>
                                    当店をご利用いただくには<br />
                                    20歳以上である必要があります。<br />
                                    あなたは20歳以上ですか？
                                </Typography>
                                <Box sx={{ textAlign: "center", display: "flex", justifyContent: "space-between", width: "40%", margin: "0 auto", mt: 2 }} >
                                    <CustomButton BtnContent='OK' BtnOnClick={nextBtnOnClick} />
                                    <CustomButton BtnContent='No' BtnOnClick={nextBtnOnClick} />
                                </Box>
                            </Fade>
                        </Container >

                    )
                }
            </Box>
        </>

    )
})

export default YearConf