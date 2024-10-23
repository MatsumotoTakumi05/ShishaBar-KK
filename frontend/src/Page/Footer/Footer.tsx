import { Box, Link, Stack } from '@mui/material';
import React, { memo } from 'react';
import CustomTypography from '../../Component/atoms/Typography/CustomTypography';
import InstagramLink from '../../Component/modules/InstagramLink/InstagramLink';

const Footer = memo(() => {
    const defaultPath = "/KK";

    // リンクを生成する関数
    const linkPage = (hash: string) => {
        const currentPath = window.location.pathname;

        // デフォルトのパスかハッシュの前の部分と一致する場合
        if (currentPath === defaultPath || currentPath === hash.split('#')[0]) {
            return `${currentPath}${hash}`; // 現在のパスにハッシュを追加
        } else {
            return `${defaultPath}${hash}`; // デフォルトパスにハッシュを追加
        }
    }

    return (
        <>
            <Box sx={{ borderTop: "solid 3px #000", display: "flex", justifyContent: "center", alignItems: "center" }} pt={5}>
                <Box mr={1}>
                    <CustomTypography displayText={"ShishaBar"} tittleFlag fontSize="20px" />
                </Box>
                <Box>
                    <CustomTypography displayText={`KK`} tittleFlag />
                </Box>
            </Box>
            <Stack direction="row" spacing={2} sx={{ margin: "0 auto", width: "300px", justifyContent: "center" }}>
                <InstagramLink />
            </Stack>
            <Stack direction="row" spacing={25} sx={{ justifyContent: "center" }} mt={4}>
                <Box>
                    <CustomTypography displayText={"Information"} tittleFlag fontSize='25px' />
                    <Box sx={{ mt: 2 }}>
                        <Link href={linkPage("#info")}>Information</Link>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Link href={linkPage("#about")}>About</Link>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Link href={linkPage("/AboutShisha#detail")}>Detail</Link>
                    </Box>
                </Box>
                <Box>
                    <CustomTypography displayText={"Menu"} tittleFlag fontSize='25px' />
                    <Box sx={{ mt: 2 }}>
                        <Link href={linkPage("#shisha")}>Shisha Menu</Link>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Link href={linkPage("#drink")}>Drink Menu</Link>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Link href={linkPage("#food")}>Food Menu</Link>
                    </Box>
                </Box>
                <Box>
                    <CustomTypography displayText={"StoreInfo"} tittleFlag fontSize='25px' />
                    <Box sx={{ mt: 2 }}>
                        <Link href={linkPage("#access")}>Store/Access</Link>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Link href={linkPage("#history")}>Store History</Link>
                    </Box>
                </Box>
            </Stack>
        </>
    );
});

export default Footer;
