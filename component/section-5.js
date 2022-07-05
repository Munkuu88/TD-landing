import { VStack, Text, Box, Flex } from "@chakra-ui/react";
import Slider from "react-slick";

const Items = [
  { title: "1", text: "2" },
  { title: "2", text: "2" },
  { title: "3", text: "2" },
  { title: "4", text: "2" },
  { title: "5", text: "2" },
  { title: "6", text: "2" },
];

export default function SectionFive() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    dots: true,
    arrows: true,
  };

  return (
    <Box h="40vh">
      <Text></Text>
      <Slider {...settings}>
        {Items.map((el) => {
          return (
            <Box key={el.title} p="20px">
              <Flex
                boxSize={"250px"}
                alignItems={"center"}
                justifyContent={"center"}
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
              >
                <Text>{el.title}</Text>
                <Text>{el.text}</Text>
              </Flex>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}