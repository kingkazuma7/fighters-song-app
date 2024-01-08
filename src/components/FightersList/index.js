import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import fightersData from '../../json/fighters.json';
import { ChakraProvider, Box, Stack, Input } from "@chakra-ui/react";
import FighterCard from '../FighterCard';
import AddFighterForm from '../AddFighterForm/AddFighterForm';

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
  
  const addFighter = (newFighter) => {
    setFighters([...fighters, newFighter]);
  };

  return (
    <ChakraProvider>
      <Box padding="6" borderWidth="1px" borderRadius="lg">
        <Input 
          placeholder="選手名で検索 （例:朝倉未来"
          onChange={event => setSearchTerm(event.target.value)}
          mb={10}
          height={{ base: "60px", md: "40px" }}
          fontSize="lg"
        />
        <Stack spacing="4">
          {filteredFighters.map(fighter => (
            <Box key={fighter.id} onClick={() => handleClick(fighter.id)} cursor="pointer" pb="10">
              <FighterCard fighter={fighter} />
            </Box>
          ))}
          <AddFighterForm />
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default FightersList;
