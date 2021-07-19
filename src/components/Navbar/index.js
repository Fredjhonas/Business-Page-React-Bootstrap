import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo_sky.png";

import "./styles.scss";

const Navbar = () => {
  const { t } = useTranslation(["menu"]);

  return (
    <>
      <div className="container-fluid nav_bg" id="navbar">
        <div className="row-nav">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink
                  activeClassName=".menu_active"
                  className="navbar-brand"
                  to="/"
                >
                  {" "}
                  <img src={logo} width="120px" />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName=".menu_active"
                        className="nav-link"
                        aria-current="page"
                        to="/"
                      >
                        {t("home")}
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName=".menu_active"
                        className="nav-link"
                        to="/services"
                      >
                        {t("services")}
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName=".menu_active"
                        className="nav-link"
                        to="/about"
                      >
                        {t("about")}
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName=".menu_active"
                        className="nav-link"
                        to="/contact"
                      >
                        {t("contact")}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
