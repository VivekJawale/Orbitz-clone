import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Carpage from '../Pages/Carpage'
const Allroutes = () => {
    return (
        <Routes>
             <Route path='/' element={<HomePage />} />
            <Route path='/cars/:id' element={
               

                    <Carpage/>
                
            } />
            
        </Routes>
    )
}

export default Allroutes;