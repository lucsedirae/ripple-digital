//* Dependencies
import React, { Fragment } from "react";
import styled from "styled-components"

//* Custom components
import ContactForm from "./ContactForm";

//* Styled components
const Wrapper = styled.div`
  display:block;
  width:40rem;
  margin-left:auto;
  margin-right:auto;
`

//* Exported component
const Contact = () => {
  return (
    <Fragment>
      <header className="header-contact" >
        <div className="box" id="contact">
          <h1 className="heading-secondary heading-secondary-main">Contact</h1>
        </div>
        <Wrapper>

        <ContactForm />
        </Wrapper>
      </header>
    </Fragment>
  );
};

export default Contact;
