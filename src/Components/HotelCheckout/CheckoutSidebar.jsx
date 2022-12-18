import { Box, Divider, Heading, Image, Text, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const CheckoutSidebar = () => {
  const { data, rooms, roomType, refundable, price, checkin, checkout } =
    useSelector((store) => store.singleHotel);

  return (
    <Box w={{ base: "100%", md: "35%" }} flexShrink={0}>
      <Box borderRadius={"5px"} bg="white">
        <Box w="100%">
          <Image
            src={
              data["uitk-image-media src"] ||
              data["uitk-image-media src 2"] ||
              data["uitk-image-media src 3"] ||
              data["uitk-image-media src 4"] ||
              "https://images.trvl-media.com/hotels/30000000/29060000/29051400/29051318/9b8d24be.jpg?impolicy=resizecrop&rw=455&ra=fit"
            }
            borderRadius="5px"
          />
        </Box>
        <Box py="20px" px="20px">
          <Text color="teal" fontSize="16px">
            {data["uitk-text 3"]}/5 {data["uitk-text 5"]} {data["uitk-text 6"]}
          </Text>
          <Text fontSize="14px" mt="6px">
            Guest rated this property 4.5/5 for cleanliness.
          </Text>
          <Text fontSize={"14px"} mt="6px">
            <b>{rooms.length} Rooms:</b> {roomType.text}
          </Text>
          {refundable ? (
            <Text fontSize="14px" color="teal" mt="10px">
              Fully Refundable
            </Text>
          ) : (
            <Text fontSize="14px" color="red" mt="10px">
              Non-Refundable
            </Text>
          )}
          <Text fontSize={"14px"} mt="6px">
            <b>Check-in</b> {checkin}
          </Text>
          <Text fontSize={"14px"} mt="2px">
            <b>Check-out</b> {checkout}
          </Text>
          <Text fontSize={"14px"} mt="2px">
            1 night stay
          </Text>
        </Box>
      </Box>
      <Box py="20px" px="20px" borderRadius={"5px"} bg="white" mt="30px">
        <Heading fontSize={"20px"}>Price details</Heading>
        <Divider my="10px" borderColor="rgba(0,0,0,0.7)" />
        <Flex justifyContent="space-between" fontSize={"15px"} mt="10px">
          <Text>{rooms.length} rooms * 1 night</Text>
          <Text>${price}</Text>
        </Flex>
        <Flex justifyContent="space-between" fontSize={"15px"} mt="10px">
          <Text>Taxes</Text>
          <Text>${roomType.value * rooms.length}</Text>
        </Flex>
        <Divider my="10px" borderColor="rgba(0,0,0,0.7)" />
        <Flex justifyContent="space-between" fontSize={"15px"} mt="10px">
          <Text fontWeight={600}>Total</Text>
          <Text>${price + roomType.value * rooms.length}</Text>
        </Flex>
        <Text fontSize="14px" color="blue" mt="15px">
          Use a coupon, credit, or promotion code
        </Text>
      </Box>
    </Box>
  );
};
