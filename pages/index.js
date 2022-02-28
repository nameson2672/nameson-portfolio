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

import Transition from "../components/Transition";

function Home() {
  return (
    <Transition>
      <Container minW={["sm", "md", "2xl"]}>
        <Text
          fontSize={["2xl", "4xl"]}
          fontFamily="monospace"
          fontWeight={"extrabold"}
          color={useColorModeValue("black", "white")}
          my={"2"}
        >
          Hello, I'm Nameson
        </Text>
        <Text
          fontSize={"md"}
          color={useColorModeValue("gray.900", "gray.300")}
          w={["sm", "md", "lg"]}
        >
          I am a Fullstack Developer based in Nepal with a passion for building
          digital services/stuff I want. This is the place on internet where you
          can find about me and the project I am dowing and worked on.I have a
          passion in the field of web development and constantly learning new
          technology. I am self-taught developer and searching for a job.
        </Text>
        <center>
          <NextLink href={"mailto:namesongaudel.ng@gmail.com"}>
            <Button
              variant={"solid"}
              leftIcon={<EmailIcon />}
              colorScheme={useColorModeValue("blue", "yellow")}
              my={"4"}
              mt={"8"}
              _focus="none"
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
        >
          Bio
        </Text>
        <BioList />
      </Container>
    </Transition>
  );
}

export default Home;
