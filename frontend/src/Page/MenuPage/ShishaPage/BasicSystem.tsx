import React, { memo } from "react";
import CustomLayout from "../../../Component/modules/Layout/CustomLayout";
import Box from "@mui/material/Box";
import CustomTypography from "../../../Component/atoms/Typography/CustomTypography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Paper, Typography } from "@mui/material";
import { theme } from "../../../Style/theme";

const BasicSystem = memo(() => {
  return (
    <Box
      height={"700px"}
      sx={{
        overflowY: "auto",
        backgroundImage: "url(/Normal_BgImage.jpeg)",
      }}
    >
      <Box height={"100%"}>
        <CustomLayout tittleText="Basic System">
          <Box
            sx={{
              backgroundColor: "rgba(110, 110, 110, 0.4)",
              height: "85%",
              width: "80%",
              borderRadius: "2%",
              margin: "0 auto",
            }}
          >
            <Container sx={{ color: "silver" }}>
              <Stack direction="row">
                <Box
                  sx={{
                    pt: "20px",
                    pl: "20px",
                    width: "50%",
                    textAlign: "center",
                    fontFamily: theme.typography,
                  }}
                >
                  <Paper
                    variant="outlined"
                    elevation={10}
                    sx={{ bgcolor: "#444444", color: "silver" }}
                  >
                    基本システム
                  </Paper>
                  <Stack direction="row" spacing={10} mt={5} mb={5}>
                    <Box width="50%" sx={{ textAlign: "left" }}>
                      <CustomTypography displayText="チャージ料金" />
                    </Box>
                    <Box width="50%">
                      <CustomTypography displayText="¥ 500" />
                    </Box>
                  </Stack>

                  <Paper
                    variant="outlined"
                    elevation={10}
                    sx={{ bgcolor: "#444444", color: "silver" }}
                  >
                    カラオケ
                  </Paper>
                  <Stack direction="row" spacing={10} mt={5}>
                    <Box width="50%" sx={{ textAlign: "left" }}>
                      <CustomTypography displayText="1曲" />
                    </Box>
                    <Box width="50%">
                      <CustomTypography displayText="¥ 200" />
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={10} mt={5} mb={5}>
                    <Box width="50%" sx={{ textAlign: "left" }}>
                      <CustomTypography displayText="歌い放題" />
                    </Box>
                    <Box width="50%">
                      <CustomTypography displayText="¥ 500" />
                    </Box>
                  </Stack>

                  <Paper
                    variant="outlined"
                    elevation={10}
                    sx={{ bgcolor: "#444444", color: "silver" }}
                  >
                    シーシャオプション
                  </Paper>
                  <Stack direction="row" spacing={10} mt={5} mb={5}>
                    <Box width="50%" sx={{ textAlign: "left" }}>
                      <CustomTypography displayText="アイスホース" />
                    </Box>
                    <Box width="50%">
                      <CustomTypography displayText="¥ 500" />
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={10} mt={5} mb={5}>
                    <Box width="50%" sx={{ textAlign: "left" }}>
                      <CustomTypography displayText="アルコール入り" />
                    </Box>
                    <Box width="50%">
                      <CustomTypography displayText="¥ 1,000" />
                    </Box>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    pt: "20px",
                    pl: "20px",
                    width: "50%",
                    textAlign: "center",
                    fontFamily: theme.typography,
                  }}
                >
                  <Paper
                    variant="outlined"
                    elevation={10}
                    sx={{ bgcolor: "#444444", color: "silver" }}
                  >
                    お得なシステム
                  </Paper>
                  <Stack
                    direction="row"
                    spacing={10}
                    borderBottom="solid 0.5px silver"
                    mt={5}
                  >
                    <Box width="50%" sx={{ textAlign: "left" }}>
                      <CustomTypography displayText="シーシャAセット" />
                    </Box>
                    <Box width="50%">
                      <CustomTypography displayText="¥ 3,000" />
                    </Box>
                  </Stack>
                  <Box>
                    <Box>
                      <Typography sx={{ textAlign: "left" }}>
                        【セット内容】
                      </Typography>
                    </Box>
                    <Stack direction="row" sx={{ textAlign: "center" }}>
                      <Typography>シーシャ料金　＋　</Typography>
                      <Typography>1ドリンク　＋　</Typography>
                      <Typography>チャージ料金</Typography>
                    </Stack>
                  </Box>

                  <Stack
                    direction="row"
                    spacing={10}
                    borderBottom="solid 0.5px silver"
                    mt={5}
                  >
                    <Box width="50%" sx={{ textAlign: "left" }}>
                      <CustomTypography displayText="シーシャBセット" />
                    </Box>
                    <Box width="50%">
                      <CustomTypography displayText="¥ 4,500" />
                    </Box>
                  </Stack>
                  <Box>
                    <Box>
                      <Typography sx={{ textAlign: "left" }}>
                        【セット内容】
                      </Typography>
                    </Box>
                    <Stack direction="row" sx={{ textAlign: "center" }}>
                      <Typography>シーシャ料金　＋　</Typography>
                      <Typography>飲み放題　＋　</Typography>
                      <Typography>チャージ料金</Typography>
                    </Stack>
                  </Box>

                  <Stack direction="row" spacing={10} mt={5}>
                    <Box width="50%" sx={{ textAlign: "left" }}>
                      <CustomTypography displayText="シーシャシェア" />
                    </Box>
                    <Box width="50%">
                      <CustomTypography displayText="¥ 1,000" />
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={10} mt={5}>
                    <Box width="50%" sx={{ textAlign: "left" }}>
                      <CustomTypography displayText="飲み放題（90分）" />
                    </Box>
                    <Box width="50%">
                      <CustomTypography displayText="¥ 2,000" />
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Container>
          </Box>
        </CustomLayout>
      </Box>
    </Box>
  );
});

export default BasicSystem;
