import React from "react";
import Transition from "../../components/Transition";
import { Container, Text, Box } from "@chakra-ui/react";
import Head from "next/head";

const blog = () => {
  return (
    <Transition>
      <Head>
        <title>Nameson Gaudel - Blog</title>
      </Head>
      <Container centerContent my={"4"} maxW={["sm", "md", "2xl"]}>
        <Text
          fontSize={["2xl", "4xl", "6xl"]}
          fontFamily="monospace"
          fontWeight={"extrabold"}
          color={"green.500"}
          my={"2"}
          px={"2"}
        >
          Blogs are comming soon...
        </Text>
        <Box maxW={["sm", "md", "2xl"]}>
          <iframe
            src="https://giphy.com/embed/MaJSupPjuS336yDzVJ"
            width="300"
            height="263"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </Box>
      </Container>
    </Transition>
  );
};

export default blog;
