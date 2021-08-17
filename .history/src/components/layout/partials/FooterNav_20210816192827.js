import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="mailto: etagaca@csub.edu">Contact</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/eidmone-tagaca-6ab45717b/">
            About me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
