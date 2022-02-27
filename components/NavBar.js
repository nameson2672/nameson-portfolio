import {Box, Button, Container, Avatar} from "@chakra-ui/react"
import ToggleMode from "./ModeSwitch";

const NavBar = () => {
  return (
    <>
      <Container
        maxW="container.lg"
        display="flex"
              justifyContent="space-between"
              alignItems="center"
      >
        <Avatar
                  size="xl"
                  mt="2"
          name="Nameson Gaudel"
          src="https://bit.ly/dan-abramov"
        />
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" justifyContent="flex-start">
            <Button m="2" variant='ghost'>
              About
            </Button>
            <Button m="2" variant='ghost'>
              Service
            </Button>
            <Button m="2" variant='ghost'>
              Resume
            </Button>
            <Button m="2" variant='ghost'>
              Blog
            </Button>
          </Box>
          <Box m="2">
            <ToggleMode />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default NavBar