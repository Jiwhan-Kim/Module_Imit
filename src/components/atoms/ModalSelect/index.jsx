import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ModalSelect(props) {
  const { open, close, lecName } = props;
  return (
    <div>
      {open ? (
        <Background>
          <Alert>
            <Header>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0.3rem",
                  background:
                    'url("/images/logo_mdi.gif") center center no-repeat',
                  width: "2rem",
                  height: "2.4rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0.5rem",
                  left: "2.5rem",
                  width: "30rem",
                  height: "2.1rem",
                  color: "#383d41",
                  whiteSpze: "nowrap",
                }}
              >
                Alert
              </div>
              <div
                style={{
                  position: "absolute",
                  width: "5.9rem",
                  height: "1.7rem",
                  top: "0.5rem",
                  left: "28.4rem",
                  background:
                    'url("/images/btn_close.gif") center right no-repeat',
                  cursor: "pointer",
                }}
                onClick={close}
              ></div>
            </Header>
            <Body>
              <P0 style={{ marginTop: "2rem" }}>
                선택한 과목이 선택되었습니다.
              </P0>
              <P0>과목명: {lecName}</P0>
              <Link
                to="/main"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginTop: "3.7rem",
                }}
              >
                <ProceedBtn onClick={close}>확인</ProceedBtn>
              </Link>
            </Body>
          </Alert>
        </Background>
      ) : null}
    </div>
  );
}

export default ModalSelect;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
`;
const Alert = styled.div`
  margin-left: -17.5rem;
  margin-top: -7.5rem;
  width: 35rem;
  height: 15rem;
  position: absolute;
  border: 1px solid #b3b3b3;
  top: 35%;
  left: 50%;
  background-color: #dfdfdf;
`;
const Header = styled.div`
  height: 2.4rem;
  background: url("/images/bg_mdiTitle.gif");
  font-size: 1.2rem;
  font-weight: bold;
`;
const Body = styled.div`
  height: 11.95rem;
  width: 34.5rem;
  margin: 0.15rem;
  border-top: 0.15rem solid #b3b3b3;
  border-left: 0.15rem solid #b3b3b3;
  border-right: 0.15rem solid #b3b3b3;
  background-color: #ffffff;
  color: #444;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ProceedBtn = styled.div`
  border: 0.1rem solid #b0b0b0;
  width: 5.4rem;
  height: 2.3rem;
  font-size: 1.2rem;
  background: linear-gradient(to bottom, #fafafa, #f0f0f0);
  border-radius: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const P0 = styled.p`
  font-size: 1.5rem;
`;
