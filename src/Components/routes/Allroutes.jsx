import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Carpage from '../Pages/Carpage'
import Pay from "../Pages/Pay"
const Allroutes = () => {
    return (
        <Routes>
             <Route path='/' element={<HomePage />} />
            <Route path='/cars/:id' element={
               

                    <Carpage/>
                
            } />
            <Route path='/pay' element={<Pay/>} />
            
        </Routes>
    )
}

export default Allroutes;