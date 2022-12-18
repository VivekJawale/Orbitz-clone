import {
  HStack,
  Image,
  Select,
  Text,
  Box,
  Button,
  Divider,
  ChakraProvider,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import React from "react";
import style from "./style.module.css";
import { BiBuildingHouse, BiCar } from "react-icons/bi";
import { SlPlane } from "react-icons/sl";
import { BsBagCheckFill, BsFillBagFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosFolder } from "react-icons/io";
import { Logo } from "../Logo.jsx";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from "../../redux/auth/auth.action";
import { Flow } from "../../Pages/Flow";

const Navbar = () => {
  const [Display] = useMediaQuery("(min-width: 800px)");

  return <div>{Display ? <BigScreen /> : <SmallScreen />}</div>;
};
const BigScreen = () => {
  const { isAuth, data } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <HStack className={style.main}>
      <HStack gap={"25px"}>
        {/* logo */}
        <Link to="/">
          {" "}
          <img
            className="nav-img"
            src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2"
            alt=""
          ></img>
        </Link>

        {/* menu */}
        <Menu>
          <MenuButton
            className={style.selection}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg="rgb(0,37,60)"
            _hover={{ bg: "rgb(0,37,60)", color: "#008DA4" }}
            _active={{ bg: "rgb(0,37,60)", color: "#008DA4" }}
            _focus={{ bg: "rgb(0,37,60)", color: "#008DA4" }}
          >
            More travel
          </MenuButton>
          <MenuList className={style.menulist}>
            <Link to={"/stays"} className={style.link}>
              {" "}
              <MenuItem className={style.option} minH="48px">
                <BiBuildingHouse />
                <span>
                  <Text>Stays</Text>{" "}
                </span>
              </MenuItem>
            </Link>
            <Link to="/flight" className={style.link}>
              <MenuItem className={style.option} minH="40px">
                <SlPlane />

                <span>
                  <Text>Flight</Text>
                </span>
              </MenuItem>
            </Link>
            <MenuItem className={style.option} minH="40px">
              <BsBagCheckFill />

              <span>
                {" "}
                <Text>Package</Text>{" "}
              </span>
            </MenuItem>

            <MenuItem className={style.option} minH="40px">
              <BiCar />

              <span>
                <Text>Cars</Text>
              </span>
            </MenuItem>

            <MenuItem className={style.option} minH="40px">
              <BiBuildingHouse />

              <span>
                <Text>Cruise</Text>
              </span>
            </MenuItem>
            <MenuItem className={style.option} minH="40px">
              <BiBuildingHouse />

              <span>
                <Text>Things to do</Text>
              </span>
            </MenuItem>
            <MenuItem className={style.option} minH="40px">
              <span>
                <Text>Deals</Text>
              </span>
            </MenuItem>
            <MenuItem className={style.option} minH="40px">
              <span>
                <Text>Group & meeting</Text>
              </span>
            </MenuItem>
            <MenuItem className={style.option} minH="40px">
              <span>
                <Text>Travel Blogs</Text>
              </span>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <HStack
        gap={"25px"}
        alignItems="center"
        textAlign={"center"}
        className={style.rightnavDiv}
      >
        <Text className={style.rightnav}>List your property</Text>
        <Text className={style.rightnav}>Support</Text>
        <Link to="/trips">
          {" "}
          <Text className={style.rightnav}>Trips</Text>
        </Link>
        {!isAuth ? (
          <Box>
            <Popover border="none">
              <PopoverTrigger border="none">
                <Text className={style.rightnav} cursor="pointer">
                  Sign In
                </Text>
              </PopoverTrigger>
              <PopoverContent
                bg="whitesmoke"
                maxW="320px"
                borderRadius="10px"
                pt="30px"
                mt="-50px"
                border="none"
                px="20px"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                boxSizing="content-box"
              >
                <PopoverHeader
                  fontSize="17px"
                  fontWeight={600}
                  textAlign="left"
                >
                  Members can access discounts, points and special features
                </PopoverHeader>
                <PopoverBody>
                  <Button
                    mt="20px"
                    border="none"
                    bg="#c83259"
                    color="white"
                    borderRadius="4px"
                    cursor="pointer"
                    w="100%"
                    h="36px"
                    fontSize="15px"
                    onClick={() => navigate("/signin")}
                  >
                    Sign In
                  </Button>
                  <Text
                    fontSize="16px"
                    color="teal"
                    _hover={{ color: "black" }}
                    cursor="pointer"
                    textAlign="center"
                    my="25px"
                    fontWeight={600}
                    onClick={() => navigate("/signup")}
                  >
                    Create a free account
                  </Text>
                  <Box mt="20px">
                    <Text
                      fontSize="14px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                      textAlign="left"
                      my="25px"
                    >
                      List of favourites
                    </Text>
                    <Text
                      fontSize="14px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                      textAlign="left"
                      my="25px"
                    >
                      Loyalty Program
                    </Text>
                    <Text
                      fontSize="14px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                      textAlign="left"
                      my="25px"
                      pt="25px"
                      borderTop="1px solid rgba(0,0,0,0.2)"
                    >
                      Feedback
                    </Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        ) : (
          <Box>
            <Popover border="none">
              <PopoverTrigger border="none">
                <Text className={style.rightnav} cursor="pointer">
                  {data?.firstName}
                </Text>
              </PopoverTrigger>
              <PopoverContent
                bg="whitesmoke"
                minW="300px"
                borderRadius="10px"
                pt="30px"
                mt="-50px"
                border="none"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <PopoverHeader fontSize="18px" fontWeight={600}>
                  Hi {data?.firstName}
                </PopoverHeader>
                <PopoverBody>
                  <Text fontSize="14px" color="GrayText" mt="5px">
                    {data?.email}
                  </Text>
                  <Button
                    mt="10px"
                    border="none"
                    bg="rgba(0,0,0,0.6)"
                    color="white"
                    p="5px 10px"
                    borderRadius="4px"
                    cursor="pointer"
                  >
                    Silver Member
                  </Button>
                  <Box borderTop="1px solid rgba(0,0,0,0.2)" mt="20px">
                    <Text
                      fontSize="14px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                      textAlign="left"
                      my="25px"
                      pl="25px"
                    >
                      Account
                    </Text>
                    <Text
                      fontSize="14px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                      textAlign="left"
                      my="25px"
                      pl="25px"
                    >
                      List of favourites
                    </Text>
                    <Text
                      fontSize="14px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                      textAlign="left"
                      my="25px"
                      pl="25px"
                    >
                      Feedback
                    </Text>
                    <Text
                      fontSize="14px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                      textAlign="left"
                      my="25px"
                      pt="25px"
                      pl="25px"
                      borderTop="1px solid rgba(0,0,0,0.2)"
                      onClick={() => dispatch(logoutAPI())}
                    >
                      Sign Out
                    </Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        )}
      </HStack>
    </HStack>
  );
};

