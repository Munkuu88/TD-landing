import { Flex, Text, VStack, Image } from "@chakra-ui/react";
import { useLanguage } from "../context/language";
import { Section1 } from "../texts/section-1";

export default function SectionOne() {
  const { language, setLanguage } = useLanguage();
  return (
    <Flex display={["block", "block", "block", "flex", "flex"]}>
      <VStack alignItems={"unset"} w={["100%", "100%", "100%", "50%", "50%"]}>
        <Text
          id="1"
          as="section"
          fontSize={["xl", "3xl"]}
          fontWeight={"bold"}
          pb={["20px", "50px"]}
        >
          {Section1[language].title}
        </Text>
        <Text fontSize={"xl"}>{Section1[language].desc}</Text>
      </VStack>
      <Image
        w={["100%", "100%", "100%", "50%", "50%"]}
        pt={["40px", "0px"]}
        src="https://media.discordapp.net/attachments/910331361179619370/993820629822361670/1.png"
        pl={["0px", "40px"]}
      />
    </Flex>
  );
}
