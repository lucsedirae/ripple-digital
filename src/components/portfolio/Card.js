//* Dependencies
import React, { Fragment } from "react";
import styled from "styled-components";
import data from "../../data/portfolioData";

//* Styled components
const TextWrapper = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: rgba(240, 240, 240, 0.6);
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const ImgWrapper = styled.div`
  width: 100%;
  max-width: 34rem;
  display: block;
  margin: 0 auto;
`;

//* Exported component
const Card = ({ page }) => {
  const item = data[page - 1];
  return (
    <Fragment>
      <TextWrapper>
        <h1>{item.name}</h1>
        <ImgWrapper>
          <img
            src={item.screenshot}
            className="thumbnail"
            alt={"Screenshot of" + item.name}
          />
        </ImgWrapper>
        <p>{item.description}</p>
        <p>
          <a href={item.deployedURL} target="_blank" rel="noreferrer">
            Deployed Project
          </a>
        </p>
        <p>
          <a href={item.githubURL} target="_blank" rel="noreferrer">
            GitHub Link
          </a>
        </p>
      </TextWrapper>
    </Fragment>
  );
};

export default Card;
