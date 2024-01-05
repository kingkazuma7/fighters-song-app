import React from 'react';
import { Box, Image, Text, Heading, AspectRatio, Link } from "@chakra-ui/react";

const FighterCard = ({ fighter }) => {
  return (
    <Box
      key={fighter.id}
      bg="white"
      p="6"
      rounded="lg"
      shadow="2xl"
      _hover={{ boxShadow: "inner", bg: "gray.200" }} // ホバーエフェクトを追加
      transition="0.3s" // トランジションを追加
    >
      <Heading fontSize="xl">{fighter.name}</Heading>
      <Image src={fighter.image} alt={fighter.name} mt="2" width={150}></Image>
      <Text mt="2" fontSize="10px"><Link href={fighter.image_source} isExternal> 出典: {fighter.name} RIZIN公式</Link></Text>
      <Text mt="2">入場曲: {fighter.entrance_song}</Text>
      {fighter.youtube_link && (
        <AspectRatio maxW="560px" ratio={16 / 9} mt="4">
          <iframe src={fighter.youtube_link} allowFullScreen title={fighter.name} />
        </AspectRatio>
      )}
    </Box>
  );
}

export default FighterCard;
