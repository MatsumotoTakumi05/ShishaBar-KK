import { Box, IconButton, Stack } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { memo, useEffect, useRef, useState } from 'react'
import './StoreImage.css'


const StoreImage = memo(() => {


    // 表示する画像リスト
    const topImage = ["./ShishaAbout_BgImage.jpeg", "./Access_BgImage.jpeg", "./Flavor_BgImage.jpeg", "./ShishaAbout_BgImage.jpeg", "./ShishaAbout_BgImage.jpeg", "./ShishaAbout_BgImage.jpeg"]

    // 画面切り替え時のアニメーション判定
    const [isFade, setIsFade] = useState(true)

    // topImageリストのインデックス番号を保持
    const [currentIndex, setCurrentIndex] = useState(0)

    // ページネーションの表示管理
    const [isShowPagination, setIsShowPagination] = useState(false)

    // 画像を一定時間ごとに切り替えるためのuseEffect
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
        const id = e.currentTarget.id
        if (id === "prev") {
            setCurrentIndex(currentIndex - 1)
        } else if (id === "next") {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(Number(id))
        }
    }


    return (
        <>
            <Box sx={{ height: "600px", position: "relative" }} >
                <Box
                    component="img"
                    src={topImage[currentIndex]}  // 現在の画像を表示
                    alt={`Image ${currentIndex + 1}`}
                    className={`image ${isFade ? "fade-in" : "fade-out"}`}
                    sx={{ width: "100%", height: "100%", zIndex: 1 }}
                    onMouseEnter={() => setIsShowPagination(true)}  // ホバー時に表示
                    onMouseLeave={() => setIsShowPagination(false)} // ホバー解除時に非表示   
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
                    {isShowPagination &&
                        <>
                            <IconButton
                                onClick={(e: any) => moveImageOnClick(e)}
                                disabled={currentIndex === 0}
                                id="prev"
                            >
                                <ArrowBackIosIcon sx={{ fontSize: "25px", color: currentIndex === 0 ? "grey" : "white" }} />
                            </IconButton>
                            {topImage.map((_, index: number) => {
                                return (
                                    <Box id={String(index)} onClick={(e: any) => moveImageOnClick(e)} sx={{ cursor: "pointer", width: "10px", height: "10px", backgroundColor: currentIndex === index ? "white" : "grey", borderRadius: "50%" }} key={index}> </Box>
                                )
                            })}
                            <IconButton disabled={currentIndex === 5} id="next" onClick={(e: any) => moveImageOnClick(e)}>
                                <ArrowForwardIosIcon sx={{ fontSize: "25px", cursor: "pointer", color: currentIndex === 5 ? "grey" : "white" }} />
                            </IconButton>
                        </>
                    }
                </Stack>
            </Box >

        </>
    )
})

export default StoreImage