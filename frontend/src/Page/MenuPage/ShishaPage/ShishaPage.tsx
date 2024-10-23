import { Card, CardActionArea, CardContent, CardMedia, Stack, useMediaQuery } from '@mui/material';
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
  },
}

const ShishaPage = memo(() => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box height="800px" sx={styles.pageWrapper}>
        <Box id="shisha">
          <Typography>SHISHA MENU</Typography>
        </Box>


      </Box>
    </>
  )
})

export default ShishaPage;
