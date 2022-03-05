import React, { useState } from "react";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";

import { useTranslation } from "react-i18next";

import "./HeaderMainMobile.scss";
import { LanguageSelection } from "../LanguageSelection/LanguageSelection";

const Component = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(true);
  return (
    <section className="mobile_icons">
      <div>
        <div
          className={active ? "menu_button disactive" : "menu_button active"}
          onClick={active ? () => setActive(!active) : ""}
        >
          <div
            className={active ? "times active" : "times "}
            onClick={() => setActive(!active)}
          ></div>
          <div className="line line_one"></div>
          <div className="line line_two"></div>
          <div className="line line_three"></div>
          <div
            className={
              active ? "menu-content disactive" : "menu-content active"
            }
          >
            <h3 className="mobile_menu_title">
              <img src={""} alt="logo" />
            </h3>
            <ul className="menu_links">
              <li>
                <HashLink to="/" onClick={() => setActive(!active)}>
                  {t("header_link_5")}
                </HashLink>
              </li>
              <li>
                <HashLink to="/#About" onClick={() => setActive(!active)}>
                  {t("header_link_1")}
                </HashLink>
              </li>
              <li>
                <HashLink to="/#Services" onClick={() => setActive(!active)}>
                  {t("header_link_2")}
                </HashLink>
              </li>
              <li>
                <HashLink to="/#Blog" onClick={() => setActive(!active)}>
                  {t("header_link_3")}
                </HashLink>
              </li>
              <li>
                <HashLink to="/#Contact" onClick={() => setActive(!active)}>
                  {t("header_link_4")}
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LanguageSelection />
    </section>
  );
};

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as HeaderMainMobile,
  Component as HeaderMainMobileComponent,
};
