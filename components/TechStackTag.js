import React from 'react'
import { HStack, Tag, useColorModeValue } from '@chakra-ui/react';

const TechStackTag = ({data }) => {
    return (
      <HStack>
        {data.map((e) => (
          <Tag size={['sm']} key={e.id} rounded={"0"} bg={useColorModeValue("blue.500","cyan.600")}>
            {e.title}
          </Tag>
        ))}
      </HStack>
    );
};

export default TechStackTag