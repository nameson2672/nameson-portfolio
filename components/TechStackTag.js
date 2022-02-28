import React from 'react'
import { HStack, Tag, useColorModeValue } from '@chakra-ui/react';

const TechStackTag = ({data }) => {
    return (
      <HStack>
        {data.map((e) => (
          <Tag size={['sm']} key={e.id} rounded={"0"} bg={useColorModeValue("gray.200","gray.700")}>
            {e.title}
          </Tag>
        ))}
      </HStack>
    );
};

export default TechStackTag