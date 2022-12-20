import {
  Box,
  Button,
  Flex,
  TabList,
  Tabs,
  Tab,
  Image,
  Skeleton,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleHotelData } from "../redux/singleHotel/singleHotel.action";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { CgArrowLongLeft } from "react-icons/cg";
import { Overview } from "../Components/Bookhotel/Overview";
import { Rooms } from "../Components/Bookhotel/Rooms";
import { Location } from "../Components/Bookhotel/Location";
import { Amenities } from "../Components/Bookhotel/Amenities";
import Navbar from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";

export const BookHotel = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { data, pictures } = useSelector((store) => store.singleHotel);
  const params = useParams();
  // dnsjkfnjsd
// dsjfohghdfosjdfnsod
sjgsj
  useEffect(() => {
    dispatch(getSingleHotelData(params.id)).then((res) => {
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Navbar />
      <Box
        px={{ sm: "20px", lg: "50px", xl: "80px" }}
        bg="rgba(0,0,0,0.04)"
        pt="10px"
      >
        <Flex
          justifyContent={"space-between"}
          alignItems="center"
          px="20px"
          bg="white"
          pt="15px"
          pb="14px"
        >
          <Flex color="teal" gap="10px" alignItems="center">
            <Icon as={CgArrowLongLeft} fontSize="25px" cursor="pointer" />
            <Link to="#">
              <Text fontSize="13px" _hover={{ textDecor: "underline" }}>
                See all properties
              </Text>
            </Link>
          </Flex>
          <Flex gap="10px" alignItems="center">
            <Icon
              as={AiOutlineHeart}
              _hover={{ color: "teal" }}
              fontSize="25px"
              cursor="pointer"
            />
            <Text fontSize="13px">Save</Text>
          </Flex>
        </Flex>
        <Skeleton isLoaded={!loading}>
          <Flex
            h={{
              base: "200px",
              sm: "45vw",
              md: "37vw",
              lg: "30vw",
              xl: "25vw",
            }}
            w="100%"
            justifyContent="space-between"
            gap="5px"
            pb="10px"
            bg="white"
          >
            <Box w={{ base: "100%", sm: "75%", md: "65%", lg: "47%" }}>
              {pictures.length && (
                <Image
                  src={pictures[0]["uitk-image-media src"]}
                  h="100%"
                  w="100%"
                  borderRadius="8px"
                  objectFit="fill"
                />
              )}
            </Box>
            <Flex
              w={{ sm: "25%", md: "35%", lg: "53%" }}
              flexDir={"column"}
              justifyContent="space-between"
              h="100%"
              display={{ base: "none", sm: "flex" }}
            >
              <Flex w="100%" h="49%" justifyContent="space-between" gap="5px">
                <Box w={{ md: "100%", lg: "50%" }}>
                  {pictures.length && (
                    <Image
                      src={pictures[1]["uitk-image-media src"]}
                      h="100%"
                      w="100%"
                      borderRadius="8px"
                      objectFit="fill"
                    />
                  )}
                </Box>
                <Box w="50%" display={{ base: "none", lg: "block" }}>
                  {pictures.length && (
                    <Image
                      src={pictures[2]["uitk-image-media src"]}
                      h="100%"
                      w="100%"
                      borderRadius="8px"
                      objectFit="fill"
                    />
                  )}
                </Box>
              </Flex>
              <Flex w="100%" h="49%" justifyContent="space-between" gap="5px">
                <Box w={{ md: "100%", lg: "50%" }}>
                  {pictures.length && (
                    <Image
                      src={pictures[3]["uitk-image-media src"]}
                      h="100%"
                      w="100%"
                      borderRadius="8px"
                      objectFit="fill"
                    />
                  )}
                </Box>
                <Box w="50%" display={{ base: "none", lg: "block" }}>
                  {pictures.length && (
                    <Image
                      src={pictures[4]["uitk-image-media src"]}
                      h="100%"
                      w="100%"
                      borderRadius="8px"
                      objectFit="fill"
                    />
                  )}
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Skeleton>
        <Flex
          justifyContent="space-between"
          h="40px"
          bg="white"
          position={"sticky"}
          top="-1px"
          zIndex={5}
        >
          <Flex
            w="100%"
            overflowX={"scroll"}
            className="tabsScroll"
            borderBottom={"1px"}
          >
            <Tabs>
              <TabList>
                {tabs.map((ele) => (
                  <Tab
                    fontSize="14px"
                    fontWeight={700}
                    color="rgba(0,0,0,0.65)"
                    key={ele}
                  >
                    {ele}
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </Flex>
          <Box borderBottom={"1px"} display="flex" alignItems={"center"}>
            <Button
              colorScheme="teal"
              borderRadius="5px"
              fontSize="15px"
              p="10px 15px"
              mr="10px"
              display={{ base: "none", lg: "flex" }}
              h="35px"
            >
              Reserve a room
            </Button>
          </Box>
        </Flex>
        <Overview />
        <Rooms />
        <Location />
        <Amenities />
      </Box>
      <Footer />
    </>
  );
};

const tabs = ["Overview", "Rooms", "Location", "Amenities", "Reviews"];
