import { MdLocationOn } from 'react-icons/md';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react';
  import {ChevronDownIcon} from '@chakra-ui/icons'
import "./Cars.css";
const Cars = () => {
  return (
    <div className="search">
      <div className="search-main">
        <div className="search-nav">
          <div>Stays</div>
          <div>Flights</div>
          <div>Cars</div>
          <div>Packages</div>
          <div>Things to do</div>
          <div>Cruises</div>
        </div>
          <hr></hr>
          <div>
       
                    <div className="flight_first_box">
                    <Menu>
  <MenuButton px={8}
    py={4}
    transition='all 0.2s'
    borderRadius='10px'
    backgroundColor=" #b2d8dd"
    border="none"
    borderWidth='none' as={Button} rightIcon={<ChevronDownIcon />}>
    Rental cars
  </MenuButton>
  <MenuList>
    <MenuItem>Rental cars</MenuItem>
    <MenuItem>Aitport transportation</MenuItem>
  </MenuList>
</Menu>
                    </div>
                    <div className="cars_input_panels">
                        <div className="flight_going_to">
                            <MdLocationOn fontSize={'1.4rem'} />
                            <input type="text" placeholder="Pick-up" />
                        </div>
                        <div className="flight_going_to">
                            <MdLocationOn fontSize={'1.4rem'} />
                            <input type="text" placeholder="Same as pick-up" />
                        </div>
                        <div className="checkin">
                            <p>Pick-up date</p>
                            <input type="date" className="checkin_input" />
                        </div>
                        <div className="checkout" id="return">
                            <p>Drop-of date</p>
                            <input type="date" className="checkout_input" />
                        </div>
                        <div className="checkin">
                            <p>Pick-up time</p>
                            <input type="time" className="checkin_input" />
                        </div>
                        <div className="checkout" id="return">
                            <p>Drop-of time</p>
                            <input type="time" className="checkout_input" />
                        </div>
                    </div>

                    <div className="checkboxes">
                        <input type="checkbox" className="addflight" /> Include
                        AARP member rates
                    </div>
                    <div className="search-button">
                        <button className="searchbtn">Search</button>
                    </div>
                </div>
      </div>
    </div>
  );
};
export default Cars;