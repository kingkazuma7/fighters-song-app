import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Image, Text, Heading, AspectRatio, Button, Link } from "@chakra-ui/react";
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
        <Image src={fighter.image} alt={fighter.name} mt="2" width={150}></Image>
        <Text mt="2" mb="4" fontSize="xs"><Link href={fighter.image_source} isExternal> 出典: {fighter.name} RIZIN公式</Link></Text>
        <Text mt="2">階級: {fighter.weight_class}</Text>
        <Text mt="2">生年月日: {fighter.birthday}</Text>
        <Text mt="2">身長: {fighter.height}cm</Text>
        <Text mt="2">所属団体: {fighter.organization.join(', ')}</Text>
        <Text mt="2">入場曲: {fighter.entrance_song}</Text>
        {fighter.youtube_link && (
          <AspectRatio maxW="560px" ratio={16 / 9} mt="4">
            <iframe src={fighter.youtube_link} allowFullScreen title={fighter.name} />
          </AspectRatio>
        )}
        <Button mt="6" fontSize="lg" onClick={() => navigate(-1)}>一覧に戻る</Button>
      </Box>
    </>
  );
}

export default FighterPage;
