import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import FightersList from './components//FightersList';
import FighterPage from './components/FighterPage';

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<FightersList />} />
        <Route path="/fighters/:id" element={<FighterPage />} />
      </Routes>
    </Router>
  </ChakraProvider>
  );
}

export default App;
