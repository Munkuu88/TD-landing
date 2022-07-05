import { Flex, VStack, Text, Image } from "@chakra-ui/react";
import { useLanguage } from "../context/language";
import { Section3 } from "../texts/section-3";

export default function SectionThree() {
  const { language, setLanguage } = useLanguage();

  return (
    <Flex display={["block", "block", "block", "flex", "flex"]}>
      <Image w={["100%", "100%", "100%", "50%", "50%"]} />
      <VStack
        alignItems={"unset"}
        w={["100%", "100%", "100%", "50%", "50%"]}
        pl={["0px", "40px"]}
      >
        <Text
          fontSize={["xl", "3xl"]}
          pb={["20px", "50px"]}
          fontWeight={"bold"}
        >
          {Section3[language].title}
        </Text>
        <Text fontSize={"lg"}>{Section3[language].desc}</Text>
      </VStack>
    </Flex>
  );
}
