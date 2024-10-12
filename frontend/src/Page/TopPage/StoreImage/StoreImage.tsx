import { Box } from '@mui/material'
import React, { memo, useEffect, useState } from 'react'
import './StoreImage.css'



const StoreImage = memo(() => {
    // 表示する画像リスト
    const topImage = ["././BgImage.jpeg", "./Access.jpeg","./BgImage_common.jpeg"]
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
    return (
        <>
            <Box
                component="img"
                src={topImage[currentIndex]}  // 現在の画像を表示
                alt={`Image ${currentIndex + 1}`}
                className={`image ${isFade ? "fade-in" : "fade-out"}`}
            />
        </>
    )
})

export default StoreImage