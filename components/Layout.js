// components/layout.js

import { Box, Container } from "@chakra-ui/react";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Container centerContent maxW="container.lg">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
