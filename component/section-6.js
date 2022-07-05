import {
  AspectRatio,
  SimpleGrid,
  VStack,
  Flex,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";

export default function SectionSix() {
  return (
    <VStack w="100%">
      <Text fontWeight={"semibold"} fontSize={"xl"}>
        Titl
      </Text>
      <AspectRatio ratio={2 / 4}>
        <SimpleGrid columns={2}>
          <Box />
          <Flex
            alignItems={"center"}
            justifyContent="center"
            flexDir={"column"}
          >
            <Text>s</Text>
            <Text></Text>
            <Button>Button</Button>
          </Flex>
        </SimpleGrid>
      </AspectRatio>
    </VStack>
  );
}
