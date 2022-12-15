import { Box, Button, Heading, Image, Input, Stack } from "@chakra-ui/react";
import React from "react";

const SecondLast = () => {
  return (
    <Box h={400} className="secondLast" >
      <Stack
      
        h="100%"
        direction={{ base: "column", lg: "row" }}
      >
        <Box >
          <Image
            w="100%"
            h={"100%"}
            src="https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg"
            alt="mobileseeing"
          />
        </Box>
        <Box w="100%" display="flex" >
          <Box  w="120%">
            <Box>
              <Heading>Rewards are waiting for you in the Orbitz app</Heading>
              <Box
                width={"90%"}
                textAlign="left"
                marginLeft={10}
                fontSize="15px"
              >
                <li>
                  Earn 4% back when you book your hotel in app, vs. 3% on site
                </li>
                <li>Get flight status and gate number notifications</li>
                <li>
                  Have questions about your stay? Message your hotel right in
                  the app
                </li>
              </Box>
  <Box  display={{ base: "none", lg: "contents" }}>
  <Box fontSize={{base:"12px" ,lg:"20px"}}>Text yourself a download link</Box>
  <br />

<Input type="text"  placeholder="your PIN Code"/>
<br />
<br />
<Input type="text"  placeholder="ask your query" />
<br />

  </Box>
  <br />
  <Button width={{base:"100%" ,lg:"40%"}} bg={"pink.600"}>get the answer</Button>

            </Box>
          </Box>
          <Box
           
            w="45%"
            display={{ base: "none", lg: "contents" }}
          >
            <Box  w="40%">
            <Image
              h="30%"
              src="https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_orbitz.png"
              alt="qrcode"
            />
            scan the QR code
            </Box>
            
            <br />
          
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default SecondLast;
