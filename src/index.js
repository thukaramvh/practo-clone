import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './context/authContext';

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
