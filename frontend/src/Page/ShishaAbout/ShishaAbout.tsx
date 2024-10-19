import { Box, Typography } from '@mui/material'
import React, { memo } from 'react'
import CustomTypography from '../../Component/atoms/Typography/CustomTypography'
import CustomLayout from '../../Component/modules/Layout/CustomLayout'

const ShishaAbout = memo(() => {

    return (

        <CustomLayout tittleText={"Shisha About"}  >
            <Box width={"40%"} sx={{ padding: "50px" }}>
                <CustomTypography displayText={<>
                    シーシャは、水タバコの一種で、香り豊かなフレーバーの煙をゆったりと楽しめる嗜好品です。<br />
                    フルーツやミントなどのフレーバー付きタバコ葉を炭で加熱し、水を通して煙を吸うため、煙がまろやかで吸いやすいのが特徴です。<br />
                    フレーバーの種類も豊富なため、ぜひお気に入りのフレーバーを見つけ、極上のリラックス体験をお楽しみください。
                </>} />
            </Box>
        </CustomLayout>
    )
})

export default ShishaAbout