import React from "react";
import { useTranslation } from "react-i18next";

import "./styles.scss";

const Footer = () => {
  var date = new Date();
  var year = date.getFullYear();
  const { t } = useTranslation(["footer"]);

  return (
    <footer className="footer">
      <a href="/">© {year} SkyHosting, Inc.</a>
      <a href="/">{t("terms")}</a>
      <a href="/">{t("privacy")}</a>
      <a href="/">{t("help")}</a>
    </footer>
  );
};

export default Footer;
