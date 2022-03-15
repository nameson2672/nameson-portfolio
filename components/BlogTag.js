import { Tag, Flex } from "@chakra-ui/react";

export const BlogTag = ({ data }) => {
  return (
    <Flex wrap={"wrap"}>
      {data.map((e) => (
        <Tag
          size={["md"]}
          key={e.id}
          px={"2"}
          m={"1"}
          rounded={"0"}
          bg={"gray.300"}
          _dark={{ bg: "gray.600" }}
        >
          {e.tagName}
        </Tag>
      ))}
    </Flex>
  );
};
