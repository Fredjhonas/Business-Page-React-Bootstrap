import React from "react";
import { useTranslation } from "react-i18next";
import image from "../assets/images/about.png";
import Common from "../components/Common";

const About = () => {
  const { t } = useTranslation(["about"]);

  return (
    <>
      <Common
        title={t("title")}
        subtitle={t("subtitle")}
        imgsrc={image}
        visit="/contact"
        btname={t("btname")}
      />
    </>
  );
};

export default About;
