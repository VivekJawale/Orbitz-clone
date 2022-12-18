import React, { useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  useDisclosure,
  Input,
  Icon,
  Text,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Divider,
  Button,
  ModalFooter,
} from "@chakra-ui/react";
import { RoomCard } from "./RoomCard";
import { BsPeopleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addAdult,
  addChildren,
  createRoom,
  deleteRoom,
  setCheckIn,
  setCheckOut,
  subAdult,
  subChildren,
} from "../../redux/singleHotel/singleHotel.action";

export const Rooms = () => {
  const { rooms, checkin, checkout } = useSelector(
    (store) => store.singleHotel
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const addRoom = () => {
    dispatch(createRoom());
  };

  const removeRoom = (id) => {
    dispatch(deleteRoom(id));
  };

  const incAdult = (id) => {
    dispatch(addAdult(id));
  };

  const incChildren = (id) => {
    dispatch(addChildren(id));
  };

  const decAdult = (id) => {
    dispatch(subAdult(id));
  };

  const decChildren = (id) => {
    dispatch(subChildren(id));
  };

  const checkIn = (date) => {
    dispatch(setCheckIn(date));
  };

  const checkOut = (date) => {
    dispatch(setCheckOut(date));
  };
  return (
    <Box mt="20px">
      <Heading fontSize={{ base: "20px", sm: "22px", md: "25px", lg: "28px" }}>
        Choose your room
      </Heading>
      <Flex my="10px" gap="20px" wrap={"wrap"}>
        <Box
          w="200px"
          border="1px"
          bg="white"
          px="10px"
          position="relative"
          cursor={"pointer"}
          h="50px"
        >
          <Box>
            <Text fontSize="14px">Check-in</Text>
            <Text>{checkin}</Text>
          </Box>
          <Input
            type="date"
            value={checkin}
            onChange={(e) => checkIn(e.target.value)}
            position="absolute"
            top="10px"
            left="160px"
            bg="transparent"
            color="transparent"
            variant="unstyled"
            w="20px"
            cursor={"pointer"}
          />
        </Box>
        <Box
          w="200px"
          border="1px"
          bg="white"
          px="10px"
          position="relative"
          cursor={"pointer"}
          h="50px"
        >
          <Box>
            <Text fontSize="14px">Check-out</Text>
            <Text>{checkout}</Text>
          </Box>
          <Input
            type="date"
            value={checkout}
            min={checkin}
            onChange={(e) => checkOut(e.target.value)}
            position="absolute"
            top="10px"
            left="160px"
            bg="transparent"
            color="transparent"
            variant="unstyled"
            w="20px"
            cursor={"pointer"}
          />
        </Box>
        <Flex
          bg="white"
          border="1px"
          alignItems={"center"}
          h="50px"
          px="10px"
          gap="5px"
          w="200px"
          onClick={onOpen}
          cursor="pointer"
        >
          <Icon as={BsPeopleFill} fontSize="20px" />
          <Box>
            <Text fontSize="12px">Travelers</Text>
            <Text fontSize="14px">
              {rooms.length} room,
              {rooms.reduce((a, c) => a + c.adults + c.children, 0)} travelers
            </Text>
          </Box>
        </Flex>
      </Flex>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6} mt="10px">
        {data.map((ele, i) => (
          <Box key={ele.text}>
            <RoomCard data={ele} i={i} />
          </Box>
        ))}
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h={{ base: "100vh", sm: "80vh" }} m="auto">
          <ModalHeader>Travelers</ModalHeader>
          <ModalCloseButton />
          <Divider borderColor="black" mt="-10px" />
          <ModalBody overflowY={"scroll"} className="hotelTravModal">
            <Box>
              {rooms.map((ele, i) => (
                <Box borderBottom="1px" pb="5px" mt="10px">
                  <Text fontSize="12px" fontWeight={600}>
                    Room {i + 1}
                  </Text>
                  <Flex
                    justifyContent={"space-between"}
                    alignItems="center"
                    mt="10px"
                  >
                    <Text fontSize="13.5px" color="rgba(0,0,0,0.7)">
                      Adults
                    </Text>
                    <Flex gap="10px" alignItems={"center"}>
                      <Button
                        fontSize="20px"
                        fontWeight={400}
                        borderRadius="50%"
                        variant="outline"
                        colorScheme="teal"
                        w="40px"
                        h="40px"
                        disabled={ele.adults === 0}
                        onClick={() => decAdult(i)}
                      >
                        -
                      </Button>
                      <Text fontSize="15px"> {ele.adults}</Text>
                      <Button
                        fontSize="20px"
                        fontWeight={400}
                        borderRadius="50%"
                        variant="outline"
                        colorScheme="teal"
                        w="40px"
                        h="40px"
                        onClick={() => incAdult(i)}
                      >
                        +
                      </Button>
                    </Flex>
                  </Flex>
                  <Flex
                    justifyContent={"space-between"}
                    alignItems="center"
                    my="10px"
                  >
                    <Text fontSize="13.5px" color="rgba(0,0,0,0.7)">
                      Children
                    </Text>
                    <Flex gap="10px" alignItems={"center"}>
                      <Button
                        fontSize="20px"
                        fontWeight={400}
                        borderRadius="50%"
                        variant="outline"
                        colorScheme="teal"
                        w="40px"
                        h="40px"
                        disabled={ele.children === 0}
                        onClick={() => decChildren(i)}
                      >
                        -
                      </Button>
                      <Text fontSize="15px"> {ele.children}</Text>
                      <Button
                        fontSize="20px"
                        fontWeight={400}
                        borderRadius="50%"
                        variant="outline"
                        colorScheme="teal"
                        w="40px"
                        h="40px"
                        onClick={() => incChildren(i)}
                      >
                        +
                      </Button>
                    </Flex>
                  </Flex>
                  {i > 0 ? (
                    <Button
                      fontSize={"14px"}
                      variant="ghost"
                      colorScheme={"teal"}
                      mt="0px"
                      onClick={() => removeRoom(i)}
                    >
                      Remove room
                    </Button>
                  ) : (
                    ""
                  )}
                </Box>
              ))}
            </Box>

            <Button
              fontSize={"14px"}
              variant="ghost"
              colorScheme={"teal"}
              mt="20px"
              onClick={addRoom}
            >
              Add another room
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button w="100%" colorScheme={"teal"} onClick={onClose}>
              DONE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const data = [
  {
    text: "Accessible One Bedroom Suite - One King Bed - Mobile/Hearing Accessible - Tub",
    sold: false,
    sleeps: 2,
    view: "Park",
    value: 59,
  },
  {
    text: "One Bedroom Suite - One King Bed",
    sold: false,
    sleeps: 3,
    view: "City",
    value: 78,
  },
  {
    text: "Suite 1 Bedroom - King Bed - City View",
    sold: false,
    sleeps: 3,
    view: "City",
    value: 45,
  },
  {
    text: "City View One Bedroom Suite - One King Bed",
    sold: true,
    sleeps: 4,
    view: "City",
    value: 82,
  },
  {
    text: "Park View One Bedroom Suite - One King Bed",
    sold: true,
    sleeps: 2,
    view: "Park",
    value: 110,
  },
  {
    text: "Deluxe Room, 1 King Bed, City View",
    sold: true,
    sleeps: 3,
    view: "City",
    value: 63,
  },
];
