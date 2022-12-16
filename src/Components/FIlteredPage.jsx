import React from 'react';
import "./FilteredPage.css"

const FilteredPage = ({ car}) => {
    
    return (
        <div>
            <div>
                <iframe
                    title="masai"
                    src={`https://maps.google.com/maps?q=${car}&t=&z=9&ie=UTF8&iwloc=&output=embed`}
                    frameBorder="0"
                ></iframe>
            </div>
            <div>
                <h3>Search by property name</h3>
                <input type="text" name="" id="" placeholder="e.g. Best Western" />
                <hr />
            </div>
            <h4>filter by</h4>
            <div>
                <h5>Popular filters</h5>
                <div>
                    <input type="checkbox" name="" id="" />
                    Free airport shuttle
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Chandni Chowk
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Gym
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Condominium resort
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Free WiFi
                </div>
            </div>
            <div>
                <h5>Price per night</h5>
                <p>$0</p>
                <p>$300+</p>
                <input type="range" name="" id="" />
            </div>
            <div>
                <h5>Guest rating</h5>
                <div>
                    <input type="checkbox" name="" id="" />
                    Any
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Wonderful 4.5+
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Very good 4+
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Good 3.5+
                </div>
            </div>
            <div>
                <h5>Star rating</h5>
                <button>1 start</button>
                <button>2 star</button>
                <button>3 star</button>
                <button>4 star</button>
                <button>5 star</button>
            </div>
            <div>
                <h5>Patment type</h5>
                <div>
                    <input type="checkbox" name="" id="" />
                    Fully refundable
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Reserve now, pay later
                </div>
            </div>
            <div>
                <h5>Property type</h5>
                <div>
                    <input type="checkbox" name="" id="" />
                    Palace
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Ryokan
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Bed & breakfast
                </div>
            </div>
            <div>
                <h5>Accessibility</h5>
                <div><input type="checkbox" name="" id="" />Wheelchair-accessible parking</div>
                <div><input type="checkbox" name="" id="" />Elevator</div>
                <div><input type="checkbox" name="" id="" />Accessible bathroom</div>
            </div>
        </div>
    );
};

export default FilteredPage;