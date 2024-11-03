// import { Stack, useMediaQuery } from '@mui/material';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import React, { memo } from 'react';
// import { useTheme } from '@mui/material/styles';

// const styles = {
//   pageWrapper: {
//     backgroundImage: `url('Normal_BgImage.jpeg')`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     backgroundAttachment: 'fixed',
//     width: '100%',
//     padding: '20px',
//   },
//   categoryContainer: {
//     width: '80%',
//     display: 'flex',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     backgroundColor: 'rgba(110, 110, 110, 0.6)',
//     padding: '20px',
//     borderRadius: '8px',
//     margin: '0 auto',
//   },
//   categoryBox: {
//     width: '250px',
//     padding: '10px',
//     margin: '10px',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: '8px',
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: { xs: '20px', sm: '24px', md: '28px' },
//     fontWeight: 'bold',
//     marginBottom: '10px',
//     color: 'white',
//   },
//   categoryTitle: {
//     fontSize: { xs: '18px', sm: '22px', md: '26px' },
//     fontWeight: 'bold',
//     color: '#ffffff',
//     textDecoration: 'underline',
//     marginBottom: '8px',
//   },
//   item: {
//     fontSize: { xs: '14px', sm: '18px', md: '22px' },
//     color: '#ffffff',
//   },
//   cocktailContainer: {
//     width: '500px',
//     display: 'grid',
//     gridTemplateColumns: '240px 240px',
//     gap: '10px',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   price: {
//     fontSize: { xs: '14px', sm: '18px', md: '22px' },
//     color: '#ffffff',
//     marginTop: '10px', // 品目と金額の間に余白を追加
//   },
// };

// const categories = [
//   {
//     title: 'BEER',
//     items: ['生ビール ¥700', 'シャンディガフ ¥800'],
//   },
//   {
//     title: 'HIGHBALL',
//     items: ['ハイボール', 'ジンジャーハイボール', 'コークハイボール'],
//     price: '各種 ¥700',
//   },
//   {
//     title: 'WINE',
//     items: ['赤ワイン', '白ワイン', 'キティ', 'オペレーター'],
//     price: '各種 ¥800',
//   },
//   {
//     title: 'SOUR',
//     items: ['レモンサワー', '巨峰サワー', 'カルピスサワー', 'ライムサワー'],
//     price: '各種 ¥700',
//   },
//   {
//     title: 'SHOCHU',
//     items: ['黒霧島 芋', '二階堂 麦', 'しろ 米', '茉莉花'],
//     price: '各種 ¥700',
//   },
//   {
//     title: 'UMESYU',
//     items: ['ロック', 'ソーダ'],
//     price: '各種 ¥700',
//   },
//   {
//     title: 'COCKTAIL',
//     items: [
//       'カシスウーロン', 'カシスソーダ', 'カシスオレンジ',
//       'マリブコーク', 'マリブミルク', 'カルーアミルク',
//       'ライチグレープ', 'ライチトニック', 'ライチソーダ',
//       'チャイナブルー', 'ファジーネーブル', 'ピーチウーロン',
//       'ジントニック', 'ジンバック', 'ラムトニック',
//       'ラムバック', 'モスコミュール', 'スクリュードライバー'
//     ],
//     price: '各種 ¥700',
//     isCocktail: true,
//   },
//   {
//     title: 'NON ALCOHOL',
//     items: ['ノンアル梅酒', 'カシスオレンジ', 'カシスソーダ', 'カシスウーロン', 'サラトガクーラー', 'ファジーネーブル', 'シャーリーテンプル'],
//     price: '各種 ¥500',
//   },
//   {
//     title: 'SOFT DRINK',
//     items: ['緑茶', '烏龍茶', 'オレンジ', 'カルピス', 'コーラ', 'ジンジャーエール', '炭酸水'],
//     price: '各種 ¥500',
//   },
// ];

// const DrinkPage = memo(() => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Box sx={styles.pageWrapper}>
//       <Box id="drink-menu" sx={{ marginBottom: '30px' }}>
//         <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
//           DRINK MENU
//         </Typography>
//       </Box>

//       <Box sx={styles.categoryContainer}>
//         {categories.slice(0, 5).map((category) =>
//           category.isCocktail ? (
//             <Box key={category.title} sx={{ ...styles.categoryBox, width: '500px' }}>
//               <Typography sx={{ ...styles.categoryTitle, textAlign: 'center' }}>
//                 {category.title}
//               </Typography>
//               <Box sx={styles.cocktailContainer}>
//                 {category.items.map((item) => (
//                   <Typography key={item} sx={styles.item}>{item}</Typography>
//                 ))}
//               </Box>
//               {category.price && (
//                 <Typography sx={styles.price}>{category.price}</Typography>
//               )}
//             </Box>
//           ) : (
//             <Box key={category.title} sx={styles.categoryBox}>
//               <Typography sx={styles.categoryTitle}>{category.title}</Typography>
//               {category.items.map((item) => (
//                 <Typography key={item} sx={styles.item}>{item}</Typography>
//               ))}
//               {category.price && (
//                 <Typography sx={styles.price}>{category.price}</Typography>
//               )}
//             </Box>
//           )
//         )}

//         {/* 改行用の要素 */}
//         <Box sx={{ width: '100%', height: '20px' }}></Box>

