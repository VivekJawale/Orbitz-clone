import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalContent,
  Box,
  Flex,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const PaymentModal = ({ payModal, user, paymentConfirmed }) => {
  const { price, rooms, roomType } = useSelector((store) => store.singleHotel);
  return (
    <Modal isOpen={payModal.isOpen} onClose={payModal.onClose} m="0">
      <ModalOverlay />

      <ModalContent w="sm" m="auto">
        <ModalHeader fontSize="28px">Confirm</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            boxShadow={"inner"}
            p="10px"
            borderRadius="10px"
            bg="#edf4f8"
          >
            <Box>
              <Text fontSize="18px" fontWeight={600} color="rgba(0,0,0,0.6)">
                {user.firstName} {user.lastName}
              </Text>
              <Text fontSize="15px" fontWeight={500}>
                {user.number}
              </Text>
            </Box>
            <Box w="50px" h="50px">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png"
                alt="user"
              />
            </Box>
          </Flex>

          <Flex justifyContent={"space-between"} alignItems="center" mt="20px">
            <Text fontSize="18px" fontWeight={600}>
              Total
            </Text>
            <Text fontSize="18px" fontWeight={600}>
              ${price + roomType.value * rooms.length}
            </Text>
          </Flex>
          <Flex justifyContent={"flex-end"} mt="20px" gap="15px">
            <Button
              colorScheme="red"
              fontSize="14px"
              onClick={payModal.onClose}
            >
              CANCEL
            </Button>
            <Button
              colorScheme="purple"
              fontSize="14px"
              onClick={paymentConfirmed}
            >
              PAY
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
