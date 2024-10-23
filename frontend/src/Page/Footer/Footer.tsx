import { Box, Menu, MenuItem, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import CustomTypography from '../../Component/atoms/Typography/CustomTypography'

const Footer = memo(() => {
    return (
        <>        <Box sx={{ borderTop: "solid 3px #000", display: "flex", justifyContent: "center", alignItems: "center" }} pt={5}>
            <Box mr={1}>
                <CustomTypography displayText={"ShishaBar"} tittleFlag fontSize="20px" />
            </Box>
            <Box>
                <CustomTypography displayText={`KK`} tittleFlag />
            </Box>
        </Box>
            <Stack direction="row" spacing={45} sx={{ justifyContent: "center" }} mt={10}>
                <Box>
                    <CustomTypography displayText={"Information"} tittleFlag fontSize='25px' />
                    <Menu open>
                        <MenuItem>a</MenuItem>
                    </Menu>
                </Box>
                <Box>
                    <CustomTypography displayText={"Menu"} tittleFlag fontSize='25px' />
                </Box>
                <Box>
                    <CustomTypography displayText={"StoreInfo"} tittleFlag fontSize='25px' />
                </Box>
            </Stack>
        </>

    )
})

export default Footer