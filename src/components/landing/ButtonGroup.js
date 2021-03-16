//* Dependencies
import React, { Fragment } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

//* Exported component
const ButtonGroup = () => {
  return (
    <Fragment>
      <AnchorLink href="#contact" className="btn btn-landing">
        Contact
      </AnchorLink>
      <a href="#" className="btn btn-landing">
        Portfolio
      </a>
      <AnchorLink href="#about" className="btn btn-landing">
        About
      </AnchorLink>
    </Fragment>
  );
};

export default ButtonGroup;
