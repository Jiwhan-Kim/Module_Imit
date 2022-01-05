import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import moment from "moment";
import "moment/locale/ko";

function LoginView() {
  const currentMonth = moment().format("mm");
  const currentDay = moment().format("dd");
  const currentHour = moment().format("hh");
  const currentMin = moment().format("mm");
  const [hour, setHour] = useState();
  const [min, setMin] = useState();
  let aimTime = 0;
  const onHourChange = (e) => {
    setHour(e.target.value);
  };
  const onMinChange = (e) => {
    setMin(e.target.value);
  };
  const onClickButton = (e) => {
    aimTime = hour * 60 + min;
    if (aimTime > currentHour * 60 + currentMin) {
    } else {
    }
  };
  return (
    <OutLineBox>
      <LoginBox>
        <ExplainStr>연세대학교 새내기 모의수강신청</ExplainStr>
        <TimeBox>
          <table>
            <tr>
              <td style={{ paddingRight: "1rem", fontSize: "1.4rem" }}>시</td>
              <td>
                <InputNum
                  placeholder="'시'를 입력하시오."
                  value={hour}
                  onChange={onHourChange}
                />
              </td>
            </tr>
            <tr>
              <td style={{ paddingRight: "1rem", fontSize: "1.4rem" }}>분</td>
              <td>
                <InputNum
                  placeholder="'분'을 입력하시오."
                  value={min}
                  onChange={onMinChange}
                />
              </td>
            </tr>
          </table>
          <ProceedBtn onClick={onClickButton}>시작</ProceedBtn>
        </TimeBox>
      </LoginBox>
      <p>
        {hour} {min}
      </p>
      <Moment format="HH"></Moment>
    </OutLineBox>
  );
}

export default LoginView;

const OutLineBox = styled.div`
  display: flex;
  justify-content: center;
`;
const LoginBox = styled.div`
  margin-top: 8rem;
  width: 47.6rem;
  height: 29rem;
  background: url("/images/login.png");

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TimeBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const ExplainStr = styled.p`
  margin: 10rem 0rem 4rem 0rem;
  font-size: 2.5rem;
  font-weight: 1000;
  color: #1a365e;
`;
const InputNum = styled.input`
  width: 15.1rem;
  height: 2.7rem;
  border-radius: 0rem;
  border: 0.1rem solid #dddddd;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProceedBtn = styled.div`
  height: 5.9rem;
  width: 6.1rem;
  background-color: #abc8e8;
  margin-left: 1rem;
  font-size: 2rem;
  font-weight: 1000;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
