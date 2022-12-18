import React from "react";
import { Box, Text, Button, Center } from "@chakra-ui/react";
export const Flow = () => {
  return (
    <Box
      w="30%"
      color="white"
      box-shadow="10px 10px 5px #aaaaaa"
      p={20}
      m="auto"
    >
      <Text pt="0px" mt="0px" fontWeight="bold" color="black">
        Members can access discounts, points and special features
      </Text>

      <Button w="100%" colorScheme={"pink"} mt="30px">
        Sign in
      </Button>

      <Center>
        {" "}
        <Text pt="20px" color="green">
          Create a free account
        </Text>
      </Center>

      <Text pt="10px" color="black">
        List of favourites
      </Text>
      <Text pt="10px" color="black">
        Loyalty program
      </Text>

      <Text pt="30px" color="blue">
        Feedback
      </Text>
    </Box>
  );
};
