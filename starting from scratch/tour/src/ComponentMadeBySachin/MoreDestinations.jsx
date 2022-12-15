import React from 'react'
import mdcss from "../ComponentMadeBySachin/moredestinations.module.css"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
  } from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

const MoreDestinations = () => {
  return (
    <Box>
        <br />
        <br />
<Box style={{fontSize:"1.7rem"}}>
<b>More Destinations</b>
<br />
        <br />
    </Box>  
        <Box  className={mdcss.Container}>
      <Box margin={10} >
        <Menu  >
  <MenuButton   w={300} p="20px" as={Button} color="white"   bg='black' rightIcon={<ChevronDownIcon />}>
Destination Deals
  </MenuButton>
  <MenuList w={300} p="20px">
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
        </Box>
        
        
        <Box margin={10} >
        <Menu>
  <MenuButton  w={300} p="20px" as={Button}   bg='black' color="white" rightIcon={<ChevronDownIcon />}>
  Top hotel beach destinations
  </MenuButton>
  <MenuList w={300} p="20px">
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
        </Box>
        
        
        
        <Box margin={10} >
        <Menu>
  <MenuButton  w={300} p="20px" as={Button}   bg='black' color="white" rightIcon={<ChevronDownIcon />}>
  Top hotel city destinations
  </MenuButton>
  <MenuList w={300} p="20px">
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
        </Box>
        
        
        
        <Box margin={10} >
        <Menu>
  <MenuButton  w={300} p="20px" as={Button}   bg='black' color="white" rightIcon={<ChevronDownIcon />}>
  Top vacation destinations
  </MenuButton>
  <MenuList w={300} p="20px">
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
        </Box>
        
        
        
        <Box margin={10} >
        <Menu>
  <MenuButton  w={300} p="20px" as={Button}   bg='black' color="white" rightIcon={<ChevronDownIcon />}>
  Top flight destinations
  </MenuButton>
  <MenuList w={300} p="20px">
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
        </Box>
        
        
        
        <Box margin={10} >
        <Menu>
  <MenuButton  w={300} p="20px" as={Button}   bg='black' color="white" rightIcon={<ChevronDownIcon />}>
  Top car rental destinations in America
  </MenuButton>
  <MenuList w={300} p="20px">
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
        </Box>
        
        
        
      </Box>
    </Box>
  )
}

export default MoreDestinations