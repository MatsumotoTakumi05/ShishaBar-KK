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
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: 'rgba(110, 110, 110, 0.6)',
    padding: '30px',
    borderRadius: '8px',
    width: '50%',
    margin: '20px auto',
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    color: '#ffffff',
    borderRadius: '8px',
  },
};

const menuItems = [
  { name: 'フライドポテト', price: '¥600' },
  { name: 'チキンナゲット', price: '¥600' },
  { name: 'ナッツ', price: '¥500' },
  { name: 'ポテトチップス', price: '¥500' },
  { name: 'チョコレート盛り合わせ', price: '¥500' },
  { name: 'カップ麺', price: '¥500' },
];

const SnackPage = memo(() => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={styles.pageWrapper}>
      <Box id="snack-menu" sx={{ marginBottom: '30px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
          SNACK MENU
        </Typography>
      </Box>

      <Box sx={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <Box key={index} sx={styles.menuItem}>
            <Typography 
              variant="body1" 
              sx={{ fontSize: { xs: '18px', sm: '22px', md: '26px' } }}
            >
              {item.name}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ fontSize: { xs: '18px', sm: '22px', md: '26px' }, fontWeight: 'bold' }}
            >
              {item.price}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
});

export default SnackPage;
