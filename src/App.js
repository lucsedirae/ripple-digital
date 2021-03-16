//* Dependencies
import React from "react";
import styled from "styled-components";
import "./App.css";

//* Custom components
import About from "./components/about/About"
import Contact from "./components/contact/Contact";
import Landing from "./components/landing/Landing";

//* Styled components
const Spacer = styled.div`
  display: block;
  height: 5rem;
`;

//* Exported component
function App() {
  return (
    <div className="App">
      <Landing />
      <Spacer />
      <Contact />
      <Spacer />
      <About />
    </div>
  );
}

export default App;
