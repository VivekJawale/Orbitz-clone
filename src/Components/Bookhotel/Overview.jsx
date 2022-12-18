import { Box, Heading, Text, Icon, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { RiArrowRightSLine } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import { BiWifi } from "react-icons/bi";
import {
  MdOutlineAir,
  MdPets,
  MdRestaurantMenu,
  MdLocalLaundryService,
  MdStar,
} from "react-icons/md";

export const Overview = () => {
  const { data } = useSelector((store) => store.singleHotel);
  return (
    <Flex bg="white" px={{ base: "14px", md: "20px" }} py="20px">
      <Box>
        <Heading
          fontSize={{ base: "20px", sm: "22px", md: "25px", lg: "28px" }}
        >
          {data["uitk-heading"]}
        </Heading>
        <Flex mt="10px" fontSize="20px" gap="2px" cursor="pointer">
          {[1, 2, 3, 4, 5].map((ele) => (
            <Icon as={MdStar} key={ele} color="red" />
          ))}
        </Flex>
        <Text fontSize="18px" fontWeight={600} mt="15px">
          {data["uitk-text 3"]}
          {data["uitk-text 4"]} &nbsp;{data["uitk-text 5"]}
        </Text>
        <Text fontSize="14px" color="gray" mt="6px">
          Guest rated this property 4.5/5 for cleanliness.
        </Text>
        <Flex
          alignItems="center"
          gap="1px"
          fontSize="14px"
          color="teal"
          mt="6px"
          cursor="pointer"
        >
          <Text>See all {data["uitk-text 6"]}</Text>
          <Icon as={RiArrowRightSLine} fontSize="15px" />
        </Flex>

        <Text fontSize="18px" fontWeight={600} mt="20px">
          Popular amenities
        </Text>
        <SimpleGrid columns={2} spacing={4} mt="10px">
          {amenities.map((ele) => (
            <Flex gap="8px" alignItems={"center"} key={ele.text}>
              <Icon
                as={ele.icon}
                fontSize="20px"
                fontWeight={700}
                color="rgba(0,0,0,0.8)"
              />
              <Text fontSize={"14px"} color="rgba(0,0,0,0.7)">
                {ele.text}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

const amenities = [
  { text: "Free Wifi", icon: BiWifi },
  { text: "Air Conditioning", icon: MdOutlineAir },
  { text: "Pet Friendly", icon: MdPets },
  { text: "Restaurant", icon: MdRestaurantMenu },
  { text: "Laundry", icon: MdLocalLaundryService },
  { text: "Gym", icon: CgGym },
];
