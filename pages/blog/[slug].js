import { useEffect } from "react";
import Prism from "prismjs";
import ReactMarkdown from "react-markdown";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");

import Transition from "../../components/Transition";
import { Container, Text, Box } from "@chakra-ui/react";
import Head from "next/head";
import fs from "fs";

export async function getStaticPaths() {
  const data = require("../../lib/worksInfo.json");
  // Get the paths we want to pre-render based on posts
  const paths = data.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({}) {
  const fileName = "blog.md";
  const slug = fileName.replace(".md", "");
  const readFile = fs.readFileSync(`${__dirname}/${fileName}`, "utf-8");

    
  return { props: { readFile } };
}

const blog = ({ readFile }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const mark = "";
  return (
    <Transition>
      <Head>
        <title>Nameson Gaudel - Blog</title>
      </Head>
      <Container centerContent my={"4"} maxW={["sm", "md", "2xl"]}>
        <ReactMarkdown>{readFile}</ReactMarkdown>
      </Container>
    </Transition>
  );
};

export default blog;
