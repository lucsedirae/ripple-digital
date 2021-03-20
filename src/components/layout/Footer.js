//* Dependencies
import React from "react";
import styled from "styled-components";

//* Styled components
const Wrapper = styled.div`
display:inline;
/* width: 100vw; */

text-align:center;

`;

const Footer = () => {
  return (
    <Wrapper>
      <h6>© 2021 - Ripple Digital Development/Jon Deavers</h6>
    </Wrapper>
  );
};

export default Footer;
