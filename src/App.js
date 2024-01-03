import React, { useState, useEffect } from 'react';
import fightersData from './json/fighters.json';
import { ChakraProvider, Box, Stack, Heading, Text } from '@chakra-ui/react';

function FightersList() {
  const [fighters, setFighters] = useState([]);
  const [organizations, setOrganizations] = useState(['rizin', 'k1']); // フィルタしたい団体を設定

  useEffect(() => {
    setFighters(fightersData.fighters);
  }, []);

  return (
    <ChakraProvider>
      <div>
        <Box padding="6" borderWidth="1px" borderRadius="lg">
          <Stack spacing="4">
            {fighters.filter(fighter => 
              organizations.some(org => fighter.organization.includes(org))
            ).map(fighter => (
              <Box key={fighter.id} bg="white" p="6" rounded="lg" shadow="lg">
                <Heading fontSize="xl">{fighter.name}</Heading>
                <Text mt="2">階級: {fighter.weight_class}</Text>
                <Text mt="2">入場曲: {fighter.entrance_song}</Text>
                <Text mt="2">所属団体: {fighter.organization.join(', ')}</Text>
              </Box>
            ))}
          </Stack>
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default FightersList;
