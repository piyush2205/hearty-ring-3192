import Navbar from "./navbar"
import img from "./img.png"
import img2 from "./banner.webp"
import { Box } from "@chakra-ui/react"
import { Heading } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react"
import shoe1 from "./shoe1.png"
import Shoe2 from "./Shoe2.png"
import shoe3 from "./shoe3.png"
import { Container } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import shoe4 from "./shoe4.png"
import shoe5 from "./shoe5.png"
import shoe6 from "./shoe6.png"
import shoe7 from "./shoe7.png"
import Footer from "./Footer"
export default function HomePage() {
    return (<>
        <Navbar />
        <Container mt="10px" >
            <img src={img} alt="winter" style={{ width: "1440px", height: "440px" }} />
        </Container>
        <Box mt="30px">
            <img src={img2} alt="banner" />
            

        </Box>

        <Box bg="#f3f3f3" mt="-40px" h="328px">

            <Heading fontSize={"46px"} color="#000" >WINTER REBOOT </Heading>
            <div style={{ width: "500px", margin: "Auto" }}>
                <p style={{
                    fontFamily: "sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    fontStretch: "normal",
                    lineHeight: 1.5,
                    textAlign: "center",
                    color: "#000",
                    padding: "0 5px 18px"
                }}
                >
                    Reworking a staple shoe in iconic style, meet our Orianna Mid boot. Crafted in responsibly sourced dark sand suede for a premium look, its chunky profile ticks the box for on-trend, while snug faux shearling linings keeps toes toasty when braving cooler climes. Clarks’ stitching detail nods to our heritage, making every tread timeless, too.
                </p>

                <Button h="36" w="226" m="0 10px 10px" p="10px 28px" borderRadius="5px" bg="#FFFFFF" border="0.5px solid black" fontSize="14px" >Shop Women’s Boots</Button>

                <Button h="36" fontSize="14px" w="226" m="0 10px 10px" p="10px 28px" borderRadius="5px" bg="#FFFFFF" border="0.5px solid black" >Shop Men’s Boots
                </Button>

            </div>

        </Box>

        <Container display="flex" mt="50px" >

            <Box h="395px" w="700px">
                <img src={shoe1} alt="shoe" style={{ height: "395px", width: "700px", marginLeft: "40px" }} />
                <h2>COMFORTABLY WARM</h2>
                <p style={{ marginLeft: "40px" }}>Keep warm, and look cool in Opal Sky, our Chelsea-inspired suede upper boot.  Step out in feel-good style every time with our Ultimate Comfort footbed and slip-resistant sole.</p>

                <Button h="36" w="226" m="0 10px 10px" p="10px 28px" borderRadius="5px" bg="#FFFFFF" border="0.5px solid black" fontSize="14px" >Shop Opal Sky on Sale
                </Button>

                <Button h="36" fontSize="14px" w="226" m="0 10px 10px" p="10px 28px" borderRadius="5px" bg="#FFFFFF" border="0.5px solid black" >Shop Women’s Warm Boots
                </Button>

            </Box>

            <Box h="395px" w="700px" marginLeft="40px" >
                <img src={Shoe2} alt="shoe" style={{ height: "395px", width: "700px", marginLeft: "40px" }} />
                <h2>WEATHER READY WITH A TWIST</h2>
                <p style={{ marginLeft: "40px" }}>Keep warm, and look cool in Opal Sky, our Chelsea-inspired suede upper boot.  Step out in feel-good style every time with our Ultimate Comfort footbed and slip-resistant sole.  </p>
                <Button h="36" w="226" m="0 10px 10px" p="10px 28px" borderRadius="5px" bg="#FFFFFF" border="0.5px solid black" fontSize="14px" >Shop Women’s Boots
                </Button>

                <Button h="36" fontSize="14px" w="226" m="0 10px 10px" p="10px 28px" borderRadius="5px" bg="#FFFFFF" border="0.5px solid black" >Shop Men’s Boots
                </Button>
            </Box>

        </Container>


        <Box mt="300px"  >
            <img src={shoe3} style={{ height: "500px", width: "1515px" }} alt="shoe3" />
        </Box>
        
        <Container h="350px" w="auto" mt="-5px" bg="#d0c9b9"  >
            <h2 style={{ width: "800px", margin: "auto", fontSize: "45px", fontFamily: "sans-serif" }}>8TH STREET BY RONNIE FIEG FOR CLARKS ORIGINALS</h2>
            <p style={{ marginLeft: "40px", width: "700px", margin: "auto", marginBottom: "20px", lineHeight: "2" }}> With nearly three decades of footwear industry expertise to his name, American designer and founder of Kith Ronnie Fieg is a bona fide classic kicks aficionado- making him the perfect partner for a Clarks Originals collab.   </p>
            <Button h="36" w="226" m="0 20px 30px" p="10px 28px" borderRadius="5px" bg="#FFFFFF" border="0.5px solid black" fontSize="14px" >Shop the 8th Street Collection
            </Button>

            <Button h="36" fontSize="14px" w="226" m="0 20px 30px" p="10px 28px" borderRadius="5px" bg="#FFFFFF" border="0.5px solid black" >See The Feature
            </Button>
        </Container>

        <Box display="flex" gap="30px" mt="40px" position="relative" >
            <Image src={shoe4} w="340px" ml="30px"></Image>
            <div style={{ marginTop: "150px", position: "absolute", marginLeft: "20px", backgroundColor: "#fff", height: "47px", width: "137px" }} >
                <a href="" style={{ color: "#000" }}>Shop Women</a>
            </div>
            <Image src={shoe5} w="340px" ></Image>
            <div style={{ marginTop: "150px", position: "absolute", marginLeft: "400px", backgroundColor: "#fff", height: "47px", width: "137px" }}>
                <a href="" style={{ color: "#000" }}>Shop men</a>
            </div>
            <Image src={shoe6} w="340px"></Image>
            <div style={{ marginTop: "150px", position: "absolute", marginLeft: "770px", backgroundColor: "#fff", height: "47px", width: "137px" }}>
                <a href="" style={{ color: "#000" }}>Shop Originals</a>
            </div>
            <Image src={shoe7} w="340px" ></Image>
            <div style={{ marginTop: "150px", position: "absolute", marginLeft: "1140px", backgroundColor: "#fff", height: "47px", width: "137px" }}>
                <a href="" style={{ color: "#000" }}>Shop Kids</a>
            </div>
        </Box>
        
        <Footer />
    </>)
}