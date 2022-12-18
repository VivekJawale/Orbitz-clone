import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Icon,
  RadioGroup,
  Radio,
  Button,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoPersonSharp, IoBedSharp } from "react-icons/io5";
import { IoIosWifi } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { GiParkBench } from "react-icons/gi";
import { RiArrowRightSLine } from "react-icons/ri";
import { useRef } from "react";
import { useEffect } from "react";
import { setRoomType } from "../../redux/singleHotel/singleHotel.action";
import { useNavigate } from "react-router-dom";
import { ReserveModal } from "./ReserveModal";

export const RoomCard = ({ data, i }) => {
  const [value, setValue] = useState("0");
  const [price, setPrice] = useState(0);
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((store) => store.auth);
  const modal = useDisclosure();
  const {
    data: hotelData,
    pictures,
    rooms,
  } = useSelector((store) => store.singleHotel);
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = 5;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const setRoom = (room) => {
    if (!isAuth) {
      modal.onOpen();
    } else {
      dispatch(setRoomType(room, price, value));
      navigate("/checkout/bookhotel");
    }
  };
  useEffect(() => {
    hotelData["uitk-text 8"]
      ? setPrice(
          (Number(hotelData["uitk-text 8"].substring(1)) + Number(value)) *
            rooms.length
        )
      : null;
  }, [value, hotelData]);
  return (
    <Box border="1px solid rgba(0,0,0,0.4)" bg="white" h="100%">
      <Flex w="full" alignItems="center" justifyContent="center">
        <Flex w="full" overflow="hidden" pos="relative">
          <Flex
            w="full"
            h={{ base: "60vw", sm: "30vw", lg: "200px" }}
            {...carouselStyle}
          >
            {[0, 1, 2, 3, 4].map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                <Text
                  color="white"
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                >
                  {sid + 1} / {slidesCount}
                </Text>
                {pictures.length && (
                  <Image
                    src={pictures[(i + 1) * 5 + sid]["uitk-image-media src"]}
                    alt="carousel image"
                    boxSize="full"
                    backgroundSize="cover"
                  />
                )}
              </Box>
            ))}
          </Flex>
          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
          </Text>
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
          </Text>
        </Flex>
      </Flex>
      <Box p="10px">
        <Heading fontSize="16px" minH="40px">
          {data.text}
        </Heading>
        <Flex alignItems={"center"} gap="5px" mt="10px">
          <Icon as={data.view === "City" ? FaCity : GiParkBench} />
          <Text fontSize={"14px"} color="rgba(0,0,0,0.7)">
            {data.view} View
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap="5px" mt="10px">
          <Icon as={IoPersonSharp} />
          <Text fontSize={"14px"} color="rgba(0,0,0,0.7)">
            Sleeps {data.sleeps}
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap="5px" mt="10px">
          <Icon as={IoBedSharp} />
          <Text fontSize={"14px"} color="rgba(0,0,0,0.7)">
            1 King Bed
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap="5px" mt="10px">
          <Icon as={IoIosWifi} />
          <Text fontSize={"14px"} color="rgba(0,0,0,0.7)">
            Free WiFi
          </Text>
        </Flex>
      </Box>
      <Box p="10px" borderTop={"1px solid rgba(0,0,0,0.4)"} ref={containerRef}>
        <Heading fontSize="15px">Cancellation Policy</Heading>
        <Text fontSize="13px" color="GrayText" mt="6px">
          More details on all policy options ①
        </Text>
        <RadioGroup
          onChange={setValue}
          value={value}
          display="flex"
          flexDir={"column"}
          mt="10px"
        >
          <Flex justifyContent={"space-between"}>
            <Radio value={"0"}>
              <Text fontSize="14px">Non-Refundable</Text>
            </Radio>
            <Text fontSize="14px">+ $0</Text>
          </Flex>

          <Flex justifyContent={"space-between"} mt="5px">
            <Radio value={"59"}>
              <Text fontSize="14px">Fully Refundable</Text>
            </Radio>
            <Text fontSize="14px">+ $59</Text>
          </Flex>
        </RadioGroup>

        <Heading fontSize={"22px"} mt="20px">
          $
          {pictures.length &&
            Number(hotelData["uitk-text 8"].substring(1)) + Number(value)}
        </Heading>
        <Text fontSize="15px">
          $
          {pictures.length &&
            (Number(hotelData["uitk-text 8"].substring(1)) +
              data.value +
              Number(value)) *
              rooms.length}{" "}
          total
        </Text>
        <Portal containerRef={containerRef}>
          <Flex justifyContent={"space-between"} alignItems="center">
            <Flex
              alignItems="center"
              gap="1px"
              fontSize="14px"
              color="teal"
              mt="6px"
              cursor="pointer"
              wrap="nowrap"
            >
              <Text whiteSpace={"nowrap"}>Price details</Text>
              <Icon as={RiArrowRightSLine} fontSize="15px" />
            </Flex>
            {!data.sold ? (
              <Button colorScheme="teal" h="35px" onClick={() => setRoom(data)}>
                Reserve
              </Button>
            ) : (
              <Text color="teal" fontSize={"14px"} fontWeight={600}>
                We are sold out.
              </Text>
            )}
          </Flex>
        </Portal>
      </Box>

      <ReserveModal modal={modal} />
    </Box>
  );
};
