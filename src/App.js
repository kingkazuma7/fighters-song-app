import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import FightersList from './components//FightersList';
import FighterPage from './components/FighterPage';
import Header from './components/Header/Header';

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FightersList />} />
        <Route path="/fighters/:id" element={<FighterPage />} />
      </Routes>
    </Router>
  </ChakraProvider>
  );
}

export default App;
