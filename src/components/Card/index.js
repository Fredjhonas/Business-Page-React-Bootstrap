import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import "./styles.scss";

const Card = (props) => {
  const { imgsrc, title, btnText, text } = props;
  const { t } = useTranslation(["Sdata"]);

  return (
    <>
      <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
        <div className="card" style={{ height: 350 }}>
          <img src={imgsrc} className="card-img h-50" alt={title} />
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h5 className="card-title font-weight-bold">{t(title)}</h5>
            <p className="card-text text-center">{text}</p>
            <NavLink to="/" className="btn-card btn-primary">
              {btnText}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
