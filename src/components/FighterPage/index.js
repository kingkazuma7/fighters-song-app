import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Text, Heading, AspectRatio, Link } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';
import fightersData from '../../json/fighters.json';

const FighterPage = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const fighter = fightersData.fighters.find(f => f.id === Number(id));

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
        {fighter.youtube_link && (
          <AspectRatio ratio={16 / 9} mt="4">
            <iframe src={fighter.youtube_link} allowFullScreen title={fighter.name} />
          </AspectRatio>
        )}
      </Box>
    </>
  );
}

export default FighterPage;
