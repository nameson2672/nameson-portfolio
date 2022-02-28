import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
// import { AnimatePresence } from "framer-motion";
const { AnimatePresence } = require("framer-motion");
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: "sm",
        background: props.colorMode === "dark" ? "gray.900" : "gray.300",
        color: props.colorMode === "dark" ? "white" : "gray.600",
        lineHeight: "tall",
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.800",
      },
    }),
  },
});

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
