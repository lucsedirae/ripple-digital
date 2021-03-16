//* Dependencies
import React, { Fragment } from "react";

//* Custom components
import ContactForm from "./ContactForm";

//* Exported component
const Contact = () => {
  return (
    <Fragment>
      <header className="header-inverted" style={{ paddingTop: "7rem" }}>
        <div className="box" id="contact">
          <h1 className="heading-secondary heading-secondary-main">Contact</h1>
        </div>
        <ContactForm />
      </header>
    </Fragment>
  );
};

export default Contact;
