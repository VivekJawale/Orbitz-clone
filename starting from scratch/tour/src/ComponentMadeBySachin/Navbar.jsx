import {
  ChevronDownIcon,
 
} from "@chakra-ui/icons";
import {
    Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import NCss from "../ComponentMadeBySachin/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={NCss.container}>
      <div className={NCss.Navbar}>
        <div className={NCss.Navbar1}>
          <div>
            <img
              src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2"
              alt="orbitz"
            />
          </div>
          <div className={NCss.droper}>
            {/* how should  i add here  */}
            <Menu>
              <MenuButton
              border="none"
              fontSize={16} 
                          backgroundColor="#00253c"
             color="white"
                transition="all 0.5s"
                // _hover={{ bg: "red.400" }}
                // _expanded={{ bg: "blue.400" }}
              >
                more action <ChevronDownIcon />
              </MenuButton>
              <MenuList w={300}>
                <MenuItem _hover={{ bg: "red.400" }} w={300} h={10} border="none">Stays</MenuItem>
                <MenuItem _hover={{ bg: "red.400" }} w={300} h={10} border="none">Flights</MenuItem>
                {/* <MenuDivider /> */}
                <MenuItem _hover={{ bg: "red.400" }} w={300} h={10} border="none">Cars</MenuItem>
                <MenuItem _hover={{ bg: "red.400" }} w={300} h={10} border="none">Packages</MenuItem>
                <MenuItem _hover={{ bg: "red.400" }} w={300} h={10} border="none">Things To Do</MenuItem>
                <MenuItem _hover={{ bg: "red.400" }} w={300} h={10} border="none">Cruises</MenuItem>
                {/* <MenuDivider /> */}
                <MenuItem _hover={{ bg: "red.400" }} w={300} h={10} border="none">Deals</MenuItem>
                <MenuItem _hover={{ bg: "red.400" }} w={300} h={10} border="none">Group and Meetings</MenuItem>
                <MenuItem _hover={{ bg: "red.400" }} w={300} h={10} border="none">Travel Blog</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className={NCss.Navbar2}>
          <div>Espanol</div>
          <div>List your Property</div>
          <div>Support</div>
          <div>Trim</div>
          <div>Sign in</div>
        </div>
        <div className={NCss.Navbar3}>
          <div className={NCss.Cart}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>
          </div>
          <div className={NCss.Cart}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
          </div>
          <div className={NCss.Search}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
