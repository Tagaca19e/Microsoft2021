import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="#0">Contact</Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/eidmone-tagaca-6ab45717b/">
            About me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
