import {
  Fade,
  ScaleFade,
  Slide,
  useDisclosure,
  SlideFade,
  Button,
  Lorem,
  Box,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
 import ToggleMode from "../components/ModeSwitch";


 function Home() {
 const { isOpen, onToggle } = useDisclosure();

 return (
   <>
     <Button onClick={onToggle}>Click Me</Button>
     <ScaleFade initialScale={0.9} in={isOpen}>
       <Box
         p="40px"
         color="white"
         mt="4"
         bg="teal.500"
         rounded="md"
         shadow="md"
       >
         Fade
       </Box>
     </ScaleFade>
   </>
 );
}

export default Home;