import {
  Box,
  Flex,
  Heading,
  Text,
  Progress,
  ProgressLabel,
  Icon,
  Button,
  Highlight,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../Components/Logo";
import { GoChecklist } from "react-icons/go";

export const ConfirmPayment = () => {
  const { state } = useLocation();
  const {
    auth: { data: userData },
    singleHotel: { pictures },
  } = useSelector((store) => store);
  const [loading, setLoading] = useState(true);
  const [trip, setTrip] = useState(state);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Box bg="gray.200" minH="100vh">
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
      {loading ? (
        <Box
          px={{ base: "10px", sm: "20px", lg: "50px", xl: "80px" }}
          pt="10px"
        >
          <Heading fontSize={"24px"} textAlign="center">
            We're confirming your booking...
          </Heading>
          <Text fontSize="13px" fontWeight={600} mt="15px" textAlign={"center"}>
            This could take a few minutes, so please don't refresh your browser
            or use the back button.
          </Text>
          <Box w="fit-content" m="30px auto">
            <Progress
              isIndeterminate
              colorScheme={"teal"}
              w="200px"
              borderRadius={"5px"}
              h="20px"
            >
              <ProgressLabel color={"black"} fontSize="16px">
                Loading
              </ProgressLabel>
            </Progress>
          </Box>
        </Box>
      ) : (
        <Box
          px={{ base: "10px", sm: "20px", lg: "50px", xl: "80px" }}
          mt="30px"
        >
          <Box
            p={{ base: "10px", sm: "20px" }}
            bg="white"
            borderRadius={"10px"}
          >
            <Box>
              <Heading lineHeight="tall" fontSize="30px">
                <Highlight
                  query={["Orbitz"]}
                  styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
                >
                  Thank you for choosing Orbitz.com.
                </Highlight>
              </Heading>
              <Text fontSize="13px" fontWeight={600} color="teal" mb="20px">
                We are pleased to provide you our service.
              </Text>
            </Box>

            <Flex
              gap={"20px"}
              bg="#edf2f8"
              p={{ base: "10px", sm: "20px" }}
              borderRadius={"10px"}
              flexDir={{ base: "column", sm: "row" }}
            >
              <Icon as={GoChecklist} color="teal" fontSize="60px" />
              <Box>
                <Heading fontSize="17px">Booking Confirmed</Heading>
                <Text
                  fontSize="13px"
                  fontWeight={600}
                  color="gray.600"
                  mt="10px"
                >
                  We have booked your spot for the selected date at the selected
                  facility. Please arrive at the facility in due date and show
                  the below Booking Number at the counter.
                </Text>
              </Box>
            </Flex>

            <Box
              bg="#edf2f8"
              p={{ base: "10px", sm: "20px" }}
              borderRadius={"10px"}
              mt="30px"
            >
              <Text>
                <b>Booking Number:</b> {trip?._id}
              </Text>
            </Box>

            <Box display="flex" gap="20px" flexWrap="wrap" mt="20px">
              <Button colorScheme={"green"} onClick={() => navigate("/trips")}>
                See Trips
              </Button>
              <Button colorScheme={"orange"} onClick={() => navigate("/")}>
                Explore
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
