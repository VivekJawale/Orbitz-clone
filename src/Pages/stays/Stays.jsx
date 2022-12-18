import React, { useState } from "react";
import {
  Text,
  Tabs,
  TabList,
  Image,
  Button,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Box,
} from "@chakra-ui/react";
import style from "./stays.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

const hotels = [
  {
    id: 1,
    img: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/10000/2600/2575/f7c20c26_b.jpg",
    name: "Bristol Palace Hotel",
    details: "4.27 away from Cristoforo Colombo ",
    p1: "Genova city center, Stay safe sleep well",
    p2: "Just renovated, Health and safety prevention measures adopted. Restaurant with open terrace Parking available",
    refund: "Fully Refundable",
    rating: 4,
    reviews: "Wonderful (993 reviews)",
    price: 209,
    total: 708,
    tag: "Member p available",
    popularF: "Free airport shuttle",
    populatL: "Port of geonoa ",
    meals: "Breakfast included",
    amenities: "Free airport shuttle",
    expediaR: "VIP Access Properties",
    accesibility: "Wheelchair-accecibility parking",
    city: "nagpur",
    payments: "UPI, Cash,Card",
    roomsLeft: "7",
    count: "247",
  },
  {
    id: 2,
    img: "https://images.trvl-media.com/hotels/3000000/2790000/2784300/2784201/7f97a547.jpg?impolicy=resizecrop&rw=598&ra=fit",
    name: "Holiday Inn Genoa City, an IHG Hotel",
    details: "2.27 mi away from Cristoforo Colombo ",
    p1: "Nothing feels like being there in person",
    p2: "Whether it's travelling to see family, freinds or collueges we look forward to welcoming you. Kids stay and eat free.Book now",
    refund: "Fully Refundable",
    rating: 4,
    reviews: "Very Good (993 reviews)",
    price: 146,
    total: 499,
    tag: "We have 1 left at",
    color: "green",
    popularF: "Pool",
    populatL: "cruise ship terminal",
    meals: " Lunch included",
    amenities: "Pool",
    expediaR: "VIP Access Properties",
    accesibility: " Elevator",
    city: "nagpur",
    payments: "UPI, Cash,Card",
    roomsLeft: "2",
    count: "247",
  },
  {
    id: 3,
    img: "https://images.trvl-media.com/hotels/2000000/1610000/1600300/1600286/703e0437.jpg?impolicy=resizecrop&rw=598&ra=fit",
    name: "Melia Genova",
    details: "4.41 mi away from Cristoforo Colombo ",
    p1: "Hotel boutique in the heart of Geona",
    p2: "Thanks to its strategic position in central but tree-linked streets,it is a great choice for discovering the city",
    refund: "",
    rating: 2,
    reviews: "Wonderful (683 reviews)",
    price: 187,
    total: 668,
    tag: "Member price available",
    popularF: "All inclusive",
    populatL: "old fort",
    meals: " Dinner included",
    amenities: " Ocean view",
    expediaR: "VIP Access Properties",
    accesibility: " Accecibility bathroom",
    city: "nagpur",
    payments: "UPI, Cash,Card",
    roomsLeft: "6",
    count: "247",
  },
  {
    id: 4,
    img: "https://images.trvl-media.com/hotels/1000000/30000/21000/20923/e8fa1812.jpg?impolicy=resizecrop&rw=598&ra=fit",
    name: "Tower Genova Airport Hotel & Conference Center",
    details: "0.27 away from Cristoforo Colombo ",
    p1: "Genova city center, Stay safe sleep well",
    p2: "Just renovated, Health and safety prevention measures adopted. Restaurant with open terrace Parking available",
    refund: "Breakfast Included",
    rating: 3,
    reviews: "Good (440 reviews)",
    price: 125,
    total: 430,
    tag: "Member price available",
    popularF: "Ocean view",
    populatL: " gaslini hospital",
    meals: "Breakfast included",
    amenities: " Spa",
    expediaR: "Member Prices",
    accesibility: "Roll-in-shower",
    city: "nagpur",
    payments: "UPI, Cash,Card",
    roomsLeft: "21",
    count: "247",
  },
  {
    id: 5,
    img: "https://images.trvl-media.com/hotels/6000000/5360000/5352500/5352453/b69b5d2c.jpg?impolicy=resizecrop&rw=297&ra=fit",
    name: "Best Western Premier CHC Airport",
    details: "4.27 away from Cristoforo Colombo ",
    p1: "Genova city center, Stay safe sleep well",
    p2: "Just renovated, Health and safety prevention measures adopted. Restaurant with open terrace Parking available",
    refund: "Reserve now, pay later",
    rating: 3,
    reviews: "Exellent (993 reviews)",
    price: 365,
    total: 768,
    tag: "Member price available",
    popularF: "Free airport shuttle",
    populatL: "pizaa de ferrari",
    meals: " Dinner included",
    amenities: " Free WiFi",
    expediaR: "VIP Access Properties",
    accesibility: "Wheelchair-accecibility parking",
    city: "nagpur",
    payments: "UPI,Card",
    roomsLeft: "26",
    count: "247",
  },
  {
    id: 6,
    img: "https://images.trvl-media.com/hotels/1000000/10000/2600/2575/fe57348b.jpg?impolicy=resizecrop&rw=598&ra=fit",
    name: "Novotel Genova City",
    details: "4.27 away from Cristoforo Colombo ",
    p1: "Genova city center, Stay safe sleep well",
    p2: "Just renovated, Health and safety prevention measures adopted. Restaurant with open terrace Parking available",
    refund: "Fully Refundable",
    rating: 2,
    reviews: "Wonderful (993 reviews)",
    price: 240,
    total: 865,
    tag: "Member price available",
    popularF: "Pool",
    populatL: "port of geonoa ",
    meals: " Dinner included",
    amenities: "Free airport shuttle",
    expediaR: "VIP Access Properties",
    accesibility: "Elevator",
    city: "nagpur",
    payments: "UPI, Cash",
    roomsLeft: "24",
    count: "247",
  },
  {
    id: 7,
    img: "https://images.trvl-media.com/hotels/1000000/850000/848400/848348/d0d07df0.jpg?impolicy=resizecrop&rw=598&ra=fit",
    name: "Grand Hotel Savoia",
    details: "2.27 mi away from Cristoforo Colombo ",
    p1: "Nothing feels like being there in person",
    p2: "Whether it's travelling to see family, freinds or collueges we look forward to welcoming you. Kids stay and eat free.Book now",
    refund: "",
    rating: 4,
    reviews: "Very Good (993 reviews)",
    price: 346,
    total: 579,
    tag: "Member price available",
    popularF: "All inclusive",
    populatL: "cruise ship terminal",
    meals: "All inclusive",
    amenities: "Free airport shuttle",
    expediaR: "VIP Access Properties",
    accesibility: "Accecibility bathroom",
    city: "nagpur",
    payments: " Cash,Card",
    roomsLeft: "16",
    count: "247",
  },
  {
    id: 8,
    img: "https://images.trvl-media.com/hotels/2000000/1220000/1218900/1218874/8653c13c.jpg?impolicy=resizecrop&rw=598&ra=fit",
    name: "Hotel Continental  Genova",
    details: "4.41 mi away from Cristoforo Colombo ",
    p1: "Hotel boutique in the heart of Geona",
    p2: "Thanks to its strategic position in central but tree-linked streets,it is a great choice for discovering the city",
    refund: "",
    rating: 5,
    reviews: "Wonderful (683 reviews)",
    price: 870,
    total: 166,
    tag: "Member price available",
    popularF: "Ocean view",
    populatL: "Old fort",
    meals: "All inclusive",
    amenities: "Spa",
    expediaR: "Member Prices",
    accesibility: "Roll-in-shower",
    city: "nagpur",
    payments: "UPI",
    roomsLeft: "36",
    count: "247",
  },
  {
    id: 9,
    img: "https://images.trvl-media.com/hotels/1000000/40000/34200/34156/c14ad53d.jpg?impolicy=resizecrop&rw=598&ra=fit",
    name: "B&B Hotel Genova",
    details: "0.27 away from Cristoforo Colombo ",
    p1: "Genova city center, Stay safe sleep well",
    p2: "Just renovated, Health and safety prevention measures adopted. Restaurant with open terrace Parking available",
    refund: "Breakfast Included",
    rating: 1,
    reviews: "Good (440 reviews)",
    price: 87,
    total: 250,
    tag: "Member price available",
    popularF: "old port",
    populatL: "pizaa de ferrari",
    meals: "All inclusive",
    amenities: "Spa",
    expediaR: "Member Prices",
    accesibility: "Wheelchair-accecibility parking",
    city: "nagpur",
    payments: "UPI, Cash,Card",
    roomsLeft: "26",
    count: "247",
  },
  {
    id: 10,
    img: "https://images.trvl-media.com/hotels/1000000/10000/2600/2575/fe57348b.jpg?impolicy=resizecrop&rw=598&ra=fit",
    name: "Bristol Palace Hotel",
    details: "4.27 away from Cristoforo Colombo ",
    p1: "Genova city center, Stay safe sleep well",
    p2: "Just renovated, Health and safety prevention measures adopted. Restaurant with open terrace Parking available",
    refund: "Reserve now, pay later",
    rating: 5,
    reviews: "Exellent (993 reviews)",
    price: 565,
    total: 176,
    tag: "Member price available",
    popularF: "Ocean view",
    populatL: " gaslini hospital",
    meals: "All inclusive",
    amenities: "Spa",
    expediaR: "VIP Access Properties",
    accesibility: "Elevator",
    city: "nagpur",
    payments: "UPI, Cash,Card",
    roomsLeft: "22",
    count: "247",
  },
];

