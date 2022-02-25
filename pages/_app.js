import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";


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


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
  
}

export default MyApp
