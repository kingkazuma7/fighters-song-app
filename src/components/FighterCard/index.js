import React from 'react';
import { Box, Text, Heading, AspectRatio, Link } from "@chakra-ui/react";

const FighterCard = ({ fighter }) => {
  return (
    <Box
      key={fighter.id}
      bg="white"
      p="6"
      rounded="lg"
      shadow="lg"
      _hover={{ boxShadow: "xl" }} // ホバーエフェクトを追加
      transition="0.3s" // トランジションを追加
    >
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
  );
}

export default FighterCard;
