import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

import imgEn from "../../assets/images/idiomas/eeuu.png";
import imgEs from "../../assets/images/idiomas/espana.png";

const TopBar = () => {
  const { t, i18n } = useTranslation(["topBar"]);
  const language = i18n.language;
  return (
    <div>
      <div className="row topbar">
        <div className="col-8">
          <div className="welcome-note" style={{ marginTop: "10px" }}>
            <span
              className="popover--text"
              data-toggle="popover"
              data-content="Bienvenido."
            >
              <i className="icofont-info-square"></i>
            </span>
            <strong className="text">{t("welcome") + " Sky Hosting"}</strong>
          </div>
        </div>
        <div className="col-4">
          <div className="language-currency-dropdown d-flex align-items-center justify-content-end mt-1">
            <div className="mb-1">
              <div>
                <div className="dropdown">
                  <button
                    className="btn btn-ligth dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={language ? (language === "es" ? imgEs : imgEn) : imgEs}
                      style={{
                        marginRight: "-9px",
                        marginTop: "0px",
                      }}
                    />
                    &nbsp; &nbsp;{" "}
                    {i18n.language === "es" ? t("spanish") : t("english")}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a
                      className="dropdown-item btn"
                      onClick={() => i18n.changeLanguage("es")}
                    >
                      <img
                        src={imgEs}
                        style={{
                          marginRight: "-9px",
                          marginTop: "0px",
                        }}
                      />{" "}
                      &nbsp; &nbsp;
                      {t("spanish")}
                    </a>
                    <a
                      className="dropdown-item btn"
                      onClick={() => i18n.changeLanguage("en")}
                    >
                      <img
                        src={imgEn}
                        style={{
                          marginRight: "-9px",
                          marginTop: "0px",
                        }}
                      />{" "}
                      &nbsp; &nbsp;
                      {t("english")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
