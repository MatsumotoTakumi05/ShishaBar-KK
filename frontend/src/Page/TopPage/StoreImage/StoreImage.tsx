import { Box, Container, Stack } from '@mui/material'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { memo, useEffect, useState } from 'react'
import './StoreImage.css'



const StoreImage = memo(() => {
    // 表示する画像リスト
    const topImage = ["./Normal_BgImage.jpeg", "./Access_BgImage.jpeg", "./Flavor_BgImage.jpeg", "./ShishaAbout_BgImage.jpeg", "./ShishaAbout_BgImage.jpeg", "./ShishaAbout_BgImage.jpeg", "./ShishaAbout_BgImage.jpeg"]
    // 画面切り替え時のアニメーション判定
    const [isFade, setIsFade] = useState(true)
    // topImageリストのインデックス番号を保持
    const [currentIndex, setCurrentIndex] = useState(0)
    // 画像を一定時間ごとに切り替えるためのuseEffect
    // 画像を一定時間ごとに切り替える
    useEffect(() => {
        const interval = setInterval(() => {
            setIsFade(false); // まずフェードアウト
            setTimeout(() => {
                setCurrentIndex((prevIndex: number) =>
                    prevIndex === topImage.length - 1 ? 0 : prevIndex + 1
                );
                setIsFade(true); // フェードイン
            }, 700); // 500ms後に次の画像に切り替え
        }, 5000); // 画像を3.5秒ごとに切り替え
        // コンポーネントがアンマウントされた時にインターバルをクリア
        return () => clearInterval(interval);
    }, []);

    // 矢印アイコンのクリックイベント
    const moveImageOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id
        if (id === "prev" && currentIndex !== 0) {
            setCurrentIndex(currentIndex - 1)
        } else if (id === "next" && currentIndex !== 5) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(Number(id))
        }
    }
    return (
        <>
            <Box sx={{ height: "600px", position: "relative" }}>
                <Box
                    component="img"
                    src={topImage[currentIndex]}  // 現在の画像を表示
                    alt={`Image ${currentIndex + 1}`}
                    className={`image ${isFade ? "fade-in" : "fade-out"}`}
                    sx={{ width: "100%", height: "100%" }}
                />

                {/* Stackを絶対配置で画像の前面に表示 */}
                <Stack
                    direction="row"
                    sx={{
                        position: "absolute",
                        bottom: "20px",  // 画像の下からの距離
                        left: "50%",
                        transform: "translateX(-50%)", // 中央揃え
                        color: "#dedede",
                        zIndex: 10, // 画像より前面に表示
                    }}
                    alignItems="center"  /* 各要素を縦方向に中央揃え */
                    spacing={10}
                >
                    <ArrowBackIosIcon sx={{ fontSize: "25px", cursor: "pointer", color: currentIndex === 0 ? "grey" : "white" }} id="prev" onClick={(e: any) => moveImageOnClick(e)} />

                    <Box id="0" onClick={(e: any) => moveImageOnClick(e)} sx={{ cursor: "pointer", width: "10px", height: "10px", backgroundColor: currentIndex === 0 ? "white" : "grey", borderRadius: "50%" }} > </Box>
                    <Box id="1" onClick={(e: any) => moveImageOnClick(e)} sx={{ cursor: "pointer", width: "10px", height: "10px", backgroundColor: currentIndex === 1 ? "white" : "grey", borderRadius: "50%" }}>  </Box>
                    <Box id="2" onClick={(e: any) => moveImageOnClick(e)} sx={{ cursor: "pointer", width: "10px", height: "10px", backgroundColor: currentIndex === 2 ? "white" : "grey", borderRadius: "50%" }}>  </Box>
                    <Box id="3" onClick={(e: any) => moveImageOnClick(e)} sx={{ cursor: "pointer", width: "10px", height: "10px", backgroundColor: currentIndex === 3 ? "white" : "grey", borderRadius: "50%" }}>  </Box>
                    <Box id="4" onClick={(e: any) => moveImageOnClick(e)} sx={{ cursor: "pointer", width: "10px", height: "10px", backgroundColor: currentIndex === 4 ? "white" : "grey", borderRadius: "50%" }}>  </Box>
                    <Box id="5" onClick={(e: any) => moveImageOnClick(e)} sx={{ cursor: "pointer", width: "10px", height: "10px", backgroundColor: currentIndex === 5 ? "white" : "grey", borderRadius: "50%" }}>  </Box>

                    <ArrowForwardIosIcon sx={{ fontSize: "25px", cursor: "pointer", color: currentIndex === 5 ? "grey" : "white" }} id="next" onClick={(e: any) => moveImageOnClick(e)} />
                </Stack>
            </Box>

        </>
    )
})

export default StoreImage