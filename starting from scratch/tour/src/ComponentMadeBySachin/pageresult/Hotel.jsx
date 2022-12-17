import React from 'react'
import "./hotel.css";
import {useNavigate} from "react-router-dom";
import { Heading, Image } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

const Hotel = ({hotel}) => {
    const Navigate=useNavigate()
    const handleOnClick=(hotel)=>{
        console.log("hi")
        localStorage.setItem("hoteldata",JSON.stringify(hotel));
        Navigate("/cruise/hotelPreview")
      }
  return (
    <div className='main' onClick={()=>handleOnClick(hotel)} style={{overflow:"hidden",marginTop:"12px"}} >
        <div className="left_img"><Image className='img_left' src={hotel.imageships}/></div>
       
    {/* here i can give the onClick here  */}
       
       
      
      <div  className='right_box'>
           <Heading>
            <div className='heading1'>{hotel.heading}</div>
            
            </Heading> 
            <br />
            <div className='heading2'><h5>{hotel.subheading}</h5></div>
            <br />
            <br />
            <div className='bottombox'>
                <div className='bottom_left'>
                    <div className='text1'>{hotel.text}</div>
                    <br />
                    <div >{hotel.text2}</div>
                    {/* <br/> */}
                    <div style={{color:"green",marginTop:"12px"}}>{hotel.text3}</div>
                    <div style={{color:"green",marginTop:"12px"}}>{hotel.lockupprice}</div>
                    {/* <br/> */}
                    <div style={{marginTop:"12px"}}>
                        <span style={{fontWeight:"bolder"}}>{hotel.rating}{" "}</span>
                        <span>{hotel.review} </span>
                        <span>{hotel.pricesubtext}</span>
                    </div>
                </div>
                <div className='bottom_right'>
                    <div className='heading3'>{hotel.heading3}</div>
                    <div className='price1'>{hotel.price1}</div>
                    <div className='price2'>{`${hotel.lockupprice} total`}</div>
                </div>
            </div>
        </div>
      
    

    </div>
  )
}

export default Hotel