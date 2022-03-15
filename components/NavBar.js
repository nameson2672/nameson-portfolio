import NextLink from "next/link";
import { Box, Button, Container, Avatar, Link } from "@chakra-ui/react";
import ToggleMode from "./ModeSwitch";
import { DownloadIcon } from "@chakra-ui/icons";
import img from "../public/card.jpg";

const NavBar = () => {
  return (
    <>
      <Container
        maxW={["container.sm", "container.md", "container.lg"]}
        display="flex"
        mt="2"
        flexDirection={["row", "row", "row"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <NextLink href="/" passHref>
          <Avatar
            size="md"
            mt="4"
            name="Nameson Gaudel"
            cursor={"pointer"}
            src="/card.jpg"
          />
        </NextLink>

        <Box display="flex" justifyContent="space-between">
          <Box display="flex" justifyContent="flex-start">
            <Box display={["none", "none", "block", "block"]}>
              <NextLink href="/" passHref scroll={false}>
                <Button m={["1", "2"]} variant="ghost">
                  About
                </Button>
              </NextLink>
              <NextLink href="/work" passHref scroll={false}>
                <Button m={["1", "2"]} variant="ghost">
                  Work
                </Button>
              </NextLink>

              <Link
                href="https://drive.google.com/file/d/1_Fu-tg4ReidkPmZbjNah8WjotISmHJSf/view"
                isExternal
                passHref
              >
                <Button m={["1", "2"]} variant="ghost">
                  Resume
                  <Box mx={"2"}>
                    <DownloadIcon />
                  </Box>
                </Button>
              </Link>

              <NextLink href="/blog" passHref scroll={false}>
                <Button m={["1", "2"]} variant="ghost">
                  Blog
                </Button>
              </NextLink>
            </Box>
            <Box m={["1", "2"]}>
              <ToggleMode />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default NavBar;
