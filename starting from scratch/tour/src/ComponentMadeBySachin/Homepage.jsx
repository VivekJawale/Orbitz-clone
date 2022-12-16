import { Button, Center } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Featuredoffer from "./Featuredoffer";
import First from "./First";
import Footer from "./Footer";
import MoreDestinations from "./MoreDestinations";
import SecondLast from "./SecondLast";
// import Featuredoffer from "../../Featuredoffer";
// import Homepage1 from "../firstpart/Homepage1";
// import Footer from "../Footer/Footer";
// import MoreDestinations from "../MoreDestinations";
// import Navbar from "../Navbar/Navbar";
// import Second from "../Secondpart/second";

const Homepage = () => {
  const Navigate =useNavigate()
  return (
    <div>
      <First />
      <br />
      <br />
      <div style={{ padding: "0% 5% 0% 5%" }}>
        <SecondLast />
        <br />
        <br />
        <br />  
        <Featuredoffer/>
        <br />
        <br />
        <br />
      <MoreDestinations />
        <br />
        <br />
        <br />
        <Center>
          <img
            src="https://tpc.googlesyndication.com/simgad/10056509806482740393?"
            alt="ad"
          />
        </Center>
        <br /> <br />
        <br />
        <Footer />
      </div>
      <br />
      <br />
      <Button  onClick={ ()=>Navigate("/cruise")} >hi there</Button>
    </div>
  );
};

export default Homepage;
