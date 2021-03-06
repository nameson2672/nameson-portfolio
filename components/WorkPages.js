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
  Link,
  Center,
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
    <Container maxW={"7xl"} key={id}>
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
            align={"left"}
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
            {motivation && (
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color= "yellow.500" 
                  _dark={{ color: "yellow.300" }}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  motivation
                </Text>

                <Text fontSize={"lg"}>{motivation}</Text>
              </Box>
            )}
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
                    <Text as={"span"} fontWeight={"bold"} key={e.id}>
                      {e.title}
                    </Text>
                  ))}
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Center>
            <Link isExternal href={codeLink} mx={[4, 8]}>
              <Button
                rounded={"none"}
                w={"full"}
                size={"lg"}
                rightIcon={<FiGithub />}
                bg="gray.900"
                color={"gray.50"}
                _dark={{ bg: "gray.50", color: "gray.900" }}
                // bg={useColorModeValue("gray.900", "gray.50")}
                // color={useColorModeValue("white", "gray.900")}
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
              <Link href={liveLink} isExternal>
                <Button
                  rounded={"none"}
                  w={"full"}
                  target={"_blank"}
                  size={"lg"}
                  rightIcon={<FiActivity />}
                  bg="gray.900"
                  color={"gray.50"}
                  _dark={{ bg: "gray.50", color: "gray.900" }}
                  // bg={useColorModeValue("gray.900", "gray.50")}
                  // color={useColorModeValue("white", "gray.900")}
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
              <Link isDisabled mx={[2, 4, 8]}>
                <Button
                  rounded={"none"}
                  w={"full"}
                  target={"_blank"}
                  size={"lg"}
                  isDisabled
                  rightIcon={<FiActivity />}
                  bg="gray.900"
                  color={"gray.50"}
                  _dark={{ bg: "gray.50", color: "gray.900" }}
                  // bg={useColorModeValue("gray.900", "gray.50")}
                  // color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                >
                  Live
                </Button>
              </Link>
            )}
          </Center>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
