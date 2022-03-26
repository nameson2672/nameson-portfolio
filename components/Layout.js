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
    <Container
      centerContent
      maxW={["container.sm", "container.md", "container.lg"]}
    >
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Fullstack Developer based in Nepal with a passion for building digital services/stuff he want."
        /> */}
        {/* <meta name="author" content="Nameson Gaudel" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/programming.png" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@NamesonGaudel" />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/dccN2Kw/card.jpg"
        />
        <meta
          name="twitter:description"
          content="Fullstack Developer based in Nepal"
        />
        <meta property="og:site_name" content="Nameson Gaudel - Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.jpg" /> */}
        {/* <!-- Primary Meta Tags --> */}
        <title>Nameson Gaudel - Homepage</title>
        <meta name="title" content="Nameson Gaudel - Homepage" />
        <meta
          name="description"
          content="Fullstack Developer based in Nepal with a passion for building digital services/stuff he want."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nameson.com.np/" />
        <meta property="og:title" content="Nameson Gaudel - Homepage" />
        <meta
          property="og:description"
          content="Fullstack Developer based in Nepal with a passion for building digital services/stuff he want."
        />
        <meta property="og:image" content="/card.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nameson.com.np/" />
        <meta property="twitter:title" content="Nameson Gaudel - Homepage" />
        <meta
          property="twitter:description"
          content="Fullstack Developer based in Nepal with a passion for building digital services/stuff he want."
        />
        <meta property="twitter:image" content="/card.jpg"></meta>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
