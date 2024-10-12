import { Link, Stack } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import React, { memo } from 'react'

const Header = memo(() => {
    return (
        <>

            <AppBar position="fixed" sx={{ backgroundColor: "#000000" }}>
                <Stack spacing={95} direction="row" sx={{ height: "80px" }}>
                    <Box>
                        <img src='./store_icon.jpeg' style={{ height: "80px", width: "110px" }} />
                    </Box>
                    <Box>
                        <Stack spacing={6} direction="row" sx={{ marginTop: "35px", fontSize: "18px" }}>
                            <Link underline="none" color='#ffffff' sx={{ fontFamily: "Academy Engraved LET", cursor: "pointer" }}>Home</Link>
                            <Link underline="none" color='#ffffff' sx={{ fontFamily: "Academy Engraved LET", cursor: "pointer" }}>Menu</Link>
                            <Link underline="none" color='#ffffff' sx={{ fontFamily: "Academy Engraved LET", cursor: "pointer" }}>About</Link>
                            <Link underline="none" color='#ffffff' sx={{ fontFamily: "Academy Engraved LET", cursor: "pointer" }}>Store/Access</Link>
                        </Stack>
                    </Box>
                </Stack >
            </AppBar >
        </>
    )
})

export default Header