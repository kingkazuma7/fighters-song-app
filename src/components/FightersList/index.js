import React, { useState, useEffect } from 'react';
import fightersData from '../../json/fighters.json';
import { ChakraProvider, Box, Stack, Input } from "@chakra-ui/react";
import FighterCard from '../FighterCard/';

function FightersList() {
  const [fighters, setFighters] = useState([]);
  const [organizations, setOrganizations] = useState(['rizin', 'k1']); // フィルタしたい団体を設定
  const [searchTerm, setSearchTerm] = useState(''); // 検索ワードの状態

  useEffect(() => {
    setFighters(fightersData.fighters);
  }, []);

  const filteredFighters = fighters.filter(fighter => 
    organizations.some(org => fighter.organization.includes(org)) &&
    fighter.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ChakraProvider>
      <Box padding="6" borderWidth="1px" borderRadius="lg">
        <Input 
          placeholder="選手名で検索"
          onChange={event => setSearchTerm(event.target.value)}
        />
        <Stack spacing="4">
          {filteredFighters.map(fighter => (
            <FighterCard key={fighter.id} fighter={fighter} />
          ))}
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default FightersList;
