import { Box, Container, Link, Stack, Typography } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover'
import React, { memo, useState } from 'react'

interface Info {
  date: string,
  text: string
}
const Information = memo(() => {

  // ダイアログの表示を管理
  const [isOpenDiaLog, setIsOpenDiaLog] = useState(false)

  const Information: Info[] = [
    {
      date: "2024/10/01",
      text: "Instagramの公開について"
    }
    , {
      date: "2024/10/14",
      text: "HPの公開についてお知らせ"
    }

  ]
  return (
    <Box height="600px">
      <Box sx={{ height: "20px", padding: "50px" }}>
        <Typography sx={{ fontFamily: "Academy Engraved LET", fontSize: "40px", }}>Information</Typography>
      </Box>
      <Container sx={{
        position: "absolute",
        top: "12%",
        zIndex: 15,
        backgroundColor: "rgb(110, 110, 110, 0.4)",
        color: "#fff",
        height: "500px",
        width: "60%",
        left: "20%",
        borderRadius: "2%",

      }}
      >
        <Container maxWidth="md"  >
          {Information.map((Info: Info) => {
            return (
              <Box sx={{ display: "flex", margin: "50px 0", borderBottom: "dotted 0.5px #fff" }}>
                <Box sx={{ justifyContent: "flex-start" }} >
                  <Typography sx={{ fontSize: "25px" }}>{Info.date}</Typography>
                </Box>
                <Box sx={{ marginLeft: "200px" }}>
                  <Link sx={{ fontSize: "25px", "&:hover": { opacity: "0.8" }, cursor: "pointer" }} underline="none"> {Info.text} </Link>
                </Box>
              </Box>
            )
          })}

        </Container>
      </Container>
    </Box>
  )
})

export default Information