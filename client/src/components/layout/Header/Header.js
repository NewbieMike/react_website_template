import React from "react";
import PropTypes from "prop-types";

import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

import globe from "../../../media/globe.svg";

import "./Header.scss";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "pl",
    name: "Polski",
    country_code: "pl",
  },
  {
    code: "cn",
    name: "中國",
    country_code: "cn",
  },
];

const Component = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const { t } = useTranslation();

  return (
    <div className="header_container">
      <div className="header_logo">
        <HashLink offset="50" to="/#Home" spy="true" smooth={true}>
          <img src={""} alt="logo" />
        </HashLink>
      </div>
      <div className="header_link_container">
        <div>
          <HashLink to="/#About" spy="true" smooth={true}>
            {t("header_link_1")}
          </HashLink>
          <div className="menu_2nd_level about_us_2nd">
            <HashLink to="/about/#AboutPage">
              {t("header_about_2nd_title_1")}
            </HashLink>
            <HashLink to="/about/#history">
              {t("header_about_2nd_title_2")}
            </HashLink>
            <HashLink to="/about/#values">
              {t("header_about_2nd_title_3")}
            </HashLink>
          </div>
        </div>
        <div>
          <HashLink to="/#Services" spy="true" smooth={true}>
            {t("header_link_2")}
          </HashLink>
          <div className="menu_2nd_level">
            <div className="menu_2nd_level_links_container">
              <HashLink to="/services/outsourcing/#top">
                {t("header_2nd_title_1")}
              </HashLink>
              <HashLink to="/services/outsourcing/accounting/#top">
                {t("header_2nd_text_1_1")}
              </HashLink>
              <HashLink to="/services/outsourcing/hr/#top">
                {t("header_2nd_text_1_2")}
              </HashLink>
              <HashLink to="/services/outsourcing/financial_statements/#top">
                {t("header_2nd_text_1_3")}
              </HashLink>
            </div>
            <div className="menu_2nd_level_links_container">
              <HashLink to="/services/consulting/#top">
                {t("header_2nd_title_2")}
              </HashLink>
              <HashLink to="/services/consulting/legal_advisory/#top">
                {t("header_2nd_text_2_1")}
              </HashLink>
              <HashLink to="/services/consulting/tax_consulting/#top">
                {t("header_2nd_text_2_2")}
              </HashLink>
              <HashLink to="/services/consulting/new_business/#top">
                {t("header_2nd_text_2_3")}
              </HashLink>
            </div>
            <div className="menu_2nd_level_links_container">
              <a href="/services/business">{t("header_2nd_title_3")}</a>
              <HashLink to="/services/business/companies/#top">
                {t("header_2nd_text_3_1")}
              </HashLink>
              <HashLink to="/services/business/chinese_market/#top">
                {t("header_2nd_text_3_2")}
              </HashLink>
            </div>
          </div>
        </div>
        <div>
          <HashLink to="/#Blog" spy="true" smooth={true}>
            {t("header_link_3")}
          </HashLink>
        </div>

        <div>
          <HashLink to="/#Contact" spy="true" smooth={true}>
            {t("header_link_4")}
          </HashLink>
        </div>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-link dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={globe} alt="globe" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {languages.map(({ code, name, country_code }) => (
            <li key={country_code}>
              <button
                className="dropdown-item"
                onClick={() => i18next.changeLanguage(code)}
                disabled={code === currentLanguageCode}
              >
                <span
                  className={`flag-icon flag-icon-${country_code} mx-2`}
                ></span>
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
};

export { Component as Header, Component as HeaderComponent };
