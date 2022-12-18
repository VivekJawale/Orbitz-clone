import React, { useState } from "react";
import style from "./flight.module.css";
import {
  Tabs,
  TabList,
  Image,
  Button,
  TabPanels,
  Tab,
  TabPanel,
  Input,
} from "@chakra-ui/react";
import Navbar from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

const Flight = () => {
  const [check, setCheck] = useState(false);

  const checked = () => {
    setCheck(!check);
  };

  const card = [
    {
      url: "https://forever.travel-assets.com/flex/flexmanager/images/2022/07/01/sf_orlando.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh",
      text: "Cheap Orlando Flights",
    },
    {
      url: "https://forever.travel-assets.com/flex/flexmanager/images/2022/07/01/sf_las_vegas.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh",
      text: "Cheap Las Vegas Flights",
    },
    {
      url: "https://forever.travel-assets.com/flex/flexmanager/images/2022/07/01/sf_cancun.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh",
      text: "Cheap Cancun Flights",
    },
    {
      url: "https://forever.travel-assets.com/flex/flexmanager/images/2022/07/01/sf_miami.JPG?impolicy=fcrop&w=900&h=506&q=mediumHigh",
      text: "Cheap Miami Flights",
    },
    {
      url: "https://forever.travel-assets.com/flex/flexmanager/images/2022/07/01/sf_atlanta.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh",
      text: "Cheap Atlanta Flights",
    },
    {
      url: "https://forever.travel-assets.com/flex/flexmanager/images/2022/07/01/sf_newyork.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh",
      text: "Cheap New York Flights",
    },
  ];

  return (
    <div>
      <Navbar />
      <br />
      <h1 className={style.heading}>Find and compare flights</h1>
      <Tabs>
        <TabList className={style.TabList}>
          <Tab
            _selected={{ backgroundColor: "#b2d8dd", color: "black" }}
            className={style.tab}
          >
            RoundTrip
          </Tab>
          <Tab
            _selected={{ backgroundColor: "#b2d8dd", color: "black" }}
            className={style.tab}
          >
            One-Way
          </Tab>
          <Tab
            _selected={{ backgroundColor: "#b2d8dd", color: "black" }}
            className={style.tab}
          >
            Multi-City
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TabPanel className={style.TabPanel}>
              <Input className={style.myinput} placeholder="Going to" />
              <Input className={style.myinput} placeholder="Leaving from " />
              <Input
                className={style.mydate}
                placeholder="Check in"
                size="md"
                type="datetime-local"
              />
              <Input
                className={style.mydate}
                placeholder="Check out"
                size="md"
                type="datetime-local"
              />
            </TabPanel>

            <br />
            <div className={style.flightdiv}>
              <div>
                <Input type={"checkbox"} onClick={checked} />
                Add Flight
              </div>

              <div>
                <Input type={"checkbox"} />
                Add car
              </div>

              {check ? (
                <div>
                  check in{" "}
                  <Input
                    className={style.mydate}
                    placeholder="Check in"
                    size="md"
                    type="datetime-local"
                  />
                  check out
                  <Input
                    className={style.mydate}
                    placeholder="Check out"
                    size="md"
                    type="datetime-local"
                  />
                </div>
              ) : (
                ""
              )}
              <Button className={style.Button}>Search</Button>
            </div>
          </TabPanel>
          <TabPanel>
            <TabPanel className={style.TabPanel}>
              <Input className={style.myinput} placeholder="Going to" />
              <Input className={style.myinput} placeholder="Leaving from " />
              <Input
                className={style.myinput}
                placeholder="Check in"
                size="md"
                type="datetime-local"
              />
            </TabPanel>

            <br />
            <div className={style.flightdiv}>
              <div>
                <Input type={"checkbox"} onClick={checked} />
                Add Flight
              </div>
              {check ? (
                <div>
                  check in{" "}
                  <Input
                    className={style.mydate}
                    placeholder="Check in"
                    size="md"
                    type="datetime-local"
                  />
                  check out
                  <Input
                    className={style.mydate}
                    placeholder="Check out"
                    size="md"
                    type="datetime-local"
                  />
                </div>
              ) : (
                ""
              )}
              <Button className={style.Button}>Search</Button>
            </div>
          </TabPanel>
          <TabPanel>
            <TabPanel className={style.TabPanel}>
              <Input className={style.myinput} placeholder="Going to" />
              <Input className={style.myinput} placeholder="Leaving from " />
              <Input
                className={style.myinput}
                placeholder="Check in"
                size="md"
                type="datetime-local"
              />
            </TabPanel>

            <br />
            <div className={style.flightdiv}>
              <div>
                <Input type={"checkbox"} onClick={checked} />
                Add Flight
              </div>
              {check ? (
                <div>
                  check in{" "}
                  <Input
                    className={style.mydate}
                    placeholder="Check in"
                    size="md"
                    type="datetime-local"
                  />
                  check out
                  <Input
                    className={style.mydate}
                    placeholder="Check out"
                    size="md"
                    type="datetime-local"
                  />
                </div>
              ) : (
                ""
              )}
              <Button className={style.Button}>Search</Button>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <br />

      <div className={style.box}>
        <div className={style.bigbox}>
          <Image
            className={style.bigimage}
            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/01/25/ORB_FlexibleFligthDeals_lpheroB_1680x945_20201106.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh"
          />
          <div>
            <h2>Flights Under $199</h2>
            <h5 className={style.text}>
              Find fares under $199 with zero change fees.Book with confidence
            </h5>
          </div>
        </div>
        <div>
          <div className={style.smallbox}>
            <Image
              className={style.smallimage}
              src="https://forever.travel-assets.com/flex/flexmanager/images/2021/06/23/ORB_JetReset_lpheroB_1680x945_20210623.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh"
            />
            <div>
              <h2>Jet and Reset</h2>
              <h5 className={style.text}>
                Hawaii,California,Florida - if there's sun and fun,there's
                flights for you.
              </h5>
            </div>
          </div>
          <div className={style.smallbox}>
            <Image
              className={style.smallimage}
              src="https://c.stocksy.com/a/CLk400/z9/1131450.jpg?1552378045"
            />
            <div>
              <h2>United Airlines Flights</h2>
              <h5 className={style.text}>
                United Airlines has great fares to get you where you want to go.
              </h5>
            </div>
          </div>
        </div>
        <h1>Trending destinations</h1>
      </div>
      <br />
      <div className={style.coursel}>
        {card.map((el) => (
          <div className={style.courselbox}>
            <Image className={style.courselimage} src={el.url} />
            <h2>{el.text} </h2>
          </div>
        ))}
      </div>
      <br />
      <div>
        <div className={style.featured}>
          <h1>Travel tips from the pros</h1>
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
      <br />
      <Footer />
    </div>
  );
};

export default Flight;
