import { Box } from '@mui/material'
import React, { memo } from 'react'
import StoreImage from './StoreImage/StoreImage'

const MainContent = memo(() => {
    return (
        <Box sx={{ height: "600px", width: "100%", bgcolor: "#000000" }}>
            <StoreImage />
        </Box>

    )
})

export default MainContent