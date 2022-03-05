import React from "react";
import PropTypes from "prop-types";
import CookieConsent from "react-cookie-consent";

import { Link } from "@material-ui/core";
import { Footer } from "../Footer/Footer.js";
import { Header } from "../Header/Header.js";
import { HeaderMainMobile } from "../HeaderMainMobile/HeaderMainMobile";
const Component = ({ className, children }) => (
  <div className="">
    <HeaderMainMobile />
    <Header />
    {children}
    <Footer />
    <CookieConsent
      //degub = true if we develope page, every refresh banner will appear
      debug={true}
      location="bottom"
      expires={365}
    >
      This site uses cookies. See our <Link>privacy policy</Link> for more
      informations.
    </CookieConsent>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as MainLayout, Component as MainLayoutComponent };
