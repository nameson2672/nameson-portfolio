import React from 'react'
import Transition from '../components/Transition';
import { Container, Text, useColorModeValue } from '@chakra-ui/react';

const FourOfour = () => {
  return (
    <Transition>
      <Container centerContent my={"4"} minW={["sm", "md", "2xl"]}>
        <Text
          fontSize={["4xl", "6xl"]}
          fontFamily="monospace"
          fontWeight={"extrabold"}
          color={"red.500"}
          my={"2"}
        >
          404 Page NOT FOUND
        </Text>
        <iframe
          src="https://giphy.com/embed/MaJSupPjuS336yDzVJ"
          width="480"
          height="263"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </Container>
    </Transition>
  );
}


export default FourOfour;