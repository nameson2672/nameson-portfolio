import { Link, useColorModeValue } from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
const FooterLink = ({ Icon, link, id }) => {
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
        key={id}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
        target="_blank"
        _focus="none"
      >
        {Icon}
      </Link>
    </>
  );
};

export default FooterLink;
