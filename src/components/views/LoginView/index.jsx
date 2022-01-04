import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function LoginView() {
  return (
    <OutLineBox>
      <LoginBox>
        <ExplainBox>연세대학교 새내기 모의수강신청</ExplainBox>
        <table>
          <tr>
            <td>시</td>
            <InputNum placeholder="'시'를 입력하시오." />
            <td rowSpan="2">
              <Link to="/main">
                <ProceedBtn />
              </Link>
            </td>
          </tr>
          <tr>
            <td>분</td>
            <InputNum placeholder="'분'을 입력하시오." />
          </tr>
        </table>
      </LoginBox>
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
`;
const ExplainBox = styled.div`
  margin: 10rem 0rem 0rem 0rem;
  font-size: 2.5rem;
  font-weight: 1000;
  color: #1a365e;
`;
const InputNum = styled.input`
  width: 15.1rem;
  height: 2.7rem;
  border-radius: 0rem;
  border: 0.1rem solid #aaaaaa;
  font-size: 1rem;
`;
const ProceedBtn = styled.button`
  height: 5rem;
`;
