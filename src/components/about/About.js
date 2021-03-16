//* Dependencies
import React, { Fragment } from "react";
import styled from "styled-components";

//* Styled components
const TextWrapper = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: rgba(240, 240, 240, 0.6);
  margin: 1rem;
`;

//* Exported component
const About = () => {
  return (
    <Fragment>
      <header className="header-inverted" style={{ paddingTop: "7rem" }}>
        <div className="box" id="about">
          <h1 className="heading-secondary heading-secondary-main">About</h1>
        </div>
        <TextWrapper>
          <p>
            Ripple Digital Development was founded in 2021 by Jon Deavers in
            Richmond, Virginia. We build custom web solutions for people and
            companies who need a website or web application. With a 20 year
            background in sales and customer service, Ripple is dedicated to
            providing clear communication and professional products.
          </p>
        </TextWrapper>
      </header>
    </Fragment>
  );
};

export default About;
