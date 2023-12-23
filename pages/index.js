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
import BioList from "../components/ExperienceList";
import Head from "next/head";
import Transition from "../components/Transition";
import HeadInfo from "../components/HeadInfo"

function Home() {
  return (
    <Transition>
      <Head>
        <title>Nameson Gaudel - Homepage</title>
      </Head>
      <HeadInfo title={"Nameson Gaudel - Homepage"}
        image={"/card.jpg"}
        desc={"Fullstack Developer based in Nepal with a passion for building digital services/stuff he want."}
        url={`/`}/>
      <Container maxW={["25em", "md", "2xl"]}>
        <Text
          fontSize={["2xl", "4xl"]}
          fontFamily="monospace"
          fontWeight={"extrabold"}
          color={useColorModeValue("black", "white")}
          my={"2"}
          px={"2"}
        >
          Hey, I&apos;m Nameson Gaudel
        </Text>
        <Text
          fontSize={"md"}
          color={useColorModeValue("gray.900", "gray.300")}
          // w={["sm", "md", "lg"]}
          px={"2"}
        >
          Toronto-based Fullstack Developer with a passion for crafting digital solutions. Specializing in web development, my expertise spans cloud and backend technologies. Armed with a physics bachelor&apos;s degree, I thrive as a problem solver. As a self-taught developer, I am actively seeking new opportunities to apply and expand my skills in innovative projects.
        </Text>
        <Center>
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
        </Center>
        <Text
          fontSize={["2xl", "4xl"]}
          fontFamily="monospace"
          fontWeight={"bold"}
          color={useColorModeValue("black", "white")}
          my={"2"}
          px={"2"}
        >
          Tech Stack
        </Text>
        <Text
          fontSize={"md"}
          color={useColorModeValue("gray.900", "gray.300")}
          //w={["sm", "md", "lg"]}
          px={"2"}
        >
          I&apos;m a confident and passionate Fullstack Developer based in Toronto. Specializing in web development, my tech stack includes React, TypeScript, Next.js, and Node.js for the frontend, while I use ASP.NET Core and .NET Framework for backend development. With a background in physics, I bring a problem-solving mindset to my work. I am actively seeking new opportunities for freelance and full-time positions, leveraging my skills in AWS. Let's create something amazing together!
        </Text>
        {/* <Text
          fontSize={["2xl", "4xl"]}
          fontFamily="monospace"
          fontWeight={"bold"}
          color={useColorModeValue("black", "white")}
          my={"4"}
          px={"2"}
        >
          Work Experience  
        </Text>
        <BioList /> */}
        <Text
          fontSize={["2xl", "4xl"]}
          fontFamily="monospace"
          fontWeight={"bold"}
          color={useColorModeValue("black", "white")}
          my={"4"}
          px={"2"}
        >
          Hobby
        </Text>
        <Text
          fontSize={"md"}
          color={useColorModeValue("gray.900", "gray.300")}
          //w={["sm", "md", "lg"]}
          mb={"8"}
          px={"2"}
        >
          📚Reading Books, 🎸Playing Guitar, 🎶Music, 📷Photography.
        </Text>
      </Container>
    </Transition>
  );
}

export default Home;
