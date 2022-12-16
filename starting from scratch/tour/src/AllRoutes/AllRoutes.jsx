import React from 'react'
import {
  
  Routes,
  Route,
 
} from "react-router-dom"
import Homepage from '../ComponentMadeBySachin/Homepage'
import SearchPage from '../ComponentMadeBySachin/pageresult/SearchPage'



const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/cruise' element={<SearchPage/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes