import React from 'react'
import H1css from '../ComponentMadeBySachin/First.module.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react'
import Findcity from './Findcity'
// import Findcity from './Findcity'
// import Findcity from '../FindCity/Findcity'
 
const Stays = () => {
  return (
    <div className={H1css.stays_border_box}>
     <Tabs backgroundColor="white">
  <div className={H1css.navbar_of_inner_things}>
  <Center>
    <Center>
    <TabList>
    <Tab border="none" margin="1%" _hover={{bg:"red"}}  color="black">stays</Tab>
    <Tab border="none" margin="1%" _hover={{bg:"red"}}  color="black">Car</Tab>
    <Tab border="none" margin="1%" _hover={{bg:"red"}}  color="black">Flights</Tab>
    <Tab border="none" margin="1%" _hover={{bg:"red"}}  color="black">Packages</Tab>
    <Tab border="none" margin="1%" _hover={{bg:"red"}}  color="black">Things To Do</Tab>
    <Tab border="none" margin="1%" _hover={{bg:"red"}}  color="black">Cruises</Tab>
  </TabList>
    </Center>

  </Center>

    </div>
    
    
      <TabPanels>
    <TabPanel>
     
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
    <TabPanel>
      <p>four</p>
    </TabPanel>
    <TabPanel>
      <p>five</p>
    </TabPanel>
    <TabPanel>
    <Findcity/>
    </TabPanel>
  </TabPanels>
</Tabs>
      
     
    </div>
  )
}

export default Stays