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
import matter from "gray-matter";
// const data = require("../../lib/blog.md");
export async function getStaticProps({}) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const fileName = "blog.md";
  const slug = fileName.replace(".md", "");
  const readFile = fs.readFileSync(`${__dirname}/${fileName}`, "utf-8");
  console.log(readFile);
  // const { data: frontmatter } = matter(readFile);
  // console.log(data);

  // console.log(frontmatter);

  // Pass post data to the page via props
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
        <ReactMarkdown
          style={{
            border: "solid",
            borderRadius: 15,
            marginLeft: 100,
            marginTop: 50,
            width: 500,
          }}
        >
          {readFile}
        </ReactMarkdown>
      </Container>
    </Transition>
  );
};

export default blog;
