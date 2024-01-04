import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import fightersData from '../../json/fighters.json';
import { ChakraProvider, Box, Stack, Input, Link } from "@chakra-ui/react";
import FighterCard from '../FighterCard';

function FightersList() {
  const navigate = useNavigate();
  const { id } = useParams();
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

  const handleClick = (id) => {
  navigate(`/fighters/${id}`);
  };

  return (
    <ChakraProvider>
      <Box padding="6" borderWidth="1px" borderRadius="lg">
        <Input 
          placeholder="選手名で検索"
          onChange={event => setSearchTerm(event.target.value)}
          mb={10}
        />
        <Stack spacing="4">
          {filteredFighters.map(fighter => (
            <Box key={fighter.id} onClick={() => handleClick(fighter.id)} cursor="pointer">
              <FighterCard fighter={fighter} />
            </Box>
          ))}
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default FightersList;