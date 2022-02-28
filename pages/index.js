import { Box, Center, Container, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import ToggleMode from "../components/ModeSwitch";
import Transition from "../components/Transition";

function Home() {
  return (
    <Transition>
      <Container minW={["sm", "md", "2xl"]}>
        
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
