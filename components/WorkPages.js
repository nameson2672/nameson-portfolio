import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
    ListItem,
  Link
} from "@chakra-ui/react";
import TechStackTag from "./TechStackTag";

import { FiGithub, FiActivity } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

export default function WorkPages({
  title,
  desc,
  image,
  stackList,
  id,
  slug,
  codeLink,
  liveLink,
  explain,
  motivation,
  liveStatus,
}) {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {title}
            </Heading>
            {/* <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              <TechStackTag data={stackList} />
            </Text> */}
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{explain}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                motivation
              </Text>

              <Text fontSize={"lg"}>{motivation}</Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Technology Used
              </Text>

              <List spacing={2}>
                <ListItem display={"flex"} flexDirection={"column"}>
                  {stackList.map((e) => (
                    <Text as={"span"} fontWeight={"bold"}>
                      {e.title}
                    </Text>
                  ))}
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Flex>
            <Link mx={8} isExternal href={codeLink}>
              <Button
                rounded={"none"}
                w={"full"}
                mx={8}
                size={"lg"}
                rightIcon={<FiGithub />}
                bg={useColorModeValue("gray.900", "gray.50")}
                color={useColorModeValue("white", "gray.900")}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                Code
              </Button>
            </Link>
            {liveStatus ? (
              <Link href={liveLink} isExternal mx={8} isDisabled>
                <Button
                  rounded={"none"}
                  w={"full"}
                  mx={8}
                  target={"_blank"}
                  size={"lg"}
                  rightIcon={<FiActivity />}
                  bg={useColorModeValue("gray.900", "gray.50")}
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  Live
                </Button>
              </Link>
            ) : (
              <Link mx={8} isDisabled>
                <Button
                  rounded={"none"}
                  w={"full"}
                  mx={8}
                  target={"_blank"}
                  size={"lg"}
                  isDisabled
                  rightIcon={<FiActivity />}
                  bg={useColorModeValue("gray.900", "gray.50")}
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  Live
                </Button>
              </Link>
            )}
          </Flex>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
