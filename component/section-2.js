import { SimpleGrid, Text, VStack, Image, AspectRatio } from "@chakra-ui/react";
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
      image:
        "https://cdn.discordapp.com/attachments/910331361179619370/993820630124343326/2.png",
    },
    {
      title: Section2[language].title2,
      desc: Section2[language].desc2,
      image:
        "https://cdn.discordapp.com/attachments/910331361179619370/993820630375989298/3.png",
    },
    {
      title: Section2[language].title3,
      desc: Section2[language].desc3,
      image:
        "https://media.discordapp.net/attachments/910331361179619370/993820630682177556/4.png",
    },
    {
      title: Section2[language].title4,
      desc: Section2[language].desc4,
      image:
        "https://cdn.discordapp.com/attachments/910331361179619370/993820630912872499/5.png",
    },
  ];

  return (
    <VStack w={"100%"} spacing={"50px"}>
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight={"semibold"}
        pb={["20px", "50px"]}
      >
        {Section2[language].titlePart}
      </Text>
      <SimpleGrid columns={[2, 2, 3, 4, 4]} w="100%" gap={[4, 4, 6, 6, 8]}>
        {Items.map((el) => {
          return (
            <MotionAspect
              ratio={1}
              key={el.desc}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              borderRadius={"10px"}
              boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            >
              <VStack w="100%" textAlign={"center"} px="10px">
                <Image src={el.image} w="20%" />
                <Text fontWeight={"semibold"} fontSize={["sm", "xl"]}>
                  {el.title}
                </Text>
                <Text fontSize={["xs", "sm"]}>{el.desc}</Text>
              </VStack>
            </MotionAspect>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
}
