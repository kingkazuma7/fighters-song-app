import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import FightersList from './components/FightersList/';

function App() {
  return (
    <ChakraProvider>
      <FightersList />
    </ChakraProvider>
  );
}

export default App;
