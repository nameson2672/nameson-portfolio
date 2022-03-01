import React, { Children } from "react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Text,
  Container,
  Center,
  Link,
  Button,
  LinkOverlay,
  chakra,
} from "@chakra-ui/react";

import { useColorMode, useColorModeValue } from "@chakra-ui/react";

import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const FooterLink = ({ children, link }) => {
  return (
    <>
      <Link
        href={link}
        isExternal
        mx="4"
        w={"10"}
        h={"10"}
        rounded="full"
        fontSize="xl"
        border={"2xl"}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
        target="_blank"
        _focus="none"
      >
        {children}
      </Link>
    </>
  );
};

const Footer = () => {
  const IconInfo = [
    {
      icon: <FiGithub />,
      link: "https://github.com/nameson2672",
    },
    {
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/nameson-gaudel-855541172/",
    },
    {
      icon: <FiTwitter />,
      link: "https://twitter.com/NamesonGaudel",
    },
    {
      icon: <FiMail />,
      link: "mailto:namesongaudel.ng@gmail.com",
    },
  ];

  const renderSocial = () => {
    return IconInfo.map((e) => {
      return <FooterLink link={e.link}>{e.icon}</FooterLink>;
    });
  };

  return (
    <Container maxW="inherit" centerContent>
      <RangeSlider isDisabled="True" max="100" min="0" defaultValue={[0, 100]}>
        <RangeSliderTrack bg="red.100">
          <RangeSliderFilledTrack bg="gray.500" h="0.5" />
        </RangeSliderTrack>
      </RangeSlider>
      <Container
        maxW="container.md"
        display="flex"
        justifyContent="space-between"
        alignItems="space-between"
        mt="10"
      >
        <Text fontSize="xl">Nameson Gaudel</Text>
        <Box display="flex" alignItems="center">
          {renderSocial()}
        </Box>
      </Container>
      <Text my={"8"} color="gray.500">© 2022 Nameson Gaudel. All Rights Reserved.</Text>
    </Container>
  );
};

export default Footer;
