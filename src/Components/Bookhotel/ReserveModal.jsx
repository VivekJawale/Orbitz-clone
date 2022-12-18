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
import { useNavigate } from "react-router-dom";

export const ReserveModal = ({ modal }) => {
  const navigate = useNavigate();
  return (
    <Modal isOpen={modal.isOpen} onClose={modal.onClose} m="0">
      <ModalOverlay />
      <ModalContent w="sm" m="auto">
        <ModalHeader fontSize="20px">You are not signed in</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justifyContent={"flex-end"} mt="20px" gap="15px">
            <Button colorScheme="red" fontSize="14px" onClick={modal.onClose}>
              CANCEL
            </Button>
            <Button
              colorScheme="purple"
              fontSize="14px"
              onClick={() => {
                modal.onClose();
                navigate("/signin");
              }}
            >
              SIGNIN
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
