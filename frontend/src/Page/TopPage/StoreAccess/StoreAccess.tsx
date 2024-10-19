import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { memo } from 'react';

const StoreAccess = memo(() => {
  return (
    <>
      <Box
        height="1000px"
        sx={{
          backgroundImage: `url('/storeAccess_bgImage.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Box height="700px"
          sx={{ height: "20px", padding: "50px" }}>
        <Typography sx={{ fontFamily: "Academy Engraved LET", fontSize: "40px" }}>ACCESS／STORE</Typography>
        </Box>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={8} // 左右ボックス間のスペースを広めに
          sx={{ padding: '0 20px' }} // 画面端にぶつからないように余白を追加
        >
          {/* 湯田店 */}
          <Box sx={{ width: "40%", backgroundColor: "rgb(110, 110, 110, 0.4)", padding: '20px', borderRadius: '8px'}}>
                <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "16px" }}>湯田店</Typography>
                <Stack spacing={2}>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>住所:</Typography>
                <Typography>〒753−0056</Typography>
                <Typography>山口県山口市湯田温泉１丁目７−２２</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>TEL:</Typography>
                <Typography>080-5610-0408</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>営業時間:</Typography>
                <Typography>21:00 〜 26:00</Typography>
                <Typography>（ご来店状況により延長あり）</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>定休日:</Typography>
                <Typography>木曜日</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>席数:</Typography>
                <Typography>20席</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>決済方法:</Typography>
                <Typography>クレジットカード：可</Typography>
                <Typography>QRコード決済：可</Typography>
                <Typography>現金：可</Typography>
              </Box>
            </Stack>
          </Box>

          {/* 徳山店 */}
          <Box sx={{ width: "40%", backgroundColor: "rgb(110, 110, 110, 0.4)",  padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "16px" }}>徳山店</Typography>
            <Stack spacing={2}>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>住所:</Typography>
                <Typography>〒745−0014</Typography>
                <Typography>山口県周南市飯島町２丁目１６　セウズール２−１</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>TEL:</Typography>
                <Typography>080-8243-7202</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>営業時間:</Typography>
                <Typography>21:00 〜 26:00</Typography>
                <Typography>（ご来店状況により延長あり）</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>定休日:</Typography>
                <Typography>木曜日</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>席数:</Typography>
                <Typography>35席</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>決済方法:</Typography>
                <Typography>クレジットカード：可</Typography>
                <Typography>QRコード決済：可</Typography>
                <Typography>現金：可</Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
});

export default StoreAccess;
