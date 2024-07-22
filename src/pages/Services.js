import React from "react";
import { useTranslation } from "react-i18next";

import "../assets/styles/pages/services.scss";
import Card from "../components/Card";
import Sdata from "../components/Sdata";

const Services = () => {
  const { t } = useTranslation(["services"]);

  return (
    <div className="my-5 min-vh-100">
      <div className="my-3">
        <h1 className="text-center">{t("title")}</h1>
      </div>
      
      <div className="container-lg d-flex justify-content-center align-items-center flex-row flex-wrap">
              {Sdata.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={t("text")}
                    btnText={t("btnText")}
                  />
                );
              })}
      </div>
    </div>
  );
};

export default Services;
