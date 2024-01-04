import React from 'react';
import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="blue.500" color="white" p="6" shadow="lg" _hover={{ boxShadow: "xl" }} transition="0.3s">
      <Text fontSize="xl" fontWeight="bold">格闘家の入場曲まとめ</Text>
    </Box>
  );
}

export default Header;
