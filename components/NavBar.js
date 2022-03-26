import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Avatar,
  Link,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
} from "@chakra-ui/react";
import ToggleMode from "./ModeSwitch";
import { DownloadIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import img from "../public/card.jpg";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <NextLink href="/" >
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
              <NextLink href="/"  scroll={false}>
                <Button m={["1", "2"]} variant="ghost">
                  About
                </Button>
              </NextLink>
              <NextLink href="/work"  scroll={false}>
                <Button m={["1", "2"]} variant="ghost">
                  Work
                </Button>
              </NextLink>

              <Link
                href="https://drive.google.com/file/d/1_Fu-tg4ReidkPmZbjNah8WjotISmHJSf/view"
                isExternal
                
              >
                <Button m={["1", "2"]} variant="ghost">
                  Resume
                  <Box mx={"2"}>
                    <DownloadIcon />
                  </Box>
                </Button>
              </Link>

              <NextLink href="/blog"  scroll={false}>
                <Button m={["1", "2"]} variant="ghost">
                  Blog
                </Button>
              </NextLink>
            </Box>
            <IconButton
              onClick={onOpen}
              m={["1", "2"]}
              transition={"ease-in-out"}
              colorScheme={useColorModeValue("blue", "cyan")}
              display={["block", "block", "none"]}
              icon={<HamburgerIcon />}
            />
            <Box m={["1", "2"]}>
              <ToggleMode />
            </Box>
          </Box>
        </Box>
      </Container>
      <Drawer size={"full"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <IconButton
              m={["1", "2"]}
              colorScheme={useColorModeValue("blue", "cyan")}
              variant="ghost"
              onClick={onClose}
              icon={<CloseIcon />}
            />
          </DrawerHeader>
          <DrawerBody display={"flex"} flexDirection={"column"}>
            <NextLink href="/"  scroll={false}>
              <Button m={["1", "2"]} variant="ghost" onClick={onClose}>
                About
              </Button>
            </NextLink>
            <NextLink href="/work"  scroll={false}>
              <Button m={["1", "2"]} variant="ghost" onClick={onClose}>
                Work
              </Button>
            </NextLink>

            <Link
              href="https://drive.google.com/file/d/1_Fu-tg4ReidkPmZbjNah8WjotISmHJSf/view"
              isExternal
              
            >
              <Button
                m={["1", "2"]}
                variant="ghost"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"full"}
                onClick={onClose}
              >
                Resume
                <Box mx={"1"}>
                  <DownloadIcon />
                </Box>
              </Button>
            </Link>

            <NextLink href="/blog"  scroll={false}>
              <Button m={["1", "2"]} variant="ghost" onClick={onClose}>
                Blog
              </Button>
            </NextLink>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
