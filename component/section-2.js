import { SimpleGrid, Text, VStack, Icon, AspectRatio } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {} from "react-icons";

const Items = [
  { title: "Title 1", desc: "desc 1", icon: "" },
  { title: "Title 2", desc: "desc 2", icon: "" },
  { title: "Title 3", desc: "desc 3", icon: "" },
  { title: "Title 4", desc: "desc 4", icon: "" },
  { title: "Title 5", desc: "desc 5", icon: "" },
];

export default function SectionTwo() {
  const MotionAspect = motion(AspectRatio);

  return (
    <VStack w={"100%"} spacing={"50px"}>
      <Text fontSize={"4xl"} fontWeight={"semibold"}>
        Section 1
      </Text>
      <SimpleGrid columns={[2, 2, 3, 5, 5]} w="100%" gap={[4, 8]}>
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
                borderRadius={"10px"}
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
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
