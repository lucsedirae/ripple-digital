//* Dependencies
import React from "react";
import styled from "styled-components";
import "./App.css";

//* Custom components
import About from "./components/about/About"
import Contact from "./components/contact/Contact";
import Landing from "./components/landing/Landing";
import Portfolio from "./components/portfolio/Portfolio"

//* Styled components
const Spacer = styled.div`
  display: block;
  height: 7rem;
`;

//* Exported component
function App() {
  return (
    <div className="App">
      <Landing />
      <Spacer />
      <Contact />
      <Spacer />
      <Portfolio/>
      <Spacer />
      <About />
    </div>
  );
}

export default App;
