//* Dependencies
import React, { Fragment } from "react";
import styled from "styled-components";

//* Custom components
import LeftArrow from "./LeftArrow"

//* Styled components
const PaginatorWrap = styled.div`
  padding: 1rem;
  position: relative;
  max-width: 10rem;
  margin: 0 auto;
`;

//* Exported component
const Paginator = ({ leftClick, rightClick }) => {
  return (
    <Fragment>
      <PaginatorWrap>
        <button className="arrow-icon" onClick={leftClick}>
            <LeftArrow/>
        </button>
        <button className="arrow-icon" onClick={rightClick}>
          <img src="/img/right-arrow.svg" alt="right arrow" />
        </button>
      </PaginatorWrap>
    </Fragment>
  );
};

export default Paginator;
