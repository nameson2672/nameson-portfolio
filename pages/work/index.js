import React from 'react'
import Transition from '../../components/Transition';
import { Text, useColorModeValue, Container } from '@chakra-ui/react';
import Work from '../../components/Work';

const service = () => {
  return (
    <Transition>
      <Container minW={["sm", "md", "2xl"]}>
        <Text
          fontSize={["2xl", "4xl"]}
          fontFamily="monospace"
          fontWeight={"bold"}
          color={useColorModeValue("black", "white")}
          my={"2"}
          textDecor={"underline"}
        >
          Works
        </Text>
        <Work />
      </Container>
    </Transition>
  );
}

export default service