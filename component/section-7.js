import {
  Button,
  HStack,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLanguage } from "../context/language";
import { Section7 } from "../texts/section-7";
import axios from "axios";

export default function SectionSeven() {
  const { language, setLanguage } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const toast = useToast();

  const Handler = () => {
    setIsLoading(true);
    axios
      .post("https://micro.nft.mn/nft1004/operations/subscribeEmail", {
        email: email,
      })
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        toast({
          title: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast({
          title: "Амжилтгүй боллоо.",
          description: "Email буруу эсвэл бүртгүүлсэн байна.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <VStack w="100%">
      <Text
        fontSize={["xl", "3xl"]}
        pb={["20px", "50px"]}
        fontWeight={"semibold"}
      >
        {Section7[language].titlePart}
      </Text>
      <HStack flexDir={["column", "row"]} action={"/"}>
        <Input
          type={"email"}
          mb={["15px", "0px"]}
          placeholder={Section7[language].enter}
          w={["300px", "400px"]}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button isLoading={isLoading} onClick={Handler} w={["100%", "unset"]}>
          {Section7[language].button}{" "}
        </Button>
      </HStack>
    </VStack>
  );
}
