import { Flex, Text, VStack, Image } from "@chakra-ui/react";
import { useLanguage } from "../context/language";
import { Section1 } from "../texts/section-1";

export default function SectionOne() {
  const { language, setLanguage } = useLanguage();
  return (
    <Flex display={["block", "block", "block", "flex", "flex"]}>
      <VStack alignItems={"unset"} w={["100%", "100%", "100%", "50%", "50%"]}>
        <Text
          fontSize={["xl", "3xl"]}
          fontWeight={"bold"}
          pb={["20px", "50px"]}
        >
          {Section1[language].title}
        </Text>
        <Text fontSize={"xl"}>{Section1[language].desc}</Text>
      </VStack>
      <Image w={["100%", "100%", "100%", "50%", "50%"]} pl={"40px"} />
    </Flex>
  );
}
