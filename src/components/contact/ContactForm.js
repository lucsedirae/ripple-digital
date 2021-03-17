//* Dependencies
import React from "react";
import styled from "styled-components";

//* Styled components
const FormWrapper = styled.div`
  text-align: center;
  padding: 1rem;
`;

const ContactForm = () => {
  return (
    <FormWrapper>
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p className="input">
          <label className="form-label">Your name: </label>
          <input
            className="form-field"
            type="text"
            placeholder="Name"
            name="name"
          />
        </p>
        <p className="input">
          <label className="form-label">Email: </label>
          <input
            className="form-field"
            type="email"
            placeholder="Email address"
            name="email"
          />
        </p>
        <p className="input">
          <label className="form-label">Message: </label>
          <textarea
            className="form-field form-textarea"
            type="text"
            placeholder="Message"
            name="message"
          />
        </p>
        <p className="input">
          <button className="btn-submit" type="submit">
            Submit
          </button>
        </p>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;
