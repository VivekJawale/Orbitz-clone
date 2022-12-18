import React, { useState } from "react";
import {
  Tabs,
  TabList,
  Button,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react";
import style from "./searchbar.module.css";
import { ImLocation } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const checked = () => {
    setCheck(!check);
  };

  // search section

  let id;
  const myInput = (q) => {
    debounce(main, 500, q);
  };

  function debounce(func, delay, q) {
    if (id) clearTimeout(id);
    id = setTimeout(function () {
      func(q);
    }, delay);
  }

  async function main(q) {
    searchCity(q);
  }
  async function searchCity(q) {
    try {
      if (q.length >= 1) {
        const url = `https://venomous-plough-7848.vercel.app/api/search/stays?q=${q}`;
        let res = await fetch(url);
        res = await res.json();
        console.log(res);
        setData(res.sr);
      } else {
        setData([]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const onClick = (id) => {
    let value = document.getElementById(id).innerText;
    let input = document.getElementById("query");
    input.value = value;
    // console.log(input,value,id)
    setText(value);
    setData([]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    navigate("/hotels", { state: text });
  };

  return (
    <div className={style.container}>
      <div>
        <Tabs className={style.tabbox}>
          <TabList className={style.TabList}>
            <Tab _selected={{ color: "#027e8f" }} className={style.tab}>
              Stays
            </Tab>
            <Tab _selected={{ color: "#027e8f" }} className={style.tab}>
              Flight
            </Tab>
            <Tab _selected={{ color: "#027e8f" }} className={style.tab}>
              Cars
            </Tab>
            <Tab _selected={{ color: "#027e8f" }} className={style.tab}>
              Package
            </Tab>
            <Tab _selected={{ color: "#027e8f" }} className={style.tab}>
              Things to do
            </Tab>
            <Tab _selected={{ color: "#027e8f" }} className={style.tab}>
              Cruise
            </Tab>
          </TabList>
          <hr />
          <TabPanels>
            {/* stays */}
            <TabPanel>
              <TabPanel className={style.TabPanel}>
                <div style={{ display: "block" }}>
                  <Input
                    className={style.myinput}
                    value={text}
                    id="query"
                    onChange={(e) => {
                      setText(e.target.value);
                      myInput(e.target.value);
                    }}
                    placeholder="Going to"
                  />
                  <Box
                    className={style.suggestions}
                    borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  >
                    {data?.map((el) => (
                      <Flex
                        style={{ gap: "10px", overflow: "auto" }}
                        id={`${el.index}`}
                        onClick={() => onClick(`${el.index}`)}
                        _hover={{ bg: "rgba(0,177,255,0.2)" }}
                        cursor="pointer"
                        p="10px 10px"
                        borderRadius="10px"
                      >
                        <Icon as={ImLocation} />
                        <h5>{el?.regionNames?.shortName}</h5>
                      </Flex>
                    ))}
                  </Box>
                </div>
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
                  <Input type={"checkbox"} onClick={checked} />
                  Add Flight
                </div>
                <div>
                  <Input type={"checkbox"} />
                  Add car
                </div>

                {check ? (
                  <Input
                    className={style.myinput}
                    placeholder="Leaving from "
                  />
                ) : (
                  ""
                )}
                <Button className={style.Button} onClick={onSubmit}>
                  Search
                </Button>
              </div>
            </TabPanel>
            {/* flight */}
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
                <Button
                  className={style.Button}
                  onClick={() => navigate("/flights")}
                >
                  Search
                </Button>
              </div>
            </TabPanel>
            {/* car */}
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
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchBar;
