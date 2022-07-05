import { Box, Flex, Text, VStack, Image } from "@chakra-ui/react";

export default function SectionOne() {
  return (
    <Flex display={["block", "block", "block", "flex", "flex"]}>
      <VStack alignItems={"unset"} w={["100%", "100%", "100%", "50%", "50%"]}>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          Title is here
        </Text>
        <Text fontSize={"lg"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          ultricies erat dignissim, faucibus lorem et, feugiat justo. Fusce at
          luctus urna, sed fringilla ligula. Pellentesque elit ipsum, ornare sit
          amet porttitor ac, ultricies eget libero.
        </Text>
      </VStack>
      <Image w={["100%", "100%", "100%", "50%", "50%"]} pl={"40px"} />
    </Flex>
  );
}
