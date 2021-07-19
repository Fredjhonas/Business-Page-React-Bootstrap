import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./styles.scss";

const Card = (props) => {
  const { imgsrc, title, btnText, text } = props;
  const { t } = useTranslation(["Sdata"]);

  return (
    <>
      <div className="col-md-4 col-10 mx-auto d-flex">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{t(title)}</h5>
            <p className="card-text">{text}</p>
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
