import { AspectRatio, VStack, Flex, Box, Button, Text } from "@chakra-ui/react";

export default function SectionSix() {
  return (
    <VStack w="100%">
      <Text fontWeight={"semibold"} fontSize={"xl"}>
        Title
      </Text>
      <AspectRatio ratio={[2 / 4, 4 / 2]} w="100%">
        <Flex flexDir={["column", "column", "column", "row", "row"]} w="100%">
          <Box w={["100%", "100%", "100%", "50%", "50%"]} bg="black" h="100%" />
          <Flex
            w={["100%", "100%", "100%", "50%", "50%"]}
            h="100%"
            alignItems={"center"}
            justifyContent="center"
            flexDir={"column"}
          >
            <Text>Title</Text>
            <Text>Desctiption</Text>
            <Button>Button</Button>
          </Flex>
        </Flex>
      </AspectRatio>
    </VStack>
  );
}
