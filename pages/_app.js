import "../styles/globals.css";
import Header from "../component/header";
import Footer from "../component/footer";
import { ChakraProvider, Box, VStack, Flex } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
      <ChakraProvider>
        <Box w="100% " h={["55px", "71px"]} />
        <Header />
        <Flex justifyContent={"center"} py={["40px", "80px"]}>
          <VStack
            w={["95%", "95%", "90%", "70%", "70%"]}
            maxW="1300px"
            alignItems={"unset"}
            spacing={["80px", "160px"]}
          >
            <Component {...pageProps} />
          </VStack>
        </Flex>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
