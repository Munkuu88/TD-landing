import { AspectRatio, VStack, Flex, Box, Button, Text } from "@chakra-ui/react";
import { Section6 } from "../texts/section-6";
import { useLanguage } from "../context/language";

export default function SectionSix() {
  const { language, setLanguage } = useLanguage();
  console.log(Section6[language].cntct);
  return (
    <VStack w="100%">
      <Text
        fontSize={["xl", "3xl"]}
        pb={["20px", "50px"]}
        fontWeight={"semibold"}
      >
        {Section6[language].titlePart}
      </Text>
      <AspectRatio ratio={[2 / 4, 4 / 2]} w="100%">
        <Flex flexDir={["column", "column", "column", "row", "row"]} w="100%">
          <Box w={["100%", "100%", "100%", "50%", "50%"]} bg="black" h="100%" />
          <VStack
            spacing={["20px", "30px"]}
            pl={["0px", "40px"]}
            w={["100%", "100%", "100%", "50%", "50%"]}
            h="100%"
            alignItems={"center"}
            justifyContent="center"
            flexDir={"column"}
          >
            <Text fontSize={"xl"} fontWeight={"bold"}>
              {Section6[language].title}
            </Text>
            <Text>{Section6[language].desc}</Text>
            <Button>{Section6[language].cntct}</Button>
          </VStack>
        </Flex>
      </AspectRatio>
    </VStack>
  );
}
