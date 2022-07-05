import {
  SimpleGrid,
  VStack,
  Flex,
  Text,
  HStack,
  Image,
  Box,
  Icon,
} from "@chakra-ui/react";

const Items = [
  { title: "12", items: [{ text: "1", link: "" }] },
  { title: "13", items: [{ text: "1", link: "" }] },
  { title: "14", items: [{ text: "1", link: "" }] },
  { title: "15", items: [{ text: "1", link: "" }] },
];

const Item = ({ data }) => {
  return (
    <VStack alignItems={"unset"}>
      <Text fontWeight={"bold"}>{data.title}</Text>
      {data.items.map((el, ind) => {
        return <Text key={ind}>{el.text}</Text>;
      })}
    </VStack>
  );
};

export default function Footer() {
  return (
    <Flex justifyContent={"center"} py="50px" borderTop={"1px solid #dbdbdb"}>
      <VStack w="70%" maxW="1300px" alignItems={"unset"}>
        <SimpleGrid columns={[2, 4]} pb="50px">
          {Items.map((el) => {
            return <Item key={el.title} data={el} />;
          })}
        </SimpleGrid>
        <Flex
          justifyContent={["none", "space-between"]}
          alignItems={["center", "none"]}
          flexDir={["column", "rowS"]}
        >
          <Image
            mb={["15px", "0"]}
            cursor={"pointer"}
            h="30px"
            src="https://media.discordapp.net/attachments/910331361179619370/993345940071133204/TD_logo_1.png"
          />
          <Text mb={["15px", "0"]} color={"gray"} fontSize="sm">
            © 2022 Tomujin Digital LLC{" "}
          </Text>
          <HStack mb={["15px", "0"]}>
            <Icon />
          </HStack>
        </Flex>
      </VStack>
    </Flex>
  );
}
