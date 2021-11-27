import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navegation from './routes';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Navegation />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
