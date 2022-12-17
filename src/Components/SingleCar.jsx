import React from 'react'
import  './SingleCar.css';
import { AiOutlineWifi } from "react-icons/ai"
import { Link } from 'react-router-dom';

const SingleCar = ({ images, name, city,rating, reviews, price,paymentType,address,total_price}) => {
    return (
        <Link to='/pay' className="link">
            <div className="mainBox">
                <div className="hotel_pic">
                    <img src={images} alt="Hotel pic" />
                </div>
                <div className="deatails_div">
                    <h4>{name}</h4>
                    <p>{city}</p>
                    <div className="middle_feature">
                        {address && <div>
                            <AiOutlineWifi />
                            address</div>

                        }
                    </div>
                    <p>{paymentType? "Fully refundable" : null}</p>
                    <p>{paymentType ? "Reserve now,pay later" : null}</p>
                    <p>Earn $2.79 Orbucks</p>
                    <div className="price_div">
                        <div>{rating}{reviews}</div>
                        <div>
                            <p>{price}</p>
                            <p>{total_price}</p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
    )
}

export default SingleCar