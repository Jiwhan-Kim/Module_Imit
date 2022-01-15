import React from "react";
import styled from "styled-components";

function ModalLogin(props) {
  const { open, close } = props;
  return (
    <div>
      {open ? (
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
          <Body>s</Body>
        </Alert>
      ) : null}
    </div>
  );
}

export default ModalLogin;

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

  display: flex;
  justify-content: center;
`;
