import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { useLanguage } from "../context/language";
import { Section7 } from "../texts/section-7";

export default function SectionSeven() {
  const { language, setLanguage } = useLanguage();

  return (
    <VStack w="100%">
      <Text
        fontSize={["xl", "3xl"]}
        pb={["20px", "50px"]}
        fontWeight={"semibold"}
      >
        {Section7[language].titlePart}
      </Text>
      <HStack flexDir={["column", "row"]}>
        <Input
          mb={["15px", "0px"]}
          placeholder={Section7[language].enter}
          w={["300px", "400px"]}
        />
        <Button w={["100%", "unset"]}>{Section7[language].button}</Button>
      </HStack>
    </VStack>
  );
}
