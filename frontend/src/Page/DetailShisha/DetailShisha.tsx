import React, { memo, useEffect } from 'react'
import CustomLayout from '../../Component/modules/Layout/CustomLayout'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Height } from '@mui/icons-material'
import CustomTypography from '../../Component/atoms/Typography/CustomTypography'

const DetailShisha = memo(() => {
    // ページがマウントされた際にトップにスクロール
    useEffect(() => {
        window.scrollTo(0, 0);  // ページの一番上にスクロール
    }, []);
    return (
        <>
            <Box height={"100%"}>
                <Box sx={{ height: "80px" }} id="detail">
                    <CustomTypography displayText={"What's Shisha"} tittleFlag />
                </Box>
                <Box height={"100%"} >
                    <Container maxWidth="md" sx={{ display: "flex", width: "100%", borderTop: "dotted 1px #fff", mt: "50px" }}>
                        <Box sx={{ width: "100%", padding: "30px" }} >
                            <Typography fontSize={"32px"} sx={{ textAlign: "center", color: "#FFF9E6", fontWeight: "bold" }}>
                                シーシャ（水タバコ）とは
                            </Typography>
                            <Typography fontSize={"24px"}>
                                <br />
                                水パイプという専用の喫煙具を使い、葉たばこの煙を水にくぐらせて濾過したものを、長いホースから吸う嗜好品です。
                                煙が水を通って冷やされることで、やわらかな味わいになり、噛みタバコに比べてニコチンやタールなどの有害物質が少ないのが特徴です。<br />
                                <br />
                                シーシャで使用する葉たばこは、さまざまな香料や糖蜜などで味・香りが付けられており、フルーツ系からスパイス系まで数百種類のフレーバーが存在するとされています。
                                複数のフレーバーをミックスしてオリジナルフレーバーを作ることも可能なので、好みや気分によってさまざまなアレンジを楽しめます。
                                <br />
                                <br />
                                また、1回の燃焼時間は1時間程度で、紙タバコと比べて長時間喫煙できるのもポイントです。
                            </Typography>
                        </Box>
                    </Container>
                    <Container maxWidth="md" sx={{ display: "flex", width: "100%", borderTop: "dotted 1px #fff" }}>
                        <Box sx={{ width: "100%", padding: "30px" }} >
                            <Typography fontSize={"32px"} sx={{ textAlign: "center", color: "#FFF9E6", fontWeight: "bold" }}>
                                シーシャの歴史
                            </Typography>
                            <Typography fontSize={"24px"}>
                                <br />
                                シーシャ（水タバコ）の発祥には諸説あり、オスマントルコ、エジプト、インドなどが有力視されています。そもそも、タバコそのものは南米大陸原産で、15世紀に広まり始めました。現在、シーシャは世界中で親しまれ、地域や国によって異なる呼び方が存在します。エジプトや中東では「シーシャ」、アメリカでは「フーカー」、トルコでは「ナルギーレ」と呼ばれるのが一般的です。<br /><br />

                                当初、シーシャはタバコの葉を糖蜜に漬けたものを吸うものでしたが、ここ30年ほどで果物やハーブの甘い香りを加えるフレーバー付きタバコが主流となりました。その流行の起源はエジプトのナハラ社にあるとされ、リンゴジャムを使ってタバコの葉を漬けたところ、意外にも美味しく、人気を博したのです。<br /><br />

                                この30年のフレーバーシーシャの流行は瞬く間に世界中に広まりましたが、日本は例外的に空白地帯でした。しかし、最近になってシーシャ文化が国内でも注目を集め始めており、まさに今がブームの始まりといえるでしょう。
                            </Typography>
                        </Box>
                    </Container>
                    <Container maxWidth="md" sx={{ display: "flex", width: "100%", borderTop: "dotted 1px #fff", borderBottom: "dotted 1px #fff" }}>
                        <Box sx={{ width: "100%", padding: "30px" }} >
                            <Typography fontSize={"32px"} sx={{ textAlign: "center", color: "#FFF9E6", fontWeight: "bold" }}>
                                Q&A
                            </Typography>
                            <Typography fontSize={"24px"}>
                                <br />
                                Q：シーシャは何歳から？
                                <br /><br />

                                A：お酒とタバコと同じく20歳以上となります。<br /><br /><br />
                                Q：シーシャは違法ですか？
                                <br /><br />

                                A：シーシャに違法性はなく、日本でも合法です。
                                シーシャのフレーバーにはたばこの葉が使用されているため、法律上は紙タバコと同じ「製造たばこ」に該当します。<br /><br /><br />

                                Q：シーシャの魅力はなんですか？
                                <br /><br />

                                A：高いリラックス効果があります。シーシャ（水タバコ）は1〜2時間と長く楽しめるのが特徴です。気の向くまま自由なお時間をお楽しみいただけます。また、数多くのフレーバーを取り揃えているため、その日の気分で楽しむことができます。<br /><br /><br />

                                Q：シーシャは体に悪いですか？
                                <br /><br />

                                A：シーシャには主に３つの有害物質が含まれています。
                                紙タバコに比べると少量とはなりますが、そのリスクについては理解しておくことが重要です。<br /><br /><br />
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                {/* 背景画像のスタイルを定義 */}
                {/* <Box sx={{
                    height: "100%"
                }}> */}
                {/* ここで、コンテンツ部分のみスクロール */}
                {/* <CustomLayout tittleText="What's Shisha" backgroundBorder={bgStyle}> */}
                {/* <Container maxWidth="md" sx={{ display: "flex", width: "100%", borderTop: "dotted 1px #fff", mt: "50px" }}>
                            <Box sx={{ width: "100%", padding: "30px" }} >
                                <Typography fontSize={"32px"} sx={{ textAlign: "center", color: "#FFF9E6", fontWeight: "bold" }}>
                                    シーシャ（水タバコ）とは
                                </Typography>
                                <Typography fontSize={"24px"}>
                                    <br />
                                    水パイプという専用の喫煙具を使い、葉たばこの煙を水にくぐらせて濾過したものを、長いホースから吸う嗜好品です。
                                    煙が水を通って冷やされることで、やわらかな味わいになり、噛みタバコに比べてニコチンやタールなどの有害物質が少ないのが特徴です。<br />
                                    <br />
                                    シーシャで使用する葉たばこは、さまざまな香料や糖蜜などで味・香りが付けられており、フルーツ系からスパイス系まで数百種類のフレーバーが存在するとされています。
                                    複数のフレーバーをミックスしてオリジナルフレーバーを作ることも可能なので、好みや気分によってさまざまなアレンジを楽しめます。
                                    <br />
                                    <br />
                                    また、1回の燃焼時間は1時間程度で、紙タバコと比べて長時間喫煙できるのもポイントです。
                                </Typography>
                            </Box>
                        </Container>
                        <Container maxWidth="md" sx={{ display: "flex", width: "100%", borderTop: "dotted 1px #fff" }}>
                            <Box sx={{ width: "100%", padding: "30px" }} >
                                <Typography fontSize={"32px"} sx={{ textAlign: "center", color: "#FFF9E6", fontWeight: "bold" }}>
                                    シーシャの歴史
                                </Typography>
                                <Typography fontSize={"24px"}>
                                    <br />
                                    シーシャ（水タバコ）の発祥には諸説あり、オスマントルコ、エジプト、インドなどが有力視されています。そもそも、タバコそのものは南米大陸原産で、15世紀に広まり始めました。現在、シーシャは世界中で親しまれ、地域や国によって異なる呼び方が存在します。エジプトや中東では「シーシャ」、アメリカでは「フーカー」、トルコでは「ナルギーレ」と呼ばれるのが一般的です。<br /><br />

                                    当初、シーシャはタバコの葉を糖蜜に漬けたものを吸うものでしたが、ここ30年ほどで果物やハーブの甘い香りを加えるフレーバー付きタバコが主流となりました。その流行の起源はエジプトのナハラ社にあるとされ、リンゴジャムを使ってタバコの葉を漬けたところ、意外にも美味しく、人気を博したのです。<br /><br />

                                    この30年のフレーバーシーシャの流行は瞬く間に世界中に広まりましたが、日本は例外的に空白地帯でした。しかし、最近になってシーシャ文化が国内でも注目を集め始めており、まさに今がブームの始まりといえるでしょう。
                                </Typography>
                            </Box>
                        </Container>
                        <Container maxWidth="md" sx={{ display: "flex", width: "100%", borderTop: "dotted 1px #fff", borderBottom: "dotted 1px #fff" }}>
                            <Box sx={{ width: "100%", padding: "30px" }} >
                                <Typography fontSize={"32px"} sx={{ textAlign: "center", color: "#FFF9E6", fontWeight: "bold" }}>
                                    Q&A
                                </Typography>
                                <Typography fontSize={"24px"}>
                                    <br />
                                    Q：シーシャは何歳から？
                                    <br /><br />

                                    A：お酒とタバコと同じく20歳以上となります。<br /><br /><br />
                                    Q：シーシャは違法ですか？
                                    <br /><br />

                                    A：シーシャに違法性はなく、日本でも合法です。
                                    シーシャのフレーバーにはたばこの葉が使用されているため、法律上は紙タバコと同じ「製造たばこ」に該当します。<br /><br /><br />

                                    Q：シーシャの魅力はなんですか？
                                    <br /><br />

                                    A：高いリラックス効果があります。シーシャ（水タバコ）は1〜2時間と長く楽しめるのが特徴です。気の向くまま自由なお時間をお楽しみいただけます。また、数多くのフレーバーを取り揃えているため、その日の気分で楽しむことができます。<br /><br /><br />

                                    Q：シーシャは体に悪いですか？
                                    <br /><br />

                                    A：シーシャには主に３つの有害物質が含まれています。
                                    紙タバコに比べると少量とはなりますが、そのリスクについては理解しておくことが重要です。<br /><br /><br />
                                </Typography>
                            </Box>
                        </Container> */}
                {/* </CustomLayout> */}
            </Box>
        </>
    )
})

export default DetailShisha
