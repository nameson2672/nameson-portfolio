import { useEffect } from "react";
import Prism from "prismjs";
import ReactMarkdown from "react-markdown";
import HeadInfo from "../../components/HeadInfo";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");

import Transition from "../../components/Transition";
import {
  Container,
  Box,
  Image,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import Head from "next/head";
import fs from "fs";

export async function getStaticPaths() {
  const data = require("../../lib/blog.json");
  // Get the paths we want to pre-render based on posts
  const paths = data.data.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = require("../../lib/blog.json");
  const FindOne = (data) => {
    return data.slug === params.slug;
  };
  const [PostInfo] = data.data.filter(FindOne);
  const fileName = PostInfo.mdFileName;
  // const slug = fileName.replace(".md", "");
  const readFile = fs.readFileSync(
    `${process.cwd()}/Posts/${fileName}.md`,
    "utf-8"
  );

  return { props: { readFile, PostInfo } };
}

const blog = ({ readFile, PostInfo }) => {
  let mode;
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const wordCount = readFile?.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);
  return (
    <Transition>
      <HeadInfo
        title={PostInfo.titlr}
        image={PostInfo.CoverImage}
        desc={PostInfo.shortDesc}
      />

      <Container centerContent my={"4"} maxW={["sm", "md", "2xl"]}>
        <Text
          w={"inherit"}
          align={"center"}
          fontWeight={"extrabold"}
          fontSize={["large", "2xl", "4xl"]}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          {PostInfo.title}
        </Text>
        <Flex m={"4"} color={useColorModeValue("gray.500", "gray.500")}>
          <Text mx={["1", "2", "4"]}>- {minutesToRead} min read</Text>
          <Text>- {PostInfo.publishOn} </Text>
        </Flex>
        <Box>
          <Image alt={PostInfo.title} src={PostInfo.CoverImage} fit={"cover"} />
        </Box>
        <Container maxW={["25em", "md", "2xl"]}>
          <ReactMarkdown>{readFile}</ReactMarkdown>
        </Container>
      </Container>
    </Transition>
  );
};

export default blog;
