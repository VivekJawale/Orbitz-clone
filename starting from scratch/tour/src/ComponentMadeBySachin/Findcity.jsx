import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Select, Input, Center, Button, Stack } from "@chakra-ui/react";

const Findcity = () => {
  const [country, setCountry] = useState([]);
  const [query, setQuery] = useState("Search");
  
  let getCountry = () => {
    return axios.get(`http://localhost:8080/country`);
  };

  useEffect(() => {
    getCountry().then((item) => setCountry(item.data));
  }, []);
  return (
    <Box margin="auto">
      <Stack p={5} >
        <Stack direction={{ base: "column", lg: "row" }}
          
          p={5}
          gap={10}
        >
          <Box width={{base:"100%", lg:"50%" }} border="1px solid ">
            <Input
            width="100%"
              type="text"
              placeholder="Search the Country"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            {country
              .filter((user) => user.name.toLowerCase().includes(query))
              .map((items) => (
                <li key={items.id}>{items.name}</li>
              ))}
          </Box>

          <Box width={{base:"100%", lg:"50%" }} border="1px solid">
            <Select
              placeholder="select or Change  Destination here "
              onChange={(e) => setQuery(e.target.value)}
            >
              {country
                .filter((user) => user.name.toLowerCase().includes(query))
                .map((items) => (
                  <option value={items.name} key={items.id}>
                    {items.name}
                  </option>
                ))}
            </Select>
          </Box>
        </Stack>

        <Stack direction={{ base: "column", lg: "row" }} p={5} gap={10}>
          <Box width={{base:"100%", lg:"50%" }} border="1px solid">
            <Input type="date" placeholder="Depart as Early as ..."></Input>
          </Box>

          <Box width={{base:"100%", lg:"50%" }} border="1px solid">
            <Input type="date" placeholder="Depart as late as ..."></Input>
          </Box>
        </Stack>

        {/* here i am going to create the calender  */}
      </Stack>











      <br />
      <br />
      <Box>
        <Center>

   <Button  bg="red"  color="white" w={100}>Search</Button>
     
        
       

          
        </Center>
      </Box>
    </Box>
  );
};

export default Findcity;
