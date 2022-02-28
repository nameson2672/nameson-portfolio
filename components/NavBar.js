import NextLink from "next/link";
import { Box, Button, Container, Avatar } from "@chakra-ui/react"
import ToggleMode from "./ModeSwitch";
import { DownloadIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <>
      <Container
        maxW={["container.sm", "container.md", "container.lg"]}
        display="flex"
        flexDirection={["column", "row", "row"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <NextLink href="/">
          <Avatar
            size="xl"
            mt="2"
            name="Nameson Gaudel"
            cursor={"pointer"}
            src="https://bit.ly/dan-abramov"
          />
        </NextLink>

        <Box display="flex" justifyContent="space-between">
          <Box display="flex" justifyContent="flex-start">
            <NextLink href="/" passHref scroll={false}>
              <Button m="2" variant="ghost">
                About
              </Button>
            </NextLink>
            <NextLink href="/work" passHref scroll={false}>
              <Button m={["1", "2"]} variant="ghost">
                Work
              </Button>
            </NextLink>

            <NextLink href="/resume" passHref scroll={false}>
              <Button m={["1", "2"]} variant="ghost">
                Resume
                <Box mx={"2"}>
                  <DownloadIcon  />
                </Box>
              </Button>
            </NextLink>

            <NextLink href="/blog" passHref scroll={false}>
              <Button m={["1", "2"]} variant="ghost">
                Blog
              </Button>
            </NextLink>
            <Box m={["1", "2"]}>
              <ToggleMode />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default NavBar