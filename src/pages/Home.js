import React from "react";
import { useTranslation } from "react-i18next";
import image from "../assets//images/home.png";
import Common from "../components/Common";

const Home = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div className="container">
      <Common
        title={t("title")}
        subtitle={t("subtitle")}
        imgsrc={image}
        visit="/services"
        btname={t("btname")}
      />
    </div>
  );
};

export default Home;
