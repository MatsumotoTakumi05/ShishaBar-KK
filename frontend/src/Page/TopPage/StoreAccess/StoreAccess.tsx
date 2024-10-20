import { Link, Stack, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { memo } from 'react';
import { useTheme } from '@mui/material/styles';

const styles = {
  pageWrapper: {
    backgroundImage: `url('storeAccess_bgImage.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  headerBox: {
    height: '20px',
    padding: '50px',
  },
  headerText: {
    fontFamily: 'Academy Engraved LET',
    fontSize: '40px',
  },
  storeBox: {
    width: { xs: '90%', sm: '60%', md: '40%' },
    backgroundColor: 'rgba(110, 110, 110, 0.4)',
    padding: '20px',
    borderRadius: '8px',
  },
  storeTitle: {
    fontWeight: 'bold',
    marginBottom: '16px',
    fontSize: { xs: '24px', sm: '28px', md: '32px' },
  },
  storeDetailText: {
    fontWeight: 'bold',
    fontSize: { xs: '18px', sm: '22px', md: '26px' },
  },
  storeContentText: {
    fontSize: { xs: '16px', sm: '20px', md: '24px' },
  },
};

const StoreAccess = memo(() => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // スマホ向けのブレークポイント
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md')); // タブレット向けのブレークポイント
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md')); // PC向けのブレークポイント

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
          spacing={8}
          sx={{ padding: '0 20px', flexDirection: isSmallScreen ? 'column' : 'row' }} // スマホでは縦並びにする
        >
          {/* 湯田店 */}
          <Box sx={styles.storeBox}>
            <Typography sx={styles.storeTitle}>湯田店</Typography>
            <Stack spacing={2}>
              <Box>
                <Typography sx={styles.storeDetailText}>住所:</Typography>
                <Typography sx={styles.storeContentText}>
                  <Link
                    href="https://maps.app.goo.gl/5KeYMFDBV4qLj6Dy5"
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    sx={{ color: 'inherit' }}
                  >
                    〒753−0056 <br />山口県山口市湯田温泉１丁目７−２２
                  </Link>
                </Typography>
              </Box>
              <Box>
                <Typography sx={styles.storeDetailText}>TEL:</Typography>
                <Typography sx={styles.storeContentText}>
                  <Link
                    href="tel:08056100408" 
                    underline="none"
                    sx={{ color: 'inherit' }}
                  >
                    080-5610-0408
                  </Link>
                  </Typography>
              </Box>
              <Box>
                <Typography sx={styles.storeDetailText}>営業時間:</Typography>
                <Typography sx={styles.storeContentText}>21:00 〜 26:00</Typography>
                <Typography sx={styles.storeContentText}>
                  （ご来店状況により延長あり）
                </Typography>
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
                <Typography sx={styles.storeContentText}>
                  <Link
                    href="https://maps.app.goo.gl/yc39m7XBcnN9yoco7"
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    sx={{ color: 'inherit' }}
                  >
                    〒745−0014 <br />山口県周南市飯島町２丁目１６　セウズール２−１
                  </Link>
                </Typography>
              </Box>
              <Box>
                <Typography sx={styles.storeDetailText}>TEL:</Typography>
                <Typography sx={styles.storeContentText}>
                  <Link
                      href="tel:080-8243-7202" 
                      underline="none"
                      sx={{ color: 'inherit' }}
                    >
                      080-8243-7202
                    </Link>
                </Typography>
              </Box>
              <Box>
                <Typography sx={styles.storeDetailText}>営業時間:</Typography>
                <Typography sx={styles.storeContentText}>21:00 〜 26:00</Typography>
                <Typography sx={styles.storeContentText}>
                  （ご来店状況により延長あり）
                </Typography>
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