//         {categories.slice(5).map((category) =>
//           category.isCocktail ? (
//             <Box key={category.title} sx={{ ...styles.categoryBox, width: '500px' }}>
//               <Typography sx={{ ...styles.categoryTitle, textAlign: 'center' }}>
//                 {category.title}
//               </Typography>
//               <Box sx={styles.cocktailContainer}>
//                 {category.items.map((item) => (
//                   <Typography key={item} sx={styles.item}>{item}</Typography>
//                 ))}
//               </Box>
//               {category.price && (
//                 <Typography sx={styles.price}>{category.price}</Typography>
//               )}
//             </Box>
//           ) : (
//             <Box key={category.title} sx={styles.categoryBox}>
//               <Typography sx={styles.categoryTitle}>{category.title}</Typography>
//               {category.items.map((item) => (
//                 <Typography key={item} sx={styles.item}>{item}</Typography>
//               ))}
//               {category.price && (
//                 <Typography sx={styles.price}>{category.price}</Typography>
//               )}
//             </Box>
//           )
//         )}
//       </Box>
//     </Box>
//   );
// });

// export default DrinkPage;

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Box from "@mui/material/Box";
import { memo } from "react";
import CustomLayout from "../../../Component/modules/Layout/CustomLayout";
import CardSwiper from "../../../Component/modules/Swiper/CardSwiper";

const DrinkPage = memo(() => {
  const cardList = [
    {
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "生ビール",
      textContent: "¥ 700",
    },
    {
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "シャンディガフ",
      textContent: "¥ 800",
    },
    {
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ハイボール",
      textContent: "¥ 800",
    },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "コークハイボール",
    //   textContent: "¥ 800",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "ジンジャーハイボール",
    //   textContent: "¥ 800",
    // },
    // // ワイン
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "赤ワイン",
    //   textContent: "¥ 800",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "白ワイン",
    //   textContent: "¥ 800",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "キティ",
    //   textContent: "¥ 800",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "オペレーター",
    //   textContent: "¥ 800",
    // },
    // // サワー
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "レモンサワー",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "巨峰サワー",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "カルピスサワー",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "ライムサワー",
    //   textContent: "¥ 700",
    // },
    // // 焼酎・梅酒
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "黒霧島（芋焼酎）",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "二階堂（麦焼酎）",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "しろ（米焼酎）",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "梅酒（ロック/ソーダ割）",
    //   textContent: "¥ 700",
    // },
    // // カクテル
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "カシスウーロン",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "カシスソーダ",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "カシスオレンジ",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "マリブコーク",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "マリブミルク",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "カルアミルク",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "ライチグレープ",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "ライチトニック",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "ライチソーダ",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "チャイナブルー",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "ファジーネーブルー",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "ピーチウーロン",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "ジントニック",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "ジンバック",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "ラムトニック",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "ラムバック",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "モスコミュール",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "スクリュードライバー",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "マンゴーソーダ",
    //   textContent: "¥ 700",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "マンゴーミルク",
    //   textContent: "¥ 700",
    // },
    // // ノンアル
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "ノンアル梅酒",
    //   textContent: "¥ 500",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "カシスオレンジ",
    //   textContent: "¥ 500",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "カシスソーダ",
    //   textContent: "¥ 500",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "カシスウーロン",
    //   textContent: "¥ 500",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "サラトガクーラー",
    //   textContent: "¥ 500",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "ファジーネーブル",
    //   textContent: "¥ 500",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "シャリーテンプル",
    //   textContent: "¥ 500",
    // },
    // // ソフトドリンク
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "緑茶",
    //   textContent: "¥ 500",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "烏龍茶",
    //   textContent: "¥ 500",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "オレンジ",
    //   textContent: "¥ 500",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "カルピス",
    //   textContent: "¥ 500",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "コーラ",
    //   textContent: "¥ 500",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "ジンジャエール",
    //   textContent: "¥ 500",
    // },
    // {
    //   imgUrl: "/Drink.jpeg",
    //   imgEx: "./Drink",
    //   textTittle: "炭酸水",
    //   textContent: "¥ 500",
    // },
    // ショット
    {
      outHeight: "330px",
      textHeight: "130px",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "テキーラ",
      textContent: "1shot : ¥ 500<br />3shot : ¥ 1,200",
    },
    {
      outHeight: "330px",
      textHeight: "130px",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "イェーガー",
      textContent: "1shot : ¥ 500<br />3shot : ¥ 1,200",
    },
    {
      outHeight: "330px",
      textHeight: "130px",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "コカレロ",
      textContent: "1shot : ¥ 600<br />3shot : ¥ 1,600",
    },
    {
      outHeight: "330px",
      textHeight: "130px",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "コカボム",
      textContent: "1shot : ¥ 800<br />3shot : ¥ 2,000",
    },
    {
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "クライナー",
      textContent: "¥ 800",
    },
    {
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "チャミスル",
      textContent: "¥ 1,200",
    },
    // シャンパン
    {
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "スパークリングワイン",
      textContent: "¥ 5,500",
    },
    {
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "カフェパリ",
      textContent: "¥ 6,000",
    },
    {
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "マバム",
      textContent: "¥ 14,000",
    },
    {
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "モエ アイス",
      textContent: "¥ 23,000",
    },
    {
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "モエ ネクター",
      textContent: "¥ 30,000",
    },
  ];
  return (
    <>
      <Box
        height={"700px"}
        sx={{
          overflowY: "auto",
          backgroundImage: "url(../Normal_BgImage.jpeg)",
        }}
      >
        <Box height={"100%"}>
          <CustomLayout tittleText="Drink Menu">
            <CardSwiper cardList={cardList} />
          </CustomLayout>
        </Box>
      </Box>
    </>
  );
});

export default DrinkPage;
