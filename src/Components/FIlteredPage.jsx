import React from 'react';
import "./FilteredPage.css"

const FilteredPage = ({ car}) => {
    
    return (
        <div>
            <div>
                <iframe
                    title="masai"
                    src={`https://maps.google.com/maps?q=${car}&t=&z=9&ie=UTF8&iwloc=&output=embed`}
                    
                ></iframe>
            </div>
            <h4>Filter by</h4>
            <div>
                <h5>Exclusive offers</h5>
                <div>
                    <input type="checkbox" name="" id="" />
                    Great Deal
                </div>
                <h5>Car type</h5>
                <div>
                    <input type="checkbox" name="" id="" />
                    Economy
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Compact
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Midsize
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                Standard
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                Full size
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                premium
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                Luxury
                </div>
                <h5>Capacity</h5>
                <div>
                    <input type="checkbox" name="" id="" />
                    2-5 passengers
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    6 or more passengers
                </div>
            </div>
            <div>
                <h5>Payment option</h5>
                <div>
                    <input type="checkbox" name="" id="" />
                Pay now
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    pay later
                </div>
            </div>
            <div>
                <h5>Total Price</h5>
                <div>
                    <input type="checkbox" name="" id="" />
                    less than $100
                </div><div>
                    <input type="checkbox" name="" id="" />
                    $100 to $200
                </div><div>
                    <input type="checkbox" name="" id="" />
                    $200 to $300
                </div><div>
                    <input type="checkbox" name="" id="" />
                    $300 to $400
                </div><div>
                    <input type="checkbox" name="" id="" />
                    $400 to $500
                </div><div>
                    <input type="checkbox" name="" id="" />
                    greater than $500
                </div>
               
            </div>
            <div>
                <h5>Airport Pickup</h5>
                <div>
                    <input type="checkbox" name="" id="" />
                    At terminal
                </div>
                
            </div>
            <div>
                <h5>Specifications</h5>
                <div>
                    <input type="checkbox" name="" id="" />
                    Automatic
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    Unlimited milege
                </div>
            </div>
            
            
            
        </div>
    );
};

export default FilteredPage;