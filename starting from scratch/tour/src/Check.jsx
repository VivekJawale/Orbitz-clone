import { Box,  Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const Check = () => {
  return (
    <Box border={"3px solid "} w="100%">
      <Box border={"2px solid red"}>
        <img
          src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
          alt=" expedia group logo"
        />
      </Box>

      < >
        <Box border={"3px solid blue"}>
          <Stack direction={{ base: "column", lg: "row" }} gap={10}>
            <Flex border="2px solid red">
              <Stack border={"3px solid blue"} gap={10}>
                <Stack spacing='10px' >
                  <Heading>
                    {" "}
                    <Box>sachin</Box>
                  </Heading>
                  <a href="/" target="_blank" rel="noreferrer" >
                  <Box _hover={{textDecoration:"underline"}}>sachin</Box>
                  </a>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                </Stack>
              </Stack>
            
              <Box border={"3px solid blue"}>
                <Stack>
                  <Heading>
                    {" "}
                    <Box>sachin</Box>
                  </Heading>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                </Stack>
              </Box>
            </Flex>
            <Flex border="2px solid red">
              <Box border={"3px solid blue"}>
                <Stack>
                  <Heading>
                    {" "}
                    <Box>sachin</Box>
                  </Heading>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                </Stack>
              </Box>
              <Box border={"3px solid blue"}>
                <Stack>
                  <Heading>
                    {" "}
                    <Box>sachin</Box>
                  </Heading>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                  <Box>sachin</Box>
                </Stack>
              </Box>
            </Flex>
          </Stack>
        </Box>
      </ >
      <hr />
      <Box border={"3px solid green"}>
        <p>
          © 2022 Orbitz, LLC, an Expedia Group Company. All rights reserved.
        </p>
        <p>
          Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered
          trademarks of Orbitz, LLC. CST# 2083930-50.
        </p>
      </Box>
    </Box>
  );
};

export default Check;
