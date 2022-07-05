import "../styles/globals.css";
import Header from "../component/header";
import { ChakraProvider, Box, VStack, Flex } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Box w="100% " h="71px" />
      <Header />
      <Flex justifyContent={"center"} py="80px">
        <VStack w={["1200px"]} alignItems={"unset"} spacing={"160px"}>
          <Component {...pageProps} />
        </VStack>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
