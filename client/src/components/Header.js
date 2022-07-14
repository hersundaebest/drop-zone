import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Wrapper>
        <TextWrapper>
          <HeaderTop>Drop</HeaderTop>
          <HeaderBottom>Zone</HeaderBottom>
        </TextWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-top: 30px;
  margin-right: 20px;
`;

const HeaderTop = styled.div`
  color: #ffffff;
  background-color: #000000;
  font-size: 35px;
  font-family: "Rozha One";
  text-align: center;
  text-transform: uppercase;
  height: fit-content;
  width: 130px;
  margin-bottom: 10px;
  margin-right: 10px;
  letter-spacing: 6px;
`;

const HeaderBottom = styled.div`
  color: #ffffff;
  background-color: #000000;
  font-size: 35px;
  font-family: "Rozha One";
  text-align: center;
  text-transform: uppercase;
  height: fit-content;
  width: 130px;
  margin-left: 30px;
  letter-spacing: 6px;
`;

export default Header;
