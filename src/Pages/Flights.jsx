import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  filter,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Ads } from "../Components/Ads";
import { Sidebar } from "../Components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getHotels } from "../redux/hotels/hotels.actions";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";

export const Flights = () => {
  const [flights, setFlights] = useState();
  const getFlights = async () => {
    let response = await axios.get(
      "https://venomous-plough-7848.vercel.app/api/admin/flights"
    );
    setFlights(response.data.data);
  };

  useEffect(() => {
    getFlights();
  }, []);
  return (
    <>
      <Box w="100%" bg="rgb(245,245,245)">
        <Navbar />
        <Flex gap="20px" bg="rgb(245,245,245)">
          <Box>
            {/* <Sidebar handleFilter={handleFilter}/> */}

            <Box bg="rgb(245,245,245)" padding="10px" paddingLeft="20px">
              <Text textAlign="left" fontSize="2xl" fontWeight="bold">
                Filter by
              </Text>
              <Flex gap="80px" marginBottom="20px">
                <Box>
                  <Text textAlign="left" fontSize="lg">
                    Stops
                  </Text>
                  <Stack spacing={[1, 1]} direction={["column", "column"]}>
                    <Checkbox size="sm" colorScheme="green">
                      Nonstop
                    </Checkbox>
                    <Checkbox size="sm" colorScheme="green">
                      1 Stop
                    </Checkbox>
                    <Checkbox size="sm" colorScheme="green">
                      2 Stops
                    </Checkbox>
                  </Stack>
                </Box>
                <Box>
                  <Text textAlign="left" fontSize="lg">
                    From
                  </Text>
                  <Stack spacing={[1, 1]} direction={["column", "column"]}>
                    <Text fontSize="sm" colorScheme="green">
                      $ 605
                    </Text>
                    <Text fontSize="sm" colorScheme="green">
                      $ 770
                    </Text>
                    <Text fontSize="sm" colorScheme="green">
                      $ 616
                    </Text>
                  </Stack>
                </Box>
              </Flex>

              <Flex gap="30px">
                <Box>
                  <Text textAlign="left" fontSize="lg">
                    Airlines
                  </Text>
                  <Stack spacing={[1, 1]} direction={["column", "column"]}>
                    <Checkbox size="sm" colorScheme="green">
                      Air India
                    </Checkbox>
                    <Checkbox size="sm" colorScheme="green">
                      Turkish Airlines
                    </Checkbox>
                    <Checkbox size="sm" colorScheme="green">
                      Emirates
                    </Checkbox>
                    <Checkbox size="sm" colorScheme="green">
                      Vistara
                    </Checkbox>
                    <Checkbox size="sm" colorScheme="green">
                      Etihad Airways
                    </Checkbox>
                    <Checkbox size="sm" colorScheme="green">
                      Air Canada
                    </Checkbox>
                    <Checkbox size="sm" colorScheme="green">
                      Air France
                    </Checkbox>
                  </Stack>
                </Box>
                <Box>
                  <Text textAlign="left" fontSize="lg">
                    From
                  </Text>
                  <Stack spacing={[1, 1]} direction={["column", "column"]}>
                    <Text fontSize="sm" colorScheme="green">
                      $ 886
                    </Text>
                    <Text fontSize="sm" colorScheme="green">
                      $ 992
                    </Text>
                    <Text fontSize="sm" colorScheme="green">
                      $ 773
                    </Text>
                    <Text fontSize="sm" colorScheme="green">
                      $ 905
                    </Text>
                    <Text fontSize="sm" colorScheme="green">
                      $ 818
                    </Text>
                    <Text fontSize="sm" colorScheme="green">
                      $ 799
                    </Text>
                    <Text fontSize="sm" colorScheme="green">
                      $ 686
                    </Text>
                  </Stack>
                </Box>
              </Flex>

              <Text textAlign="left" marginTop="20px" fontSize="xl">
                Departure time
              </Text>
              <Grid
                templateAreas={`"one two "
                                          "three four "
                    `}
                // gridTemplateRows={'1fr 1fr '}
                // gridTemplateColumns={'1fr 1fr'}

                gap="1"
                color="blackAlpha.700"
                fontWeight="bold"
              >
                <GridItem bg="white" borderRadius="5px" area={"one"}>
                  <Text textAlign="center" fontSize="sm">
                    Early Morning
                  </Text>
                </GridItem>
                <GridItem bg="white" borderRadius="5px" area={"two"}>
                  <Text textAlign="center" fontSize="sm">
                    Morning
                  </Text>
                </GridItem>
                <GridItem bg="white" borderRadius="5px" area={"three"}>
                  <Text textAlign="center" fontSize="sm">
                    Afternoon
                  </Text>
                </GridItem>
                <GridItem bg="white" borderRadius="5px" area={"four"}>
                  <Text textAlign="center" fontSize="sm">
                    Evening
                  </Text>
                </GridItem>
              </Grid>
              <Text textAlign="left" marginTop="20px" fontSize="xl">
                Payment type
              </Text>
              <Stack spacing={[1, 1]} direction={["column", "column"]}>
                <Checkbox
                  value="Fully refundable"
                  size="md"
                  colorScheme="green"
                >
                  Fully refunded
                </Checkbox>
                <Checkbox size="md" colorScheme="green">
                  Reverse now, pay later
                </Checkbox>
              </Stack>
            </Box>
          </Box>
          <Spacer />

          <Box marginTop="20px">
            {flights?.map((flight) => (
              <Flex key={flight._id} bg="white" padding="10px" marginTop="20px">
                <Box>
                  <Text fontWeight="bold" fontSize="20px">
                    {flight["uitk-text"]}
                  </Text>
                  <Text fontSize="xs">Delhi (DEL) - London (LHR)</Text>
                  <Flex gap="10px">
                    <Box boxSize="15px">
                      <Image src={flight["uitk-image-media src"]} />
                    </Box>
                    <Text fontSize="xs"> Air Astana</Text>
                  </Flex>
                </Box>
                <Spacer />
                <Box>
                  <Text fontSize="xs">19h 5m (2 stops)</Text>
                  <Text fontSize="xs">
                    4h 10m in Almaty (ALA) - 1h in Aktau (SCO)
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Text textAlign="right" fontWeight="bold" fontSize="25px">
                    {flight["uitk-price-a11y"]}
                  </Text>
                  <Text textAlign="right" fontSize="xs">
                    Rounding per traveler
                  </Text>
                  <Flex gap="10px">
                    <Box boxSize="15px">
                      <Image src="https://a.travel-assets.com/egds/marks/brands/orbitz/rewards.svg" />
                    </Box>
                    <Text textAlign="right" fontSize="xs">
                      Earn $6.16 Orbucks
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            ))}
          </Box>

          <Spacer />
          <Box w="250px">
            <Image
              marginBottom="20px"
              src="https://tpc.googlesyndication.com/simgad/2791718960777221954?"
            />
            <Image src="https://tpc.googlesyndication.com/simgad/7473800060073313793?" />
          </Box>
        </Flex>
        <Footer />
      </Box>
    </>
  );
};
