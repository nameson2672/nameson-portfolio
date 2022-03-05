import React from "react";
import { Container, HStack, Tag, useColorModeValue, Flex } from "@chakra-ui/react";

const TechStackTag = ({ data }) => {
  return (
    <Flex wrap={"wrap"}>
      {data.map((e) => (
        <Tag
          size={["md"]}
          key={e.id}
          p={"1"}
          m={"1"}
          rounded={"0"}
          bg={useColorModeValue("blue.500", "cyan.600")}
        >
          {e.title}
        </Tag>
      ))}
    </Flex>
  );
};

export default TechStackTag;
