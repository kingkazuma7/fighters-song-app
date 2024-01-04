import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import FightersList from './components//FightersList';
import FighterPage from './components/FighterPage';
import Header from './components/Header/Header';

function App() {
  useEffect(() => {
    document.title = "格闘家の入場曲まとめ";
  }, []);
  
  return (
    <ChakraProvider>
    <Router>
      <Header title="格闘家の入場曲まとめ" />
      <Routes>
        <Route path="/" element={<FightersList />} />
        <Route path="/fighters/:id" element={<FighterPage />} />
      </Routes>
    </Router>
  </ChakraProvider>
  );
}

export default App;
