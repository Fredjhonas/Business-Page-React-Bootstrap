import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "../assets/styles/pages/contact.scss";

const Contact = () => {
  const { t, i18n } = useTranslation(["contact"]);

  const idioma = i18n.language;

  const [form, setValues] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const clearInputs = () => {
    setValues({
      email: "",
      name: "",
      phone: "",
      message: "",
    });
    document.getElementById("InputEmail").focus();
  };

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (idioma == "es") {
      alert(
        `Mi nombre es ${form.name}. Mi número de teléfono es ${form.phone}, y mi correo electrónico es ${form.email}\nMi mensaje es ${form.message}`
      );
    } else {
      alert(
        `My name is ${form.name}. My mobile number is ${form.phone}, and my email is ${form.email}\nMy message is ${form.message}`
      );
    }
    clearInputs();
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="m-3">
        <h1 id="contact-title" className="text-center">
          {t("title")}
        </h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{t("label-email")}</label>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  placeholder={t("placeholder-email")}
                  aria-describedby="emailHelp"
                  name="email"
                  value={form.email}
                  onChange={handleInput}
                />
                <small id="emailHelp" className="form-text text-muted">
                  {t("note-email")}
                </small>
              </div>

              <div className="form-group">
                <label>{t("label-name")}</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={t("placeholder-name")}
                  name="name"
                  value={form.name}
                  onChange={handleInput}
                />
              </div>

              <div className="form-group">
                <label>{t("label-phone")}</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={t("placeholder-number")}
                  name="phone"
                  value={form.phone}
                  onChange={handleInput}
                />
              </div>

              <div className="form-group">
                <label>{t("label-msg")}</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  placeholder={t("placeholder-msg")}
                  value={form.message}
                  onChange={handleInput}
                />
              </div>

              <button type="submit" className="btn-form btn-outline-primary" disabled={!form.email || !form.name || !form.phone || !form.message}>
                {t("btnText")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
