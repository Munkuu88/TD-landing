import { SimpleGrid, VStack, Text, Icon, AspectRatio } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/language";
import { Section4 } from "../texts/section-4";

export default function SectionFour() {
  const MotionAspect = motion(AspectRatio);
  const { language, setlanguage } = useLanguage();
  const Items = [
    {
      title: Section4[language].title1,
      image: "",
    },
    {
      title: Section4[language].title2,
      image: "",
    },
    {
      title: Section4[language].title3,
      image: "",
    },
  ];

  return (
    <VStack w={"100%"} spacing={"50px"}>
      <Text
        fontSize={["xl", "3xl"]}
        pb={["20px", "50px"]}
        fontWeight={"semibold"}
      >
        {Section4[language].titlePart}
      </Text>
      <SimpleGrid columns={[1, 3]} w="100%" gap={[2, 2, 4, 4, 8]}>
        {Items.map((el) => {
          return (
            <MotionAspect
              ratio={1}
              key={el.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              pos="relative"
            >
              <VStack
                w="100%"
                borderRadius={"10px"}
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
              >
                <Icon as={el.icon} />
                <Text fontWeight={"semibold"} fontSize={"xl"}>
                  {el.title}
                </Text>
                <Text>{el.desc}</Text>
                <Text
                  pos={"absolute"}
                  bottom={"10"}
                  right={"10"}
                  cursor={"pointer"}
                  textDecoration={"underline"}
                >
                  Read more
                </Text>
              </VStack>
            </MotionAspect>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
}
