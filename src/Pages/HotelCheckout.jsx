import { Box, Heading, Flex, Icon, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { useSelector } from "react-redux";
import { CheckoutMainSection } from "../Components/HotelCheckout/CheckoutMainSection";
import { CheckoutSidebar } from "../Components/HotelCheckout/CheckoutSidebar";
import { Logo } from "../Components/Logo";

export const HotelCheckout = () => {
  const { roomType, data } = useSelector((store) => store.singleHotel);
  const { data: userData } = useSelector((store) => store.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Flex
        bg="#0a192f"
        borderTop="4px solid dodgerblue"
        px={{ base: "10px", sm: "20px", lg: "50px", xl: "80px" }}
        py="10px"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Logo iconColor={"yellow"} w="150px" h="40px" textColor={"wheat"} />
        <Text color="cyan" cursor="pointer">
          Hello, {userData.firstName}
        </Text>
      </Flex>
      <Box
        px={{ sm: "20px", lg: "50px", xl: "80px" }}
        bg="rgba(0,0,0,0.04)"
        pt="10px"
        pb="20px"
      >
        <Heading fontSize="25px" px={{ base: "10px", sm: "none" }}>
          Secure booking — only takes 2 minutes!
        </Heading>
        <Flex
          color="teal"
          gap="10px"
          alignItems="center"
          mt="20px"
          px={{ base: "10px", sm: "none" }}
        >
          <Icon as={TiTick} fontSize="25px" cursor="pointer" />
          <Text fontSize="15px">
            You've picked a winner! This hotel is rated {data["uitk-text 3"]}/5
          </Text>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          gap="10px"
          flexDir={{ base: "column-reverse", md: "row" }}
          mt="30px"
        >
          <CheckoutMainSection />
          <CheckoutSidebar />
        </Flex>
        <Text
          fontSize="14px"
          fontWeight={600}
          mt="30px"
          textAlign="center"
          px="20px"
          color="teal"
        >
          Tell us what you think
        </Text>
        <Text
          fontSize="14px"
          fontWeight={400}
          mt="10px"
          textAlign="center"
          px="20px"
          color="teal"
        >
          A Nomado Group Company. All Rights Reserved.
        </Text>

        <Text
          fontSize="20px"
          fontWeight={600}
          mt="10px"
          textAlign="center"
          px="20px"
          color="teal"
          fontFamily="cursive"
        >
          Nomado Travellers
        </Text>
      </Box>
    </>
  );
};
