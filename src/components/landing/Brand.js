//* Dependencies
import React, { Fragment } from "react";
import styled from "styled-components";

//* Styled components
const LogoWrapper = styled.div`
  padding: 0 1rem 0 1rem;
  position: fixed;
  z-index: 3;
`;

//* Exported component
const Brand = () => {
  return (
    <Fragment>
      <LogoWrapper>
        <a className="hidden-link" href="/">
          <h1 className="brand">Ripple</h1>
          <h5 className="brand-sub">Digital Development</h5>
        </a>
      </LogoWrapper>
    </Fragment>
  );
};

export default Brand;
