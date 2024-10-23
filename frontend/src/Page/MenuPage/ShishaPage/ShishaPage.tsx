import { Card, CardContent, CardMedia, Stack, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { memo } from 'react';
import { useTheme } from '@mui/material/styles';
import CustomLayout from '../../../Component/modules/Layout/CustomLayout';

const styles = {
  pageWrapper: {
    backgroundImage: `url('Normal_BgImage.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width: '100vw',
    padding: '20px',
  },
  section: {
    margin: '0 auto',
    marginBottom: '20px',
    width: '80%',
  },
  card: {
    backgroundColor: 'rgba(110, 110, 110, 0.4)',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '10px',
  },
  title: {
    fontSize: { xs: '24px', sm: '28px', md: '32px' },
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  content: {
    fontSize: { xs: '18px', sm: '22px', md: '26px' },
    lineHeight: '1.5',
  },
};

const ShishaPage = memo(() => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // スマホ向けのブレークポイント
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md')); // タブレット向けのブレークポイント
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md')); // PC向けのブレークポイント

  return (
    <>
      <Box height="auto" sx={styles.pageWrapper}>
        {/* ページタイトル */}
        <Box id="shisha" sx={{ textAlign: 'center', marginBottom: '30px' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
            SHISHA MENU
          </Typography>
        </Box>

        {/* セクション：料金システム */}
        <Box sx={styles.section}>
          <Card sx={styles.card}>
            <Typography variant="h5" sx={styles.title}>料金システム</Typography>
            <Typography sx={styles.content}>
              ・A set ¥2,500：シーシャ＋1ドリンク(チャージ込み) <br />
              ・B set ¥4,000：シーシャ2h飲み放題(チャージ込み) <br />
              ※両セット学生証提示で学割有り <br />
              ・カラオケ料金：1曲→200円　歌い放題→500円
            </Typography>
          </Card>
        </Box>

        {/* セクション：取り扱いメーカー */}
        <Box sx={styles.section}>
          <Card sx={styles.card}>
            <Typography variant="h5" sx={styles.title}>取り扱いメーカー</Typography>
            <Typography sx={styles.content}>
            ・Aladin／・SocialSmoke／・Starbuzz
            </Typography>
          </Card>
        </Box>

        {/* セクション：フレーバー */}
        <Box sx={styles.section}>
          <Card sx={styles.card}>
            <Typography variant="h5" sx={styles.title}>Flavor</Typography>
            <Typography sx={styles.content}>
              ピーチ　マンゴー　キウイ　オレンジ　ストロベリー　ブルーベリー　カシス　香港ミルクティー　ジンジャエール　パイナップル　ダブルアップル　ライチ　ライム　テェリー　ラズベリー　ミント　レモングラス　グレープフルーツ
            </Typography>
          </Card>
        </Box>
      </Box>
    </>
  );
});

export default ShishaPage;
