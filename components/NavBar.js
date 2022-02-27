import NextLink from "next/link";
import { Box, Button, Container, Avatar } from "@chakra-ui/react"
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
            <NextLink href="/about" passHref scroll={false}>
              <Button m="2" variant="ghost">
                About
              </Button>
            </NextLink>
            <NextLink href="/service" passHref scroll={false}>
              <Button m="2" variant="ghost">
                Service
              </Button>
            </NextLink>

            <NextLink href="/resume" passHref scroll={false}>
              <Button m="2" variant="ghost">
                Resume
              </Button>
            </NextLink>

            <NextLink href="/blog" passHref scroll={false}>
              <Button m="2" variant="ghost">
                Blog
              </Button>
            </NextLink>
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