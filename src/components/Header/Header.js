import React from 'react';
import { Box, Text } from "@chakra-ui/react";

const Header = ({ title }) => {
  return (
    <Box bg="blue.500" color="white" p="6" shadow="lg" _hover={{ boxShadow: "xl" }} transition="0.3s">
      <Text fontSize="xl" fontWeight="bold">{title}</Text>
    </Box>
  );
}

export default Header;
