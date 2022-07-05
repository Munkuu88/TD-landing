import styles from "../styles/Home.module.css";
import SectionOne from "../component/section-1";
import SectionTwo from "../component/section-2";
import SectionThree from "../component/section-3";
import SectionFour from "../component/section-4";
import SectionFive from "../component/section-5";
import SectionSix from "../component/section-6";
import SectionSeven from "../component/section-7";
import { useState } from "react";

export default function Home() {
  const [lang, setlang] = useState(false);

  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </>
  );
}
