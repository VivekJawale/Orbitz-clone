import { Route, Routes } from "react-router-dom";
import { BookHotel } from "../Pages/BookHotel";
import { ConfirmPayment } from "../Pages/ConfirmPayment";
import { Flights } from "../Pages/Flights";
import { HotelCheckout } from "../Pages/HotelCheckout";
import { Hotels } from "../Pages/Hotels";
import { SignIn } from "../Pages/SignIn";
import Signup from "../Pages/signup";
import { Trip } from "../Pages/Trips";
import { PrivateRoute } from "./PrivateRoute";
import Flight from "../Pages/Flight/Flight";
import Homepage from "../Pages/Homepage/Homepage";
import Stays from "../Pages/stays/Stays";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";

export const AllRoutes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/hotels"
        element={
          <ChakraProvider>
            <Hotels />
          </ChakraProvider>
        }
      />
      <Route path="/stays" element={<Stays />} />
      <Route path="/flight" element={<Flight />} />
      <Route
        path="/signin"
        element={
          <ChakraProvider>
            <SignIn />
          </ChakraProvider>
        }
      />
      <Route
        path="/signup"
        element={
          <ChakraProvider>
            <Signup />
          </ChakraProvider>
        }
      />
      <Route
        path="/hotels/:id"
        element={
          <ChakraProvider>
            <BookHotel />
          </ChakraProvider>
        }
      />
      <Route
        path="/flights"
        element={
          <ChakraProvider>
            <Flights />
          </ChakraProvider>
        }
      />
      <Route
        path="/checkout/bookhotel"
        element={
          <PrivateRoute>
            <ChakraProvider>
              <HotelCheckout />
            </ChakraProvider>
          </PrivateRoute>
        }
      />
      <Route
        path="/confirmpayment/stays"
        element={
          <ChakraProvider>
            <ConfirmPayment />
          </ChakraProvider>
        }
      />
      <Route
        path="/trips"
        element={
          <ChakraProvider>
            <Trip />
          </ChakraProvider>
        }
      />
    </Routes>
  );
};
