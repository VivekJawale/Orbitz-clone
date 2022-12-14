import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-2jhdg6alaqxfv6al.us.auth0.com"
  clientId="wlegBR1Ctevf9cgYldqMyM9z2ncZ5gMF"
  redirectUri={window.location.origin}
>
  <ChakraProvider>

    <App />
    </ChakraProvider>
    </Auth0Provider>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
