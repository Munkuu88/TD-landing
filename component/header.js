import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Sections = [
  { text: "1", link: "" },
  { text: "2", link: "" },
  { text: "3", link: "" },
  { text: "4", link: "" },
  { text: "5", link: "" },
];

export default function Header() {
  const MotionBox = motion(Box);

  return (
    <Flex
      justifyContent={"center"}
      py="20px"
      pos={"fixed"}
      top={"0"}
      bg="rgba(250, 250, 250, 0.5)"
      w="100%"
      zIndex={1}
    >
      <Box
        w="100%"
        h="71px"
        pos={"absolute"}
        left={"0"}
        top={"0"}
        backdropFilter={"blur(10px)"}
      />
      <Flex h="fit-content" w="70%" justifyContent={"space-between"} zIndex={2}>
        <Image
          cursor={"pointer"}
          h="30px"
          src="https://media.discordapp.net/attachments/910331361179619370/993345940071133204/TD_logo_1.png"
        />
        <HStack spacing={"20px"} fontSize={"sm"} fontWeight={"bold"}>
          {Sections.map((el) => {
            return (
              <Text cursor={"pointer"} key={el.text}>
                {el.text}
              </Text>
            );
          })}
          <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Text
              px="10px"
              py="5px"
              borderRadius={"10px"}
              bg="white"
              cursor={"pointer"}
            >
              Contact Us
            </Text>
          </MotionBox>
        </HStack>
      </Flex>
    </Flex>
  );
}