const Stays = () => {
  const [check, setCheck] = useState(false);

  const checked = () => {
    setCheck(!check);
  };
  return (
    <div>
      <Navbar />
      <br />
      <h1 className={style.heading}>Search Hotels</h1>
      <Tabs className={style.tabbox}>
        <TabPanels>
          <TabPanel>
            <TabPanel className={style.TabPanel}>
              <Input className={style.myinput} placeholder="Going to" />
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
              <Input className={style.myinput} placeholder="Travelers" />
            </TabPanel>

            <br />
            <div className={style.flightdiv}>
              <div>
                {" "}
                <Input type={"checkbox"} onClick={checked} />
                Add Flight
              </div>
              <div>
                <Input type={"checkbox"} />
                Add car
              </div>

              {check ? (
                <Input className={style.myinput} placeholder="Leaving from " />
              ) : (
                ""
              )}
              <Button className={style.Button}>Search</Button>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <h1 className={style.heading}>What's new</h1>
      <div className={style.box}>
        <div className={style.bigbox}>
          <Image
            className={style.bigimage}
            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/03/25/ORB_FreeCancellation_lpheroB_1680x945_20210323.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh"
          />
          <div className={style.bgcolor}>
            <h2>Sunny days, flexiblle stays</h2>
            <h5 className={style.text}>
              you've waited a long time for this! Book your next trip now with
              free cancellation option.
            </h5>
          </div>
        </div>
        <div>
          <div className={style.smallbox}>
            <Image
              className={style.smallimage}
              src="https://forever.travel-assets.com/flex/flexmanager/images/2022/03/31/ORB_LGBTQ_2MenRunning_img_300x300_20220222.jpg?impolicy=fcrop&w=300&h=300&q=mediumHigh"
            />
            <div>
              <h2>Travel as You Are</h2>
              <h5 className={style.text}>
                Find LGBTQ-welcoming hotels,travel ideas , Pride events, and
                more.
              </h5>
            </div>
          </div>
          <div className={style.smallbox}>
            <Image
              className={style.smallimage}
              src="https://forever.travel-assets.com/flex/flexmanager/images/2021/08/23/ORB_MQ-TS_HU_164x152.jpg?impolicy=fcrop&w=300&h=300&q=mediumHigh"
            />
            <div>
              <h2>Hotels under $99</h2>
              <h5 className={style.text}>
                Choose from our inventory of select hotels all priced for $99 or
                less per night!
              </h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className={style.hotels}>
        {hotels.map((el) => (
          <div className={style.divbox}>
            <Image className={style.hotelimage} src={el.img} alt="" />
            <h4 className={style.hotelname}>{el.name}</h4>
            <h4 className={style.hoteldetail}>{el.details}</h4>
            <h3 className={style.hotelrating}>
              {" "}
              <b> {el.rating}/5 </b> <span> {el.reviews} </span>
            </h3>
            <div className={style.span}>
              <div className={style.line}></div>
              <span>
                <Box className={style.spanoff}>25% off</Box>
              </span>
            </div>
            <h5 className={style.refund}>Fully refundable option</h5>
            <div className={style.price}>
              {" "}
              <h3 className={style.total}>${[el.price + el.total]}</h3>
              <span>
                <h3>${el.price}</h3>
              </span>{" "}
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
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
                <h2>Insider Prices</h2>
                <p>Members get rewarded</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className={style.moreDesti}>
          <h1>More destinations</h1>
          <img
            src="https://i.postimg.cc/3xN9Cf4r/Screenshot-2022-09-06-023553.png"
            alt=""
          />
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Stays;
