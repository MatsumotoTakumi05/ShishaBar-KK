import { Stack, useMediaQuery } from '@mui/material';
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
    marginBottom: '30px',
    width: '80%',
  },
  box: {
    padding: '50px',
    marginBottom: '10px',
  },
  title: {
    fontSize: { xs: '24px', sm: '28px', md: '32px' },
    fontWeight: 'bold',
    marginBottom: '10px',
    color: 'white',
  },
  content: {
    fontSize: { xs: '18px', sm: '22px', md: '26px' },
    lineHeight: '1.5',
    color: '#ffffff',
  },
};

const ShishaPage = memo(() => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box height="auto" width="100%" sx={styles.pageWrapper}>
        {/* ページタイトル */}
        <Box id="shisha" sx={{ marginBottom: '30px' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
            SHISHA MENU
          </Typography>
        </Box>
        <Box></Box>
        {/* カードを横並びにするセクション */}
        <Stack
          direction={isSmallScreen ? 'column' : 'row'}
          justifyContent="center"
          spacing={0}
          width="80%"
          borderRadius='8px'
          margin='0 auto'
          marginBottom='30px'
          sx={{ backgroundColor: 'rgba(110, 110, 110, 0.4)', padding: '0 20px', flexDirection: isSmallScreen ? 'column' : 'row' }} // スマホでは縦並びにする
        >
          {/* セクション：料金システム */}
          <Box sx={styles.box}>
            <Typography variant="h5" sx={styles.title}>【料金システム】</Typography>
            <Typography sx={styles.content}>
              ・A set ¥2,500：<br />シーシャ＋1ドリンク(チャージ込み) <br />
              ・B set ¥4,000：<br />シーシャ2h飲み放題(チャージ込み) <br />
              ※両セット学生証提示で学割有り <br />
              ・カラオケ料金：<br />1曲→200円　歌い放題→500円
            </Typography>
          </Box>

          {/* セクション：取り扱いメーカー */}
          <Box sx={styles.box}>
            <Typography variant="h5" sx={styles.title}>【取り扱いメーカー】</Typography>
            <Typography sx={styles.content}>
              ・Aladin<br />・SocialSmoke<br />・Starbuzz
            </Typography>
          </Box>

          {/* セクション：フレーバー */}
          <Box sx={styles.box}>
            <Typography variant="h5" sx={styles.title}>【Flavor】</Typography>
            <Typography sx={styles.content}>
              ・ピーチ<br />・マンゴー<br />・キウイ<br />・オレンジ<br />・ストロベリー<br />・ブルーベリー<br />・カシス<br />・香港ミルクティー<br />・ジンジャエール<br />
            </Typography>
          </Box>
          <Box sx={styles.box}>
            <Typography variant="h5" sx={styles.title}>　　</Typography>
            <Typography sx={styles.content}>
              ・パイナップル<br />・ダブルアップル<br />・ライチ<br />・ライム<br />・チェリー<br />・ラズベリー<br />・ミント<br />・レモングラス<br />・グレープフルーツ
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
});

export default ShishaPage;
