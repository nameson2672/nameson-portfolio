import { chakra, Flex, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { BlogTag } from "./BlogTag";
import blogData from "../lib/blog.json";

function TestimonialCard({ ...props }) {
  const { title, shortDesc, tags } = props;
  const ShortParagaraphe = (str, max, suffix) =>
    str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(" ")
        )}${suffix}`;

  return (
    <Flex
      cursor={"pointer"}
      boxShadow={"lg"}
      maxW={["300", "400", "640px"]}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      p={5}
      justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("white", "gray.700")}
      transition="0.3s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <chakra.h1
          fontFamily={"Inter"}
          fontWeight={"bold"}
          fontSize={"20px"}
          pb={4}
        >
          {title}
        </chakra.h1>

        <chakra.span
          fontFamily={"Inter"}
          fontWeight={"medium"}
          color={"gray.500"}
        >
          {" "}
          - {ShortParagaraphe(shortDesc, 200, "....")}
        </chakra.span>

        <BlogTag data={tags} />
      </Flex>
    </Flex>
  );
}

export default function BlogCard() {
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <SimpleGrid
        columns={{ base: 1, xl: 1 }}
        spacing={"10"}
        mt={10}
        mb={10}
        mx={"auto"}
      >
        {blogData.data.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
