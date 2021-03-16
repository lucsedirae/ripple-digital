//* Dependencies
import React, { Fragment, useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

//* Custom components
import ButtonGroup from "./ButtonGroup";
import Heading from "./Heading";
import Brand from "./Brand";

//* Exported component
const Landing = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <Fragment>
      {isVisible !== true ? <Brand /> : ""}
      {console.log(isVisible)}
      <header className="header">
        <div className="main-box" ref={ref}>
          <Heading />
          <ButtonGroup />
        </div>
      </header>
    </Fragment>
  );
};

export default Landing;
