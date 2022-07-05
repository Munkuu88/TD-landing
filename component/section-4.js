import { SimpleGrid, VStack, Text, Image, AspectRatio } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/language";
import { Section4 } from "../texts/section-4";

export default function SectionFour() {
  const MotionAspect = motion(AspectRatio);
  const { language, setlanguage } = useLanguage();
  const Items = [
    {
      title: Section4[language].title1,
      image:
        "https://cdn.discordapp.com/attachments/910331361179619370/993820631344877608/Asset_5150x.png",
      link: "https://tinylearn.app/",
    },
    {
      title: Section4[language].title2,
      image:
        "https://media.discordapp.net/attachments/910331361179619370/993820631554601020/elfc_logo_gradient.png",
      link: "https://elfchain.io/",
    },
    {
      title: Section4[language].title3,
      image:
        "https://media.discordapp.net/attachments/910331361179619370/993822820444422164/12.png?width=1294&height=1404",
      link: "https://nft.mn/",
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
            <a href={el.link} key={el.title} target={"_blank"}>
              <MotionAspect
                ratio={1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                pos="relative"
                borderRadius={"10px"}
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
              >
                <VStack w="100%">
                  <Image src={el.image} w="40%" />
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
            </a>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
}
