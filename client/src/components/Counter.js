import React from "react";
import styled from "styled-components";

const Counter = () => {
  // setting the drop date - my birthday
  let dropDate = new Date("09/11/2022");

  // countdownTimer function
  const countdownTimer = setInterval(() => {
    const now = new Date();
    const timeLeft = dropDate - now;

    // days calculation / stringifying # for array / updating innerHTML with array values
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const daysArr = Array.from(String(days), Number);
    document.getElementById("days1").innerHTML = daysArr[0];
    if (daysArr[0]) {
      document.getElementById("days1").innerHTML = daysArr[0];
    }
    if (daysArr[1]) {
      document.getElementById("days2").innerHTML = daysArr[1];
    }
    if (!daysArr[1]) {
      document.getElementById("days1").innerHTML = "0";
      document.getElementById("days2").innerHTML = daysArr[0];
    }
    if (daysArr[1] === 0) {
      document.getElementById("days1").innerHTML = daysArr[0];
      document.getElementById("days2").innerHTML = daysArr[1];
    }

    // hours calculation / stringifying # for array / updating innerHTML with array values
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const hoursArr = Array.from(String(hours), Number);

    if (hoursArr[0]) {
      document.getElementById("hours1").innerHTML = hoursArr[0];
    }
    if (hoursArr[1]) {
      document.getElementById("hours2").innerHTML = hoursArr[1];
    }
    if (!hoursArr[1]) {
      document.getElementById("hours1").innerHTML = "0";
      document.getElementById("hours2").innerHTML = hoursArr[0];
    }
    if (hoursArr[1] === 0) {
      document.getElementById("hours1").innerHTML = hoursArr[0];
      document.getElementById("hours2").innerHTML = hoursArr[1];
    }

    // minutes calculation / stringifying # for array / updating innerHTML with array values
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const minsArr = Array.from(String(minutes), Number);
    document.getElementById("minutes1").innerHTML = minsArr[0];
    if (minsArr[0]) {
      document.getElementById("minutes1").innerHTML = minsArr[0];
    }
    if (minsArr[1]) {
      document.getElementById("minutes2").innerHTML = minsArr[1];
    }
    if (!minsArr[1]) {
      document.getElementById("minutes1").innerHTML = "0";
      document.getElementById("minutes2").innerHTML = minsArr[0];
    }
    if (hoursArr[1] === 0) {
      document.getElementById("hours1").innerHTML = hoursArr[0];
      document.getElementById("hours2").innerHTML = hoursArr[1];
    }

    // seconds calculation / stringifying # for array / updating innerHTML with array values
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const secsArr = Array.from(String(seconds), Number);
    if (secsArr[0]) {
      document.getElementById("seconds1").innerHTML = secsArr[0];
    }
    if (secsArr[1]) {
      document.getElementById("seconds2").innerHTML = secsArr[1];
    }
    if (!secsArr[1]) {
      document.getElementById("seconds1").innerHTML = "0";
      document.getElementById("seconds2").innerHTML = secsArr[0];
    }
    if (secsArr[1] === 0) {
      document.getElementById("seconds1").innerHTML = secsArr[0];
      document.getElementById("seconds2").innerHTML = secsArr[1];
    }
  }, 1000);

  return (
    <>
      {}
      <Wrapper>
        <Header>Leezy Boost 103</Header>
        <CountdownWrapper>
          <ElementWrapper>
            <TimeWrapper>
              <Time id="days1"></Time>
              <Time id="days2"></Time>
            </TimeWrapper>
            <TimeLabel>days</TimeLabel>
          </ElementWrapper>

          <ElementWrapper>
            <TimeWrapper>
              <Time id="hours1"></Time>
              <Time id="hours2"></Time>
            </TimeWrapper>
            <TimeLabel>hours</TimeLabel>
          </ElementWrapper>

          <ElementWrapper>
            <TimeWrapper>
              <Time id="minutes1"></Time>
              <Time id="minutes2"></Time>
            </TimeWrapper>
            <TimeLabel>mins</TimeLabel>
          </ElementWrapper>

          <ElementWrapper>
            <TimeWrapper>
              <Time id="seconds1"></Time>
              <Time id="seconds2"></Time>
            </TimeWrapper>
            <TimeLabel>secs</TimeLabel>
          </ElementWrapper>
        </CountdownWrapper>
        <Footer>Until Drop</Footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
  margin-left: 450px;
  @media screen and (max-width: 375px), screen and (max-height: 667px) {
    margin-top: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Header = styled.div`
  font-family: "Roboto";
  font-size: 45px;
  letter-spacing: 7px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
  @media screen and (max-width: 375px), screen and (max-height: 667px) {
    font-size: 30px;
  }
`;

const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const TimeWrapper = styled.div`
  display: flex;
`;

const Time = styled.div`
  color: #ffffff;
  background-color: #000000;
  font-size: 40px;
  font-family: "Rozha One";
  text-align: center;
  text-transform: uppercase;
  margin: 5px;
  width: 25px;
  padding: 3px 15px 3px 15px;
  @media screen and (max-width: 375px), screen and (max-height: 667px) {
    font-size: 20px;
    padding: 7px 7px 7px 7px;
  }
`;

const TimeLabel = styled.div`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: 10px;
  @media screen and (max-width: 375px), screen and (max-height: 667px) {
    font-size: 16px;
    margin-top: 7px;
  }
`;

const Footer = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: 15px;
`;

export default Counter;
