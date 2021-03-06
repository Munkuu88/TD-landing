import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  Icon,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { useLanguage } from "../context/language";
import { languages } from "../context/language";

const Sections = [
  { text: "Home", link: "1" },
  { text: "About Us", link: "2" },
  { text: "Our Products", link: "3" },
  { text: "Career", link: "4" },
];

export default function Header() {
  const MotionBox = motion(Box);
  const toggleTheme = () => {
    setLanguage(language === languages.mn ? languages.en : languages.mn);
  };
  const { language, setLanguage } = useLanguage();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justifyContent={"center"}
        py="20px"
        pos={"fixed"}
        top={"0"}
        bg="rgba(250, 250, 250, 0.5)"
        w="100%"
        display={["none", "none", "none", "flex", "flex"]}
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
        <Flex
          h="fit-content"
          w="70%"
          maxW="1300px"
          justifyContent={"space-between"}
          zIndex={2}
        >
          <a href="/">
            <Image
              cursor={"pointer"}
              h="30px"
              src="https://media.discordapp.net/attachments/910331361179619370/993345940071133204/TD_logo_1.png"
            />
          </a>
          <HStack spacing={"20px"} fontSize={"sm"} fontWeight={"bold"}>
            {Sections.map((el) => {
              return (
                <a href={`#${el.link}`} key={el.link}>
                  <Text cursor={"pointer"}>{el.text}</Text>
                </a>
              );
            })}
            <a href="https://www.facebook.com/tomujindigital" target={"_blank"}>
              <MotionBox
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Text
                  px="10px"
                  py="5px"
                  borderRadius={"10px"}
                  bg="white"
                  cursor={"pointer"}
                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
                >
                  Contact Us
                </Text>
              </MotionBox>
            </a>
          </HStack>
        </Flex>
      </Flex>
      <Flex
        bg="rgba(250, 250, 250, 0.5)"
        justifyContent={"center"}
        pos="fixed"
        zIndex={10}
        top={0}
        w="100%"
        display={["flex", "flex", "flex", "none", "none"]}
      >
        <Box
          w="100%"
          h="55px"
          pos={"absolute"}
          left={"0"}
          top={"0"}
          backdropFilter={"blur(10px)"}
          zIndex={11}
        />
        <Flex justifyContent={"space-between"} zIndex={20} w="95%" p="15px">
          <Image
            cursor={"pointer"}
            h="25px"
            src="https://media.discordapp.net/attachments/910331361179619370/993345940071133204/TD_logo_1.png"
          />
          <Icon as={FiMenu} boxSize="30px" onClick={onOpen} />
          <DrawerMenu isOpen={isOpen} onClose={onClose} Sections={Sections} />
        </Flex>
      </Flex>
    </>
  );
}

const DrawerMenu = ({ isOpen, onClose, Sections }) => {
  return (
    <Drawer isOpen={isOpen} size={"full"} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Tomujin Digital</DrawerHeader>

        <DrawerBody>
          <VStack alignItems={"unset"} spacing={"20px"}>
            {Sections.map((el) => {
              return (
                <a href={`#${el.text}`} key={el.link}>
                  <Text onClick={onClose}>{el.text}</Text>
                </a>
              );
            })}
          </VStack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
