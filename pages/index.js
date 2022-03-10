import {
  Box,
  Center,
  Container,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { EmailIcon } from "@chakra-ui/icons";
import BioList from "../components/BioList";
import Head from "next/head";
import Transition from "../components/Transition";

function Home() {
  return (
    <Transition>
      <Head>
        <title>Nameson Gaudel - Homepage</title>
      </Head>
      <Container minW={["sm", "md", "2xl"]}>
        <Text
          fontSize={["2xl", "4xl"]}
          fontFamily="monospace"
          fontWeight={"extrabold"}
          color={useColorModeValue("black", "white")}
          my={"2"}
          px={"2"}
        >
          Hello, I&apos;m Nameson
        </Text>
        <Text
          fontSize={"md"}
          color={useColorModeValue("gray.900", "gray.300")}
          w={["sm", "md", "lg"]}
          px={"2"}
        >
          I am a Fullstack Developer based in Nepal with a passion for building
          digital services/stuff I want. This is the place on internet where you
          can find about me and the project I am dowing and worked on.I have a
          passion in the field of web development and constantly learning new
          technology. I am self-taught developer and searching for a job.
        </Text>
        <center>
          <NextLink href={"mailto:namesongaudel.ng@gmail.com"} passHref>
            <Button
              variant={"solid"}
              leftIcon={<EmailIcon />}
              colorScheme={useColorModeValue("blue", "cyan")}
              my={"4"}
              mt={"8"}
              _focus="none"
              px={"2"}
            >
              Hire Me
            </Button>
          </NextLink>
        </center>
        <Text
          fontSize={["2xl", "4xl"]}
          fontFamily="monospace"
          fontWeight={"bold"}
          color={useColorModeValue("black", "white")}
          my={"2"}
          textDecor={"underline"}
          px={"2"}
        >
          Tech Stack
        </Text>
        <Text
          fontSize={"md"}
          color={useColorModeValue("gray.900", "gray.300")}
          w={["sm", "md", "lg"]}
          px={"2"}
        >
          Currently, I&apos;m available for freelance work and full time job as
          a fullstack engineer.The main tech stack I am using are React,
          Typescript, Next.js, Node.js for frontend and I like to use asp.net
          core and .NET Framework for backend and learning this technology
          constantly.I am also familier with AWS services.
        </Text>
        <Text
          fontSize={["2xl", "4xl"]}
          fontFamily="monospace"
          fontWeight={"bold"}
          color={useColorModeValue("black", "white")}
          my={"2"}
          textDecor={"underline"}
          px={"2"}
        >
          Bio
        </Text>
        <BioList />
        <Text
          fontSize={["2xl", "4xl"]}
          fontFamily="monospace"
          fontWeight={"bold"}
          color={useColorModeValue("black", "white")}
          my={"2"}
          textDecor={"underline"}
          px={"2"}
        >
          Hobby
        </Text>
        <Text
          fontSize={"md"}
          color={useColorModeValue("gray.900", "gray.300")}
          w={["sm", "md", "lg"]}
          mb={"8"}
          px={"2"}
        >
          Reading Books, Playing Guitar, Music, Photography.
        </Text>
      </Container>
    </Transition>
  );
}

export default Home;
