import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import TechStackTag from "./TechStackTag";
import NextLink from "next/link";

const Work = ({ title, desc, image, stackList, id, slug}) => {
  const TechFortest = [
    {
      title: "NextJS",
      id: 1,
    },
    {
      title: "React",
      id: 2,
    },
  ];
  return (
    <NextLink href={"/work/"+slug}>
      <Center py={6} Id={id} cursor="pointer">
        <Box
          maxW={"345px"}
          w={"full"}
          bg={useColorModeValue("gray.100", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box
            h={"210px"}
            bg={"gray.800"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image src={image} layout={"fill"} />
          </Box>
          <Stack>
            <TechStackTag data={stackList} />
            <Heading
              color={useColorModeValue("gray.600", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {title}
            </Heading>
            <Text color={"gray.500"}>{desc}</Text>
          </Stack>
        </Box>
      </Center>
    </NextLink>
  );
};

export default Work;
