import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Carpage from '../Pages/Carpage'
const Allroutes = () => {
    return (
        <Routes>
            
            <Route path='/cars/:id' element={
               

                    <Carpage/>
                
            } />
            
        </Routes>
    )
}

export default Allroutes;