import { Box, Container, Link, Typography } from '@mui/material'
import React, { memo, useEffect, useRef, useState } from 'react'
import CustomDiaLog from '../../../Component/modules/DiaLog/CustomDiaLog'
import CustomLayout from '../../../Component/modules/Layout/CustomLayout'

interface Info {
  date: string,
  text: string,
  DialogTittleText: string,
  DialogDetail: any
}
interface Props {
  setXScale: React.Dispatch<React.SetStateAction<number[]>>,
  setYScale: React.Dispatch<React.SetStateAction<number[]>>
}
const Information = memo((props: Props) => {
  const { setXScale, setYScale } = props

  // 各コンポーネントのrefを作成（型を指定）
  const informationRef = useRef<HTMLDivElement | null>(null);

  // ダイアログの表示を管理
  const [isOpenDiaLog, setIsOpenDiaLog] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<Info | null>(null); // 選択された情報を保存

  const Information: Info[] = [
    {
      date: "2024/10/01",
      text: "Instagramのご紹介について",
      DialogTittleText: "お知らせ",
      DialogDetail: (<>
        いつもご利用いただきありがとうございます！<br />
        当店のInstagramアカウントのご紹介です！<br />
        Instagramではお店のリアルタイムの情報や、キャンペーンのお知らせを行います。
        ぜひフォローをお願いします！<br />
        <Link href="https://www.instagram.com/shishabar_kk/" target="_blank" rel="noopener" sx={{ color: "blue" }}>
          Instagramはこちら
        </Link>
      </>)
    },
    {
      date: "2024/10/14",
      text: "HPの公開についてお知らせ",
      DialogTittleText: "お知らせ",
      DialogDetail: (<>いつもご利用いただきありがとうございます！<br />このたび、当店の公式ホームページがオープンしました！<br />ホームページでは、お店の雰囲気やシステム、アクセス情報など、さまざまな内容をお届けしています。これからも、みなさまに楽しんでいただけるよう頑張っていきます。今後ともよろしくお願いいたします！</>)
    }
  ]

  // ダイアログを閉じる処理
  const onClose = () => {
    setIsOpenDiaLog(false);
    setSelectedInfo(null); // 選択された情報をクリア
  }

  // リンクをクリックしてダイアログを開く処理
  const onOpen = (info: Info) => {
    setSelectedInfo(info); // クリックされた情報を保存
    setIsOpenDiaLog(true); // ダイアログを表示
  }

  useEffect(() => {
    if (informationRef.current) {
      const informationPosition = informationRef.current.getBoundingClientRect();
      setXScale((prevXScale: number[]) => {
        const updatedXScale = [...prevXScale]; // 現在の状態をコピー
        updatedXScale[1] = informationPosition.x; // 第一インデックスを更新
        return updatedXScale; // 更新した配列を返す
      });
      setYScale((prevYScale: number[]) => {
        const updatedYScale = [...prevYScale]; // 現在の状態をコピー
        updatedYScale[1] = informationPosition.y; // 第一インデックスを更新
        return updatedYScale; // 更新した配列を返す
      });
    }
  }, [])
  return (
    <CustomLayout tittleText="Information" ref={informationRef}>
      <Container sx={{
        position: "absolute",
        // top: "12%",
        zIndex: 15,
        backgroundColor: "rgb(110, 110, 110, 0.4)",
        color: "#fff",
        height: "500px",
        width: "60%",
        left: "20%",
        borderRadius: "2%",
      }}>
        <Container maxWidth="md">
          {Information.map((info: Info) => (
            <Box sx={{ display: "flex", margin: "50px 0", borderBottom: "dotted 0.5px #fff" }} key={info.text} onClick={() => onOpen(info)}>
              <Box sx={{ justifyContent: "flex-start" }}>
                <Typography sx={{ fontSize: "25px" }}>{info.date}</Typography>
              </Box>
              <Box sx={{ marginLeft: "200px" }}>
                <Link
                  sx={{ fontSize: "25px", "&:hover": { opacity: "0.8" }, cursor: "pointer" }}
                  underline="none"

                >
                  {info.text}
                </Link>
              </Box>
            </Box>
          ))}

          {/* ダイアログの内容を表示 */}
          {selectedInfo && (
            <CustomDiaLog
              open={isOpenDiaLog}
              onClose={onClose}
              DialogTittleText={selectedInfo.DialogTittleText}
              DialogDetail={selectedInfo.DialogDetail} />
          )}
        </Container>
      </Container>
    </CustomLayout>
  )
})

export default Information;
