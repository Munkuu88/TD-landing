import { Flex, VStack, Text, Image } from "@chakra-ui/react";

export default function SectionThree() {
  return (
    <Flex display={["block", "block", "block", "flex", "flex"]}>
      <Image w={["100%", "100%", "100%", "50%", "50%"]} />
      <VStack
        alignItems={"unset"}
        w={["100%", "100%", "100%", "50%", "50%"]}
        pl={"40px"}
      >
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
    </Flex>
  );
}
