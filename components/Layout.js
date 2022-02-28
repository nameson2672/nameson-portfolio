// components/layout.js
const { motion } = require("framer-motion");
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./NavBar";
import Footer from "./Footer";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export default function Layout({ children }) {
  return (
    <Container centerContent maxW={["container.sm", "container.md", "container.lg"]}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nameson's homepage" />
        <meta name="author" content="Nameson Gaudel" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@nameson" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Takuya Matsuyama's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Nameson Gaudel's - Homepage</title>
      </Head>
      <Navbar />
        <main>{children}</main>
        <Footer />
    </Container>
  );
}
