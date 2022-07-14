import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Counter from "./Counter";
import landing from "../images/landing.jpg";

const App = () => {
  return (
    <>
      <Background>
        <ComponentWrapper>
          <Header />
          <Counter />
        </ComponentWrapper>
      </Background>
    </>
  );
};

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${landing});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: relative;
  height: 100vh;
  margin: auto;
  @media screen and (max-width: 375px), screen and (max-height: 667px) {
    margin-left: auto;
    margin-right: auto;
    background-size: 275%;
  }
`;

export default App;
