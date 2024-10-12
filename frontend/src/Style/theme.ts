import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
            },
        },
    }, breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }
});