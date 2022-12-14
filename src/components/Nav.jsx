import { Box, Button, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

import React from 'react'

const Nav = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();


  return (
    <Flex px="10" py="2" justifyContent="space-between">
    <Button>Hello</Button>

    <Flex alignItems="center">
    <Box mr="10">
    {isAuthenticated ?  <Box>Welcome  <Heading as='h5' size='sm'> {user.name}</Heading> </Box>: "" }
    </Box>
    <Box mr="10">
    {isAuthenticated && <Image src={user.picture} borderRadius="50" h="10" />}
    </Box>
   
    <Box>
    {
        isAuthenticated ?     <Button  w="100%" onClick={() => logout({ returnTo: window.location.origin })} >Logout</Button> :     <Button w="100%" mr="10" onClick={() => loginWithRedirect()} >Login</Button>
    }
    
    </Box>
    
  
    </Flex>



    </Flex>
   
  )
}

export default Nav

