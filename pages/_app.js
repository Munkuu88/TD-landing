import "../styles/globals.css";
import Header from "../component/header";
import Footer from "../component/footer";
import { ChakraProvider, Box, VStack, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { LanguageContextProvider } from "../context/language";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
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
      </Head> */}
      <ChakraProvider>
        <LanguageContextProvider>
          <Box w="100% " h={["55px", "71px"]} />
          <Header />
          <Flex justifyContent={"center"}>
            <VStack
              alignItems={"center"}
              spacing={["80px", "100px"]}
              pb={["40px", "40px"]}
            >
              <Component {...pageProps} />
            </VStack>
          </Flex>
          <Footer />
        </LanguageContextProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
