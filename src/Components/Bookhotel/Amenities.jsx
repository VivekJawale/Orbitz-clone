import React from "react";
import { Box, Heading, Flex, Text, Icon, SimpleGrid } from "@chakra-ui/react";
import { FaWifi } from "react-icons/fa";
import {
  MdBusinessCenter,
  MdFamilyRestroom,
  MdLocalConvenienceStore,
  MdLocalParking,
  MdRestaurantMenu,
} from "react-icons/md";
import { SiSmartthings } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import { BsFillPersonCheckFill } from "react-icons/bs";

export const Amenities = () => {
  return (
    <>
      <Box bg="white" mt="40px" py="20px" px={{ base: "10px", md: "20px" }}>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5}>
          <Heading fontSize="22px" whiteSpace={"nowrap"}>
            Property amenities
          </Heading>
          <Box>
            <Flex
              alignItems={"center"}
              gap="15px"
              mt={{ base: "0px", lg: "5px" }}
            >
              <Icon as={FaWifi} fontSize="20px" />
              <Heading fontSize="18px">Internet</Heading>
            </Flex>
            <Text fontSize="15px" mt="15px" pl="35px">
              Available in all rooms: Free WiFi and wired Internet
              <br />
              Available in some public areas: Free WiFi
            </Text>
            <Flex alignItems={"center"} gap="15px" mt="20px">
              <Icon as={MdLocalParking} fontSize="20px" />
              <Heading fontSize="18px">Parking and transportation</Heading>
            </Flex>
            <Text fontSize="15px" mt="15px" pl="35px">
              Secured covered valet parking on site (USD 75 per day)
              <br />
              Limo/town car service
            </Text>
            <Flex alignItems={"center"} gap="15px" mt="20px">
              <Icon as={MdRestaurantMenu} fontSize="20px" />
              <Heading fontSize="18px">Food and drink</Heading>
            </Flex>
            <Text fontSize="15px" mt="15px" pl="35px">
              Buffet breakfast available for a fee daily 6:30 AM–11:30 AM: USD
              30 for adults and USD 30 for children
              <br />
              1 restaurant
              <br />
              1 bar
              <br />
              Room service available
            </Text>
            <Flex alignItems={"center"} gap="15px" mt="20px">
              <Icon as={MdRestaurantMenu} fontSize="20px" />
              <Heading fontSize="18px">Restaurants on site</Heading>
            </Flex>
            <Text fontSize="15px" mt="15px" pl="35px">
              Dabble Restaurant & Bar
            </Text>
            <Flex alignItems={"center"} gap="15px" mt="20px">
              <Icon as={SiSmartthings} fontSize="20px" />
              <Heading fontSize="18px">Things to do</Heading>
            </Flex>
            <Text fontSize="15px" mt="15px" pl="35px">
              24-hour fitness center
            </Text>
            <Flex alignItems={"center"} gap="15px" mt="20px">
              <Icon as={MdFamilyRestroom} fontSize="20px" />
              <Heading fontSize="18px">Family friendly</Heading>
            </Flex>
            <Text fontSize="15px" mt="15px" pl="35px">
              Laundry facilities
              <br />
              Rollaway/extra beds (surcharge)
            </Text>
            <Flex alignItems={"center"} gap="15px" mt="20px">
              <Icon as={MdLocalConvenienceStore} fontSize="20px" />
              <Heading fontSize="18px">Conveniences</Heading>
            </Flex>
            <Text fontSize="15px" mt="15px" pl="35px">
              Elevator
              <br />
              Free newspapers in lobby
              <br />
              Front-desk safe
            </Text>
          </Box>
          <Box>
            <Flex
              alignItems={"center"}
              gap="15px"
              mt={{ base: "0px", lg: "5px" }}
            >
              <Icon as={BsFillPersonCheckFill} fontSize="20px" />
              <Heading fontSize="18px">Guest services</Heading>
            </Flex>
            <Text fontSize="15px" mt="15px" pl="35px">
              24-hour front desk
              <br />
              Concierge services
              <br />
              Daily housekeeping
              <br />
              Dry cleaning service
              <br />
              Laundry facilities
              <br />
              Luggage storage
              <br />
              Multilingual staff
              <br />
              Porter/bellhop
              <br />
              Turndown service
            </Text>
            <Flex alignItems={"center"} gap="15px" mt="20px">
              <Icon as={MdBusinessCenter} fontSize="20px" />
              <Heading fontSize="18px">Business services</Heading>
            </Flex>
            <Text fontSize="15px" mt="15px" pl="35px">
              24-hour business center
              <br />
              Meeting rooms - 8
            </Text>
            <Flex alignItems={"center"} gap="15px" mt="20px">
              <Icon as={TiTick} fontSize="20px" />
              <Heading fontSize="18px">More</Heading>
            </Flex>
            <Text fontSize="15px" mt="15px" pl="35px">
              Smoke-free property
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};
