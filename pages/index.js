import { Box, Center, Container, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import ToggleMode from "../components/ModeSwitch";
import Transition from "../components/Transition";

function Home() {
  return (
    <Transition>
      <Container minW={["sm", "md", "2xl"]}>
        <Text
          fontSize={["2xl", "4xl"]}
          fontFamily="monospace"
          fontWeight={"extrabold"}
          color={"white"}
          my={"2"}
        >
          Hello I'm Nameson
        </Text>
        <Text fontSize={"md"} color={"gray.400"} w={["sm", "md", "lg"]}>
          I am a Fullstack Developer based in Nepal with a passion for building
          digital services/stuff I want. This is the place on internet where you
          can find about me and the project I am dowing and worked on.{' '}
        </Text>
        {/* <Center w={"inherit"} bg={"gray.700"} borderRadius="8" my={"4"}>
          <Text fontSize="xl" px={"10"} py={"2"}>
            Hello, I'm a full-stack developer based in Nepal!
          </Text>
        </Center> */}
      </Container>
    </Transition>
  );
}

export default Home;
