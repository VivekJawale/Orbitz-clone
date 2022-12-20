
// import { Button } from '@chakra-ui/react';
// import {  useNavigate } from 'react-router-dom';
import AllRoutes from './AllRoutes/AllRoutes';
import Homepage from './ComponentMadeBySachin/Homepage';
import Navbar from './ComponentMadeBySachin/Navbar';

function App() {
  // const Navigate=useNavigate()
   return (  
     <div>
      
    <Navbar/>
    <Homepage/>
   <AllRoutes/>
    </div>
  )
}

export default App;
