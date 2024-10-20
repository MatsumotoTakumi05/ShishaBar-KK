import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { memo } from 'react';

const styles = {
  pageWrapper: {
    backgroundImage: `url('storeAccess_bgImage.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  headerBox: {
    height: '20px',
    padding: '50px' 
  },
  headerText: {
    fontFamily: 'Academy Engraved LET',
    fontSize: '40px'
  },
  storeBox: {
    width: '40%',
    backgroundColor: 'rgba(110, 110, 110, 0.4)',
    padding: '20px',
    borderRadius: '8px'
  },
  storeTitle: {
    fontWeight: 'bold',
    marginBottom: '16px',
    fontSize: '32px'
  },
  storeDetailText: {
    fontWeight: 'bold',
    fontSize: '26px'
  },
  storeContentText: {
    fontSize: '24px'
  }
};

const StoreAccess = memo(() => {
  return (
    <>
      <Box height="1000px" sx={styles.pageWrapper}>
        <Box sx={styles.headerBox}>
        <Typography sx={styles.headerText}>ACCESS／STORE</Typography>
        </Box>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={8} // 左右ボックス間のスペースを広めに
          sx={{ padding: '0 20px' }} // 画面端にぶつからないように余白を追加
          >
          {/* 湯田店 */}
          <Box sx={styles.storeBox}>
            <Typography sx={styles.storeTitle}>湯田店</Typography>
            <Stack spacing={2}>
              <Box>
                <Typography sx={styles.storeDetailText}>住所:</Typography>
                <Typography sx={styles.storeContentText}>〒753−0056</Typography>
                <Typography sx={styles.storeContentText}>山口県山口市湯田温泉１丁目７−２２</Typography>
              </Box>
              <Box>
                <Typography sx={styles.storeDetailText}>TEL:</Typography>
                <Typography sx={styles.storeContentText}>080-5610-0408</Typography>
              </Box>
              <Box>
                <Typography sx={styles.storeDetailText}>営業時間:</Typography>
                <Typography sx={styles.storeContentText}>21:00 〜 26:00</Typography>
                <Typography sx={styles.storeContentText}>（ご来店状況により延長あり）</Typography>
              </Box>
              <Box>
                <Typography sx={styles.storeDetailText}>定休日:</Typography>
                <Typography sx={styles.storeContentText}>木曜日</Typography>
              </Box>
              <Box>
                <Typography sx={styles.storeDetailText}>席数:</Typography>
                <Typography sx={styles.storeContentText}>20席</Typography>
              </Box>
              <Box>
                <Typography sx={styles.storeDetailText}>決済方法:</Typography>
                <Typography sx={styles.storeContentText}>クレジットカード：可</Typography>
                <Typography sx={styles.storeContentText}>QRコード決済：可</Typography>
                <Typography sx={styles.storeContentText}>現金：可</Typography>
              </Box>
            </Stack>
          </Box>

          {/* 徳山店 */}
          <Box sx={styles.storeBox}>
            <Typography sx={styles.storeTitle}>徳山店</Typography>
            <Stack spacing={2}>
              <Box>
                <Typography sx={styles.storeDetailText}>住所:</Typography>
                <Typography sx={styles.storeContentText}>〒745−0014</Typography>
                <Typography sx={styles.storeContentText}>山口県周南市飯島町２丁目１６　セウズール２−１</Typography>
              </Box>
              <Box>
                <Typography sx={styles.storeDetailText}>TEL:</Typography>
                <Typography sx={styles.storeContentText}>080-8243-7202</Typography>
              </Box>
              <Box>
                <Typography sx={styles.storeDetailText}>営業時間:</Typography>
                <Typography sx={styles.storeContentText}>21:00 〜 26:00</Typography>
                <Typography sx={styles.storeContentText}>（ご来店状況により延長あり）</Typography>
              </Box>
              <Box>
                <Typography sx={styles.storeDetailText}>定休日:</Typography>
                <Typography sx={styles.storeContentText}>木曜日</Typography>
              </Box>
              <Box>
                <Typography sx={styles.storeDetailText}>席数:</Typography>
                <Typography sx={styles.storeContentText}>35席</Typography>
              </Box>
              <Box>
                <Typography sx={styles.storeDetailText}>決済方法:</Typography>
                <Typography sx={styles.storeContentText}>クレジットカード：可</Typography>
                <Typography sx={styles.storeContentText}>QRコード決済：可</Typography>
                <Typography sx={styles.storeContentText}>現金：可</Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
});

export default StoreAccess;