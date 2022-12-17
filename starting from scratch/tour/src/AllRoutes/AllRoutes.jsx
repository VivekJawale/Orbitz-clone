import React from 'react'
import {
  
  Routes,
  Route,
 
} from "react-router-dom"
import Homepage from '../ComponentMadeBySachin/Homepage'
import HotelPreview from '../ComponentMadeBySachin/HotelPreview'
import SearchPage from '../ComponentMadeBySachin/pageresult/SearchPage'



const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/cruise' element={<SearchPage/>}></Route>
            <Route path='/cruise/hotelPreview' element={<HotelPreview/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes