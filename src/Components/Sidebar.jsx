import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
export const Sidebar = ({ handleFilter }) => {
  const { loading, data } = useSelector((store) => store.hotels);
  const [filteredData, setfilteredData] = useState([]);
  //console.log(data});
  const handlegRating = (e) => {
    let arr = [];

    if (e.target.value === "Good") {
      data.filter((data) => {
        if (data["uitk-text 5"] === "Good") {
          // filteredData.push(data)
          arr.push(data);
        }
      });
    } else if (e.target.value === "Very Good") {
      data.filter((data) => {
        if (data["uitk-text 5"] === "Very Good") {
          // filteredData.push(data)
          arr.push(data);
        }
      });
    } else if (e.target.value === "Wonderful") {
      data.filter((data) => {
        if (data["uitk-text 5"] === "Wonderful") {
          // filteredData.push(data)
          arr.push(data);
        }
      });
    } else if (e.target.value === "Fully refundable") {
      data.filter((data) => {
        if (data["uitk-text 2"] == "Fully refundable") {
          arr.push(data);
        }
      });
    } else if (e.target.value === "Free airport shuttle") {
      data.filter((data) => {
        if (data["uitk-text 2"] == "Free airport shuttle") {
          arr.push(data);
        }
      });
    } else if (e.target.value == "1") {
      data.filter((data) => {
        if (data["uitk-text 3"] < 2) {
          arr.push(data);
        }
      });
    } else if (e.target.value == "2") {
      data.filter((data) => {
        if (data["uitk-text 3"] >= 2 && data["uitk-text 3"] < 3) {
          arr.push(data);
        }
      });
    } else if (e.target.value == "3") {
      data.filter((data) => {
        if (data["uitk-text 3"] >= 3 && data["uitk-text 3"] < 4) {
          arr.push(data);
        }
      });
    } else if (e.target.value == "4") {
      data.filter((data) => {
        if (data["uitk-text 3"] >= 4 && data["uitk-text 3"] < 5) {
          arr.push(data);
        }
      });
    } else if (e.target.value == "5") {
      data.filter((data) => {
        if (data["uitk-text 3"] >= 5) {
          arr.push(data);
        }
      });
    }
    setfilteredData(arr);
    handleFilter(arr);
  };
  //console.log(filteredData);
  return (
    <>
      <Box bg="rgb(245,245,245)" padding="10px" paddingLeft="20px">
        <Text textAlign="left" fontSize="2xl" fontWeight="bold">
          Filter by
        </Text>
        <Text textAlign="left" fontSize="xl">
          Popular filters
        </Text>

        <Stack spacing={[1, 1]} direction={["column", "column"]}>
          <Checkbox size="md" colorScheme="green">
            Hot tub
          </Checkbox>
          <Checkbox size="md" colorScheme="green">
            Times Square
          </Checkbox>
          <Checkbox
            value="Free airport shuttle"
            onChange={handlegRating}
            size="md"
            colorScheme="green"
          >
            Free airport shuttle
          </Checkbox>
          <Checkbox size="md" colorScheme="green">
            Bed & breakfast
          </Checkbox>
          <Checkbox size="md" colorScheme="green">
            All inclusive
          </Checkbox>
        </Stack>

        <Text textAlign="left" marginTop="20px" fontSize="xl">
          Guest rating
        </Text>

        <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
          <Stack spacing={[1, 1]} direction={["column", "column"]}>
            <Checkbox
              value="Any"
              onChange={handlegRating}
              size="md"
              colorScheme="green"
            >
              Any
            </Checkbox>
            <Checkbox
              value="Wonderful"
              onChange={handlegRating}
              size="md"
              colorScheme="green"
            >
              Wonderful 4.5+
            </Checkbox>
            <Checkbox
              value="Very Good"
              onChange={handlegRating}
              size="md"
              colorScheme="green"
            >
              Very good 4+
            </Checkbox>
            <Checkbox
              value="Good"
              onChange={handlegRating}
              size="md"
              colorScheme="green"
            >
              Good 3.5+
            </Checkbox>
          </Stack>
        </CheckboxGroup>
        <Text textAlign="left" marginTop="20px" fontSize="xl">
          Star rating
        </Text>
        <Grid
          templateAreas={`"one two three"
                                          "four five none"
                    `}
          // gridTemplateRows={'1fr 1fr '}
          // gridTemplateColumns={'1fr 1fr'}

          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem bg="white" borderRadius="5px" area={"one"}>
            <Button onClick={handlegRating} value="1" bg="1px solid">
              1- <FaStar />
            </Button>
          </GridItem>
          <GridItem bg="white" borderRadius="5px" area={"two"}>
            <Button onClick={handlegRating} value="2" bg="1px solid">
              2- <FaStar />
            </Button>
          </GridItem>
          <GridItem bg="white" borderRadius="5px" area={"three"}>
            <Button onClick={handlegRating} value="3" bg="1px solid">
              3- <FaStar />
            </Button>
          </GridItem>
          <GridItem bg="white" borderRadius="5px" area={"four"}>
            <Button onClick={handlegRating} value="4" bg="1px solid">
              4- <FaStar />
            </Button>
          </GridItem>
          <GridItem bg="white" borderRadius="5px" area={"five"}>
            <Button onClick={handlegRating} value="5" bg="1px solid">
              5- <FaStar />
            </Button>
          </GridItem>
          <GridItem area={"none"}></GridItem>
        </Grid>
        <Text textAlign="left" marginTop="20px" fontSize="xl">
          Payment type
        </Text>
        <Stack spacing={[1, 1]} direction={["column", "column"]}>
          <Checkbox
            value="Fully refundable"
            onChange={handlegRating}
            size="md"
            colorScheme="green"
          >
            Fully refunded
          </Checkbox>
          <Checkbox size="md" colorScheme="green">
            Reverse now, pay later
          </Checkbox>
        </Stack>
        <Text textAlign="left" marginTop="20px" fontSize="xl">
          Property type
        </Text>
        <Stack spacing={[1, 1]} direction={["column", "column"]}>
          <Checkbox size="md" colorScheme="green">
            Bed & breakfast
          </Checkbox>
          <Checkbox size="md" colorScheme="green">
            Hotel resort
          </Checkbox>
          <Checkbox size="md" colorScheme="green">
            Hotel
          </Checkbox>
        </Stack>
      </Box>
    </>
  );
};