const SmallScreen = () => {
  const { isAuth, data } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <HStack className={style.main}>
        <HStack gap={"25px"}>
          {/* logo */}
          <Link to="/">
            <img
              className="nav-img"
              src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2"
              alt=""
            ></img>
          </Link>

          {/* menu */}
          <Menu>
            <MenuButton
              className={style.selection}
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="rgb(0,37,60)"
              _hover={{ bg: "rgb(0,37,60)", color: "#008DA4" }}
              _active={{ bg: "rgb(0,37,60)", color: "#008DA4" }}
              _focus={{ bg: "rgb(0,37,60)", color: "#008DA4" }}
            >
              More travel
            </MenuButton>
            <MenuList className={style.menulist}>
              <MenuItem className={style.option} minH="48px">
                <BiBuildingHouse />
                <span>
                  <Text>Stays</Text>{" "}
                </span>
              </MenuItem>

              <MenuItem className={style.option} minH="40px">
                <SlPlane />

                <span>
                  <Text>Flight</Text>
                </span>
              </MenuItem>

              <MenuItem className={style.option} minH="40px">
                <BsBagCheckFill />

                <span>
                  {" "}
                  <Text>Package</Text>{" "}
                </span>
              </MenuItem>

              <MenuItem className={style.option} minH="40px">
                <IoIosFolder />

                <span>
                  <Text>Cars</Text>
                </span>
              </MenuItem>

              <MenuItem className={style.option} minH="40px">
                <BiBuildingHouse />

                <span>
                  <Text>Cruse</Text>
                </span>
              </MenuItem>
              <MenuItem className={style.option} minH="40px">
                <BiBuildingHouse />

                <span>
                  <Text>Things to do</Text>
                </span>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        <BsFillBagFill className={style.bag} />
        {/* <Link to='/signin'>      <CgProfile className={style.profile} /></Link> */}
        {/* <Text className={style.rightnav}> */}

        {!isAuth ? (
          <Box>
            <Popover border="none">
              <PopoverTrigger border="none">
                <Box>
                  <CgProfile className={style.profile} />
                </Box>
              </PopoverTrigger>
              <PopoverContent
                bg="whitesmoke"
                w="260px"
                borderRadius="10px"
                pt="30px"
                border="none"
                px="20px"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <PopoverHeader
                  fontSize="17px"
                  fontWeight={600}
                  textAlign="left"
                >
                  Members can access discounts, points and special features
                </PopoverHeader>
                <PopoverBody>
                  <Button
                    mt="20px"
                    border="none"
                    bg="#c83259"
                    color="white"
                    borderRadius="4px"
                    cursor="pointer"
                    w="100%"
                    h="36px"
                    fontSize="15px"
                    onClick={() => navigate("/signin")}
                  >
                    Sign In
                  </Button>
                  <Text
                    fontSize="16px"
                    color="teal"
                    _hover={{ color: "black" }}
                    cursor="pointer"
                    textAlign="center"
                    my="25px"
                    fontWeight={600}
                    onClick={() => navigate("/signup")}
                  >
                    Create a free account
                  </Text>
                  <Box mt="20px">
                    <Text
                      fontSize="14px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                      textAlign="left"
                      my="25px"
                    >
                      List of favourites
                    </Text>
                    <Text
                      fontSize="14px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                      textAlign="left"
                      my="25px"
                    >
                      Loyalty Program
                    </Text>
                    <Text
                      fontSize="14px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                      textAlign="left"
                      my="25px"
                      pt="25px"
                      borderTop="1px solid rgba(0,0,0,0.2)"
                    >
                      Feedback
                    </Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        ) : (
          <Box>
            <Popover border="none">
              <PopoverTrigger border="none">
                <Box>
                  <CgProfile className={style.profile} />
                </Box>
              </PopoverTrigger>
              <PopoverContent
                bg="whitesmoke"
                minW="300px"
                borderRadius="10px"
                pt="30px"
                mt="-50px"
                border="none"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <PopoverHeader fontSize="18px" fontWeight={600}>
                  Hi {data?.firstName}
                </PopoverHeader>
                <PopoverBody>
                  <Text fontSize="14px" color="GrayText" mt="5px">
                    {data?.email}
                  </Text>
                  <Button
                    mt="10px"
                    border="none"
                    bg="rgba(0,0,0,0.6)"
                    color="white"
                    p="5px 10px"
                    borderRadius="4px"
                    cursor="pointer"
                  >
                    Silver Member
                  </Button>
                  <Box borderTop="1px solid rgba(0,0,0,0.2)" mt="20px">
                    <Text
                      fontSize="14px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                      textAlign="left"
                      my="25px"
                      pl="25px"
                    >
                      Account
                    </Text>
                    <Text
                      fontSize="14px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                      textAlign="left"
                      my="25px"
                      pl="25px"
                    >
                      List of favourites
                    </Text>
                    <Text
                      fontSize="14px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                      textAlign="left"
                      my="25px"
                      pl="25px"
                    >
                      Feedback
                    </Text>
                    <Text
                      fontSize="14px"
                      _hover={{ color: "blue" }}
                      cursor="pointer"
                      textAlign="left"
                      my="25px"
                      pt="25px"
                      pl="25px"
                      borderTop="1px solid rgba(0,0,0,0.2)"
                      onClick={() => dispatch(logoutAPI())}
                    >
                      Sign Out
                    </Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        )}
        {/* </Text> */}
      </HStack>
    </div>
  );
};

export default Navbar;
