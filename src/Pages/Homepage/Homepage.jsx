import React from "react";
import style from "./homepage.module.css";
import { Box, Image } from "@chakra-ui/react";
import SearchBar from "../../Components/searchBar/SearchBar";
import Navbar from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <SearchBar />
      <Box className={style.mainbox}>
        <div>
          <Image
            className={style.image}
            src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=600&h=257&q=medium"
            alt="heart"
          />
        </div>
        <div>
          <Image
            className={style.image}
            src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=600&h=257&q=medium"
          />
        </div>

        <div>
          <Image
            className={style.image}
            src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=600&h=257&q=medium"
          />
        </div>
      </Box>

      <Box>
        <div className={style.featured}>
          <h1>Featured offers</h1>
          <div className={style.featuredDiv}>
            <div>
              <div>
                <h2>Last-minute deals</h2>
                <p>Getaway today</p>
              </div>
            </div>
            <div>
              <div>
                <h2>All-inclusive resort</h2>
                <p>Enjoy sun and fun</p>
              </div>
            </div>
            <div>
              <div>
                <h2>Insider Prices</h2>
                <p>Members get rewarded</p>
              </div>
            </div>
            <div>
              <div>
                <h2>Jet and reset</h2>
                <p>Fly somewhere beacgy and warm</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.todeals}>
          <div className={style.backGround2}>
            <div>
              <div>
                <h4>Today's top deals</h4>
                <p>Vactions are even more rewarding with our best offers</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.cancleTrip}>
          <h1>Here to help keep you on the move</h1>
          <img
            src="https://i.postimg.cc/7Y0Fn6GL/Screenshot-2022-09-06-015417.png"
            alt=""
          />
        </div>

        <div className={style.travelingTips}>
          <h1>Traveling tips</h1>
          <div className={style.traveling}>
            <div>
              <div>
                <div>
                  <h2>National Parks</h2>
                  <p>There's plenty to keep you busy.</p>
                  <button className={style.button}>Learn more</button>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <h2>The perfect road trip</h2>
                  <p>Find an adventure for every season.</p>
                  <button className={style.button}>Read on</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.app}>
          <img
            src="https://i.postimg.cc/qM76S7kT/Screenshot-2022-09-06-022211.png"
            alt=""
          />
        </div>
        <div className={style.moreDesti}>
          <h1>More destinations</h1>
          <img
            src="https://i.postimg.cc/3xN9Cf4r/Screenshot-2022-09-06-023553.png"
            alt=""
          />
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default Homepage;
