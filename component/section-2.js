import { SimpleGrid, Text, VStack, Icon, AspectRatio } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/language";
import { Section2 } from "../texts/section-2";

export default function SectionTwo() {
  const MotionAspect = motion(AspectRatio);
  const { language, setLanguage } = useLanguage();
  const Items = [
    {
      title: Section2[language].title1,
      desc: Section2[language].desc1,
      icon: "",
    },
    {
      title: Section2[language].title2,
      desc: Section2[language].desc2,
      icon: "",
    },
    {
      title: Section2[language].title3,
      desc: Section2[language].desc3,
      icon: "",
    },
    {
      title: Section2[language].title4,
      desc: Section2[language].desc4,
      icon: "",
    },
  ];

  return (
    <VStack w={"100%"} spacing={"50px"}>
      <Text fontSize={"4xl"} fontWeight={"semibold"}>
        {Section2[language].titlePart}
      </Text>
      <SimpleGrid columns={[2, 2, 3, 4, 4]} w="100%" gap={[2, 2, 6, 6, 8]}>
        {Items.map((el) => {
          return (
            <MotionAspect
              ratio={1}
              key={el.desc}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <VStack
                w="100%"
                textAlign={"center"}
                px="10px"
                borderRadius={"10px"}
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
              >
                <Icon as={el.icon} />
                <Text fontWeight={"semibold"} fontSize={"xl"}>
                  {el.title}
                </Text>
                <Text>{el.desc}</Text>
              </VStack>
            </MotionAspect>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
}
