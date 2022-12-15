import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../ComponentMadeBySachin/Homepage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            {/* <Route path='/cruise' element={<CruiseElement/>}></Route> */}
        </Routes>
    </div>
  )
}

export default AllRoutes