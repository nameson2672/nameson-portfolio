import React from 'react'
import Transition from '../../components/Transition';
import { Text, useColorModeValue, Container } from '@chakra-ui/react';
import Work from '../../components/Work';
import workData from '../../lib/worksInfo.json';

const service = () => {
  console.log(workData);
  //const workDataConverted = JSON.parse(workData);
  
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
        {workData.map((e) => (
          <Work title={e.title} desc={e.desc} image={e.image} stackList={e.stackList} id={e.id} slug={e.slug}/>
        ))}
      </Container>
    </Transition>
  );
}

export default service
