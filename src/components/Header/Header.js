import React from 'react';
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    navigate("/");
  };
  
  return (
    <Box bg="blue.500" color="white" p="6" shadow="lg" _hover={{ boxShadow: "xl" }} transition="0.3s" onClick={scrollToTop}>
      <Text fontSize="xl" fontWeight="bold">{title}</Text>
    </Box>
  );
}

export default Header;
