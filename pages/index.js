import styles from "../styles/Home.module.css";
import SectionOne from "../component/section-1";
import SectionTwo from "../component/section-2";
import SectionThree from "../component/section-3";
import SectionFour from "../component/section-4";
import SectionSix from "../component/section-6";
import SectionSeven from "../component/section-7";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box id="1" />
      <SectionOne />
      <SectionTwo />
      <Box id="2" />
      <SectionThree />
      <Box id="3" />
      <SectionFour />
      {/* <SectionFive /> */}
      <Box id="4" />
      <SectionSix />
      <SectionSeven />
    </>
  );
}
