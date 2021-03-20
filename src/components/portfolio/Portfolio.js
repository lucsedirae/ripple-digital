//* Dependencies
import React, { Fragment, useState } from "react";
import styled from "styled-components";
import data from "../../data/portfolioData";
//* Custom components
import Card from "./Card";

//* Styled components
const TextWrapper = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: rgba(240, 240, 240, 0.6);
  display: block;
  width: 40rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
`;

const PaginatorWrap = styled.div`
  padding: 1rem;
  position: relative;
  max-width: 10rem;
  margin: 0 auto;
`;

const CardBox = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  display: block;
  width: 40rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
`;

//* Exported component
const Portfolio = () => {
  const [page, setPage] = useState(data.length);

  console.log("Data Length: ", data.length);

  const leftClick = () => (page > 1 ? setPage(page - 1) : setPage(data.length));

  const rightClick = () =>
    page < data.length ? setPage(page + 1) : setPage(1);

  return (
    <Fragment>
      <header className="header-portfolio">
        <div className="box" id="portfolio">
          <h1 className="heading-secondary heading-secondary-main">
            Portfolio
          </h1>
        </div>
        <TextWrapper>
          <p>A collection of completed projects</p>
        </TextWrapper>
        <CardBox>
        <PaginatorWrap>
          <button className="arrow-icon" onClick={leftClick}>
            <img src="/img/left-arrow.svg" alt="right arrow" />
          </button>
          <button className="arrow-icon" onClick={rightClick}>
            <img src="/img/right-arrow.svg" alt="right arrow" />
          </button>
        </PaginatorWrap>
          <Card page={page} />
        </CardBox>
      </header>
    </Fragment>
  );
};

export default Portfolio;
