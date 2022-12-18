import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { TripCardHotel } from "../Components/TripCardHotel";
import { getTrips } from "../redux/trips/trips.action";

export const Trip = () => {
  const dispatch = useDispatch();
  const {
    auth: { isAuth, data },
    trips: { trips },
  } = useSelector((store) => store);
  const navigate = useNavigate();
  useEffect(() => {
    if (data._id) {
      dispatch(getTrips(data._id));
    }
  }, []);
  return (
    <>
      <Navbar />
      <Box px={{ base: "10px", sm: "20px", lg: "50px", xl: "80px" }} py="20px">
        {isAuth ? (
          <Box>
            <Heading fontSize={"27px"} textAlign="center">
              Trips
            </Heading>
            <SimpleGrid
              columns={{ base: "1", md: "2", lg: "3" }}
              bg="#edf3f8"
              p={{ base: "10px", sm: "20px" }}
              mt="30px"
              spacing={{ base: "20px", md: "30px" }}
            >
              {trips.map((ele) => (
                <TripCardHotel hotelData={ele} key={ele._id} />
              ))}
            </SimpleGrid>
            <Box m="auto" w="fit-content" mt="20px">
              <Button colorScheme={"purple"} onClick={() => navigate("/")}>
                Explore More Trips
              </Button>
            </Box>
          </Box>
        ) : (
          <Box>
            <Heading fontSize="20px" textAlign={"center"}>
              You are not signed in.
            </Heading>

            <Text
              fontSize="13x"
              textAlign={"center"}
              color="gray.600"
              fontWeight={600}
              mt="20px"
            >
              Sign In or Create a new account to see and create trips.
            </Text>
            <Box m="auto" w="fit-content" mt="20px">
              <Image src="https://a.travel-assets.com/egds/illustrations/uds-default/unlock__large.svg" />
            </Box>
            <Box m="auto" w="fit-content" mt="20px">
              <Button
                colorScheme={"purple"}
                onClick={() => navigate("/signin")}
                w="240px"
              >
                Sign In
              </Button>
            </Box>
            <Text
              fontSize="13x"
              textAlign={"center"}
              color="gray.600"
              fontWeight={600}
              mt="10px"
            >
              Or
            </Text>
            <Box m="auto" w="fit-content" mt="10px">
              <Button
                colorScheme={"purple"}
                onClick={() => navigate("/signup")}
                w="240px"
              >
                Create a free account
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};
