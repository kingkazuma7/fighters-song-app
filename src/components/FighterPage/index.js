import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Text, Heading, AspectRatio, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from 'react-router-dom'; // useHistoryをuseNavigateに変更
import fightersData from '../../json/fighters.json';

const FighterPage = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const fighter = fightersData.fighters.find(f => f.id === Number(id));
  const navigate = useNavigate(); // useHistoryをuseNavigateに変更

  if (!fighter) {
    return null; // or return loading spinner, etc.
  }

  return (
    <>
      <Helmet>
        <title>{fighter.name} | 選手一覧</title>
        <meta name="description" content={`${fighter.name}の詳細情報`} />
      </Helmet>
      <Box key={fighter.id} bg="white" p="6" rounded="lg" shadow="lg">
        <Heading fontSize="xl">{fighter.name}</Heading>
        <Text mt="2">階級: {fighter.weight_class}</Text>
        <Text mt="2">入場曲: {fighter.entrance_song}</Text>
        <Text mt="2">所属団体: {fighter.organization.join(', ')}</Text>
        <Button mt="6" onClick={() => navigate(-1)}>一覧に戻る</Button>
      </Box>
    </>
  );
}

export default FighterPage;
