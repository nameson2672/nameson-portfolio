import { useEffect } from "react";
import Prism from "prismjs";
import ReactMarkdown from "react-markdown";
import HeadInfo from "../../components/HeadInfo";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");

import Transition from "../../components/Transition";
import { Container, Box } from "@chakra-ui/react";
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
  return (
    <Transition>
      <HeadInfo
        title={PostInfo.titlr}
        image={PostInfo.CoverImage}
        desc={PostInfo.shortDesc}
      />

      <Container centerContent my={"4"} maxW={["sm", "md", "2xl"]}>
        <Container maxW={["25em", "md", "2xl"]}>
          <ReactMarkdown>{readFile}</ReactMarkdown>
        </Container>
      </Container>
    </Transition>
  );
};

export default blog;
