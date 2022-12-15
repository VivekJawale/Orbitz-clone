import { Box, Image, Stack } from "@chakra-ui/react";
import React from "react";

const Featuredoffer = () => {
  return (
    <div>
      <Box style={{ fontSize: "1.7rem" }}>
        <b>Featured Offer</b>
        <br />
        <br />

<Stack direction={{ base: "column", lg: "row" }} >
<Box>
  <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_LastMinute_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh" alt="asda" />
</Box>
<Box>
  <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_AllInclusive_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh" alt="asdas" />
</Box>
<Box>
  <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_MOD_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh" alt="asdasd" />
</Box>
<Box>
  <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_JetAndReset_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh" alt="asdasdasd" />
</Box>

  
</Stack>


      </Box>
    </div>
  );
};

export default Featuredoffer;
