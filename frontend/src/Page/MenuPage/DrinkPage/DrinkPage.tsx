import { Stack, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { memo } from 'react';
import { useTheme } from '@mui/material/styles';

const styles = {
  pageWrapper: {
    backgroundImage: `url('Normal_BgImage.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width: '100%',
    padding: '20px',
  },
  categoryContainer: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(110, 110, 110, 0.6)',
    padding: '20px',
    borderRadius: '8px',
    margin: '0 auto',
  },
  categoryBox: {
    width: '250px',
    padding: '10px',
    margin: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '20px', sm: '24px', md: '28px' },
    fontWeight: 'bold',
    marginBottom: '10px',
    color: 'white',
  },
  categoryTitle: {
    fontSize: { xs: '18px', sm: '22px', md: '26px' },
    fontWeight: 'bold',
    color: '#ffffff',
    textDecoration: 'underline',
    marginBottom: '8px',
  },
  item: {
    fontSize: { xs: '14px', sm: '18px', md: '22px' },
    color: '#ffffff',
  },
  cocktailContainer: {
    display: 'grid',
    gridTemplateColumns: '240px 240px',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '500px',
  },
  price: {
    fontSize: { xs: '14px', sm: '18px', md: '22px' },
    color: '#ffffff',
    marginTop: '10px', // 品目と金額の間に余白を追加
  },
};

const categories = [
  {
    title: 'BEER',
    items: ['生ビール ¥700', 'シャンディガフ ¥800'],
  },
  {
    title: 'HIGHBALL',
    items: ['ハイボール', 'ジンジャーハイボール', 'コークハイボール'],
    price: '各種 ¥700',
  },
  {
    title: 'WINE',
    items: ['赤ワイン', '白ワイン', 'キティ', 'オペレーター'],
    price: '各種 ¥800',
  },
  {
    title: 'SOUR',
    items: ['レモンサワー', '巨峰サワー', 'カルピスサワー', 'ライムサワー'],
    price: '各種 ¥700',
  },
  {
    title: 'SHOCHU',
    items: ['黒霧島 芋', '二階堂 麦', 'しろ 米', '茉莉花'],
    price: '各種 ¥700',
  },
  {
    title: 'UMESYU',
    items: ['ロック', 'ソーダ'],
    price: '各種 ¥700',
  },
  {
    title: 'COCKTAIL',
    items: [
      'カシスウーロン', 'カシスソーダ', 'カシスオレンジ',
      'マリブコーク', 'マリブミルク', 'カルーアミルク',
      'ライチグレープ', 'ライチトニック', 'ライチソーダ',
      'チャイナブルー', 'ファジーネーブル', 'ピーチウーロン',
      'ジントニック', 'ジンバック', 'ラムトニック',
      'ラムバック', 'モスコミュール', 'スクリュードライバー'
    ],
    price: '各種 ¥700',
    isCocktail: true,
  },
  {
    title: 'NON ALCOHOL',
    items: ['ノンアル梅酒', 'カシスオレンジ', 'カシスソーダ', 'カシスウーロン', 'サラトガクーラー', 'ファジーネーブル', 'シャーリーテンプル'],
    price: '各種 ¥500',
  },
  {
    title: 'SOFT DRINK',
    items: ['緑茶', '烏龍茶', 'オレンジ', 'カルピス', 'コーラ', 'ジンジャーエール', '炭酸水'],
    price: '各種 ¥500',
  },
];

const DrinkPage = memo(() => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={styles.pageWrapper}>
      <Box id="drink-menu" sx={{ marginBottom: '30px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
          DRINK MENU
        </Typography>
      </Box>

      <Box sx={styles.categoryContainer}>
        {categories.slice(0, 5).map((category) =>
          category.isCocktail ? (
            <Box key={category.title} sx={{ ...styles.categoryBox, width: '100%' }}>
              <Typography sx={{ ...styles.categoryTitle, textAlign: 'center' }}>
                {category.title}
              </Typography>
              <Box sx={styles.cocktailContainer}>
                {category.items.map((item) => (
                  <Typography key={item} sx={styles.item}>{item}</Typography>
                ))}
              </Box>
              {category.price && (
                <Typography sx={styles.price}>{category.price}</Typography>
              )}
            </Box>
          ) : (
            <Box key={category.title} sx={styles.categoryBox}>
              <Typography sx={styles.categoryTitle}>{category.title}</Typography>
              {category.items.map((item) => (
                <Typography key={item} sx={styles.item}>{item}</Typography>
              ))}
              {category.price && (
                <Typography sx={styles.price}>{category.price}</Typography>
              )}
            </Box>
          )
        )}

        {/* 改行用の要素 */}
        <Box sx={{ width: '100%', height: '20px' }}></Box>

        {categories.slice(5).map((category) =>
          category.isCocktail ? (
            <Box key={category.title} sx={{ ...styles.categoryBox, width: '100%' }}>
              <Typography sx={{ ...styles.categoryTitle, textAlign: 'center' }}>
                {category.title}
              </Typography>
              <Box sx={styles.cocktailContainer}>
                {category.items.map((item) => (
                  <Typography key={item} sx={styles.item}>{item}</Typography>
                ))}
              </Box>
              {category.price && (
                <Typography sx={styles.price}>{category.price}</Typography>
              )}
            </Box>
          ) : (
            <Box key={category.title} sx={styles.categoryBox}>
              <Typography sx={styles.categoryTitle}>{category.title}</Typography>
              {category.items.map((item) => (
                <Typography key={item} sx={styles.item}>{item}</Typography>
              ))}
              {category.price && (
                <Typography sx={styles.price}>{category.price}</Typography>
              )}
            </Box>
          )
        )}
      </Box>
    </Box>
  );
});

export default DrinkPage;
