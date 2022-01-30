import React, { useState } from "react";
import styled from "styled-components";
import ModalLogin from "../../atoms/ModalLogin";

function LoginView({ output0, output1, setTime, time, valid }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <OutLineBox>
      <ModalLogin
        open={modalOpen}
        close={closeModal}
        time={time}
        valid={valid}
      />
      <LoginBox>
        <ExplainStr>연세대학교 새내기 모의수강신청</ExplainStr>
        <TimeBox>
          <table>
            <tbody>
              <tr>
                <td style={{ paddingRight: "1rem", fontSize: "1.4rem" }}>시</td>
                <td>{output0}</td>
              </tr>
              <tr>
                <td style={{ paddingRight: "1rem", fontSize: "1.4rem" }}>분</td>
                <td>{output1}</td>
              </tr>
            </tbody>
          </table>
          <ProceedBtn
            onClick={() => {
              openModal();
              setTime();
            }}
          >
            시작
          </ProceedBtn>
        </TimeBox>
        <TimeBox style={{ marginTop: "1.3rem" }}>
          <SupportBtn onClick={() => window.open("/clock", "_blank")}>
            시계
          </SupportBtn>
        </TimeBox>
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
  background: url("images/login.png");

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
const SupportBtn = styled.div`
  font-size: 1.2rem;
  border: 1px solid #0067b2;
  color: #0067b2;
  min-width: 8.4rem;
  height: 2.4rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
