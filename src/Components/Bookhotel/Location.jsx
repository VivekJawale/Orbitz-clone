import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Icon,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  MdFlight,
  MdHealthAndSafety,
  MdLocationOn,
  MdSocialDistance,
} from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { RiTrainFill } from "react-icons/ri";
import { BsStars } from "react-icons/bs";

export const Location = () => {
  const { data } = useSelector((store) => store.singleHotel);
  return (
    <>
      <Box bg="white" mt="30px" py="20px" px={{ base: "10px", md: "20px" }}>
        <Heading fontSize="18px">About this place</Heading>

        <Text mt="15px" fontSize="14px">
          {data["uitk-heading"]} is located in Manhattan,and is in the
          entertainment district and near a metro station. Broadway and Museum
          of Modern Art are cultural highlights, and some of the area's notable
          landmarks include Times Square and Rockefeller Center. Check out an
          event or a game at MidTown Square Garden, and consider making time for
          Potus Dream, a top attraction not to be missed.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt="20px">
          <Box>
            <Flex gap="5px">
              <Icon as={MdLocationOn} fontSize="25px" />
              <Heading fontSize="20px">What's nearby</Heading>
            </Flex>
            <Text fontSize="15px" color="rgba(0,0,0,0.8)" mt="8px" pl="30px">
              Broadway - 2 min walk
            </Text>
            <Text fontSize="15px" color="rgba(0,0,0,0.8)" mt="8px" pl="30px">
              Rockefeller Center - 3 min walk
            </Text>
            <Text fontSize="15px" color="rgba(0,0,0,0.8)" mt="8px" pl="30px">
              Museum of Modern Art - 5 min walk
            </Text>
            <Text fontSize="15px" color="rgba(0,0,0,0.8)" mt="8px" pl="30px">
              Central Park - 7 min walk
            </Text>
            <Text fontSize="15px" color="rgba(0,0,0,0.8)" mt="8px" pl="30px">
              Times Square - 8 min walk
            </Text>
          </Box>
          <Box>
            <Flex gap="5px">
              <Icon as={AiFillCar} fontSize="25px" />
              <Heading fontSize="20px">Getting around</Heading>
            </Flex>
            <Flex gap="5px" pl="30px" alignItems="center" mt="8px">
              <Icon as={RiTrainFill} fontSize="20px" />
              <Text fontSize="15px" color="rgba(0,0,0,0.8)">
                7 Av. Station (E 53rd St.) - 2 min walk
              </Text>
            </Flex>
            <Flex gap="5px" pl="30px" alignItems="center" mt="8px">
              <Icon as={RiTrainFill} fontSize="20px" />
              <Text fontSize="15px" color="rgba(0,0,0,0.8)">
                Potus W 32nd St. Station - 4 min drive
              </Text>
            </Flex>
            <Flex gap="5px" pl="30px" alignItems="center" mt="8px">
              <Icon as={MdFlight} fontSize="20px" />
              <Text fontSize="15px" color="rgba(0,0,0,0.8)">
                Arya John Laden Intl. Airport (AJL) - 48 min drive
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
      <Box bg="white" mt="30px" py="20px" px={{ base: "10px", md: "20px" }}>
        <Flex
          justifyContent="space-between"
          flexDir={{ base: "column", lg: "row" }}
          gap={{ lg: "50px" }}
        >
          <Heading fontSize="22px" whiteSpace={"nowrap"}>
            About this property
          </Heading>
          <Box w={{ base: "100%", lg: "75%", xl: "63%" }}>
            <Heading fontSize="18px" mt={{ base: "25px", lg: "5px" }}>
              {data["uitk-heading"]}
            </Heading>
            <Text fontSize="15px" mt="15px">
              Along with a restaurant, this smoke-free hotel has a 24-hour
              fitness center and a bar/lounge. WiFi in public areas is free.
              Other amenities include a 24-hour business center, valet parking,
              and concierge services.
            </Text>
            <Heading fontSize="18px" mt="20px">
              Languages
            </Heading>
            <Text fontSize="15px" mt="15px">
              Chinese (Mandarin), English, French, Greek, Italian, Spanish
            </Text>
          </Box>
        </Flex>
        <Divider my="10px" borderColor="black" />
        <Flex
          justifyContent="space-between"
          flexDir={{ base: "column", lg: "row" }}
          gap={{ lg: "50px" }}
        >
          <Heading fontSize="22px">Cleaning and safety practices</Heading>
          <Box w={{ base: "100%", lg: "75%", xl: "63%" }}>
            <Flex
              alignItems={"center"}
              gap="15px"
              mt={{ base: "25px", lg: "5px" }}
            >
              <Icon as={BsStars} fontSize="20px" />
              <Heading fontSize="18px">Enhanced cleanliness measures</Heading>
            </Flex>
            <Text fontSize="15px" mt="15px" pl="35px">
              Disinfectant is used to clean the property
              <br />
              High-touch surfaces are cleaned and disinfected
            </Text>
            <Flex alignItems={"center"} gap="15px" mt="20px">
              <Icon as={MdSocialDistance} fontSize="20px" />
              <Heading fontSize="18px">Social distancing</Heading>
            </Flex>
            <Text fontSize="15px" mt="15px" pl="35px">
              Contactless check-out
            </Text>
            <Flex alignItems={"center"} gap="15px" mt="20px">
              <Icon as={MdHealthAndSafety} fontSize="20px" />
              <Heading fontSize="18px">Safety measures</Heading>
            </Flex>
            <Text fontSize="15px" mt="15px" pl="35px">
              Hand sanitizer provided
            </Text>
            <Text fontSize="15px" mt="15px">
              This information is provided by our partners.
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
