//* Dependencies
import React, { Fragment, useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import styled from "styled-components";

//* Custom components
import ButtonGroup from "./ButtonGroup";
import Heading from "./Heading";
import Brand from "./Brand";

const TextWrapper = styled.div`
  text-align: center;
`;

//* Exported component
const Landing = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <Fragment>
      {isVisible !== true ? <Brand /> : ""}

      <header className="header">
        <div className="main-box" ref={ref}>
          <TextWrapper>
            <Heading />
            <ButtonGroup />
          </TextWrapper>
        </div>
      </header>
    </Fragment>
  );
};

export default Landing;
