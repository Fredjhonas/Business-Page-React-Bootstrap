import React from "react";
import { NavLink } from "react-router-dom";
import { useMobileRange } from "../../customHook";
import "./styles.scss";

const Common = (props) => {
  const { title, subtitle, btname, imgsrc, visit } = props;
  let mobileRange = useMobileRange();

  return (
    <>
      <section
        id="header"
        className="d-flex align-items-center justify-content-center vh-100" 
      >
        <div className="p-4">
          <div className={`row ${mobileRange ? "row-reverse" : ""}`}>
            <div className="col-lg-6">
              <h1>
                {title}
                <strong className="brand-name">
                  <br />
                  Sky Hosting
                </strong>
              </h1>
              <h2 className="my-3">{subtitle}</h2>
              <div className="mt-3">
                <NavLink to={visit} className="btn-get-started">
                  {btname}
                </NavLink>
              </div>
              {mobileRange && <br />}
              {mobileRange && <br />}
            </div>
            <div className="col-lg-6 mt-20 header-img">
              <img
                src={imgsrc}
                className="img-fluid animated"
                alt="about img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
