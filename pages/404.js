import React from "react";
import Transition from "../components/Transition";
import { Container, Text, Box } from "@chakra-ui/react";
import Head from "next/head";

const FourOfour = () => {
  return (
    <Transition>
      <Head>
        <title>Nameson Gaudel - 404</title>
      </Head>
      <Container centerContent my={"4"} maxW={["sm", "md", "2xl"]}>
        <Text
          fontSize={["2xl", "4xl", "6xl"]}
          fontFamily="monospace"
          fontWeight={"extrabold"}
          color={"red.500"}
          my={"2"}
        >
          404 Page NOT FOUND
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

export default FourOfour;
