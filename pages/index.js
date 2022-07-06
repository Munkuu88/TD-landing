import SectionOne from "../component/section-1";
import SectionTwo from "../component/section-2";
import SectionThree from "../component/section-3";
import SectionFour from "../component/section-4";
import SectionSix from "../component/section-6";
import SectionSeven from "../component/section-7";
import { Box, Flex, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box id="1" />
      <Flex justifyContent={"center"} w="100%" pos={"relative"}>
        <Image
          display={["none", "none", "none", "none", "block"]}
          src="https://media.discordapp.net/attachments/910331361179619370/994186220475265034/back_pattern_1.png?width=1606&height=1262"
          w={"60%"}
          opacity={"0.8"}
          pos={"absolute"}
          top={"-100px"}
          left={"-200px"}
          transform={"rotate(-20deg)"}
          zIndex={0}
        />
        <Flex w={["95%", "95%", "90%", "70%", "70%"]} zIndex={1}>
          <SectionOne />
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} w="100%">
        <Flex w={["95%", "95%", "90%", "70%", "70%"]}>
          <SectionTwo />
        </Flex>
      </Flex>
      <Box id="2" />
      <Flex justifyContent={"center"} w="100%" pos={"relative"}>
        <Image
          display={["none", "none", "none", "none", "block"]}
          src="https://media.discordapp.net/attachments/910331361179619370/994186280277643324/back_pattern.2.png"
          w="60%"
          opacity={"0.8"}
          pos={"absolute"}
          right={"-300px"}
          transform={"rotate(-20deg)"}
          zIndex={0}
        />
        <Box w={["95%", "95%", "90%", "70%", "70%"]}>
          <SectionThree />
        </Box>
      </Flex>
      <Box id="3" />
      <Box w={["95%", "95%", "90%", "70%", "70%"]}>
        <SectionFour />
      </Box>
      {/* <SectionFive /> */}
      <Box id="4" />
      <Flex justifyContent={"center"} w="100%" pos={"relative"}>
        <Image
          display={["none", "none", "none", "none", "block"]}
          src="https://media.discordapp.net/attachments/910331361179619370/994186280562864218/back_pattern.3.png"
          w="60%"
          opacity={"0.8"}
          pos={"absolute"}
          right={"-200px"}
          transform={"rotate(-20deg)"}
          zIndex={0}
        />
        <Box w={["95%", "95%", "90%", "70%", "70%"]}>
          <SectionSix />
        </Box>
      </Flex>
      <Box w={["95%", "95%", "90%", "70%", "70%"]}>
        <SectionSeven />
      </Box>
    </>
  );
}
