import styles from "../styles/Home.module.css";
import SectionOne from "../component/section-1";
import SectionTwo from "../component/section-2";
import SectionThree from "../component/section-3";
import SectionFour from "../component/section-4";
import SectionSix from "../component/section-6";
import SectionSeven from "../component/section-7";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box id="1" />
      <Flex w={["95%", "95%", "90%", "70%", "70%"]}>
        <SectionOne />
      </Flex>
      <Flex justifyContent={"center"} w="100%">
        <Flex w={["95%", "95%", "90%", "70%", "70%"]}>
          <SectionTwo />
        </Flex>
      </Flex>
      <Box id="2" />
      <Box w={["95%", "95%", "90%", "70%", "70%"]}>
        <SectionThree />
      </Box>
      <Box id="3" />
      <Box w={["95%", "95%", "90%", "70%", "70%"]}>
        <SectionFour />
      </Box>
      {/* <SectionFive /> */}
      <Box id="4" />
      <Box w={["95%", "95%", "90%", "70%", "70%"]}>
        <SectionSix />
      </Box>
      <Box w={["95%", "95%", "90%", "70%", "70%"]}>
        <SectionSeven />
      </Box>
    </>
  );
}
