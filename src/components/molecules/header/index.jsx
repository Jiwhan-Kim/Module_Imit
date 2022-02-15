import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header({ Init }) {
  return (
    <Head>
      <HeaderBox>
        <div
          style={{
            paddingTop: "2rem",
            paddingLeft: "2.5rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TitleString style={{ fontSize: "3rem" }}>모의수강신청</TitleString>
          <TitleString style={{ fontSize: "1.8rem" }}>
            2022학년도 1학기 모의수강신청
          </TitleString>
        </div>
        <div
          style={{
            width: "30rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: "5rem",
          }}
        >
          <table style={{ margin: "0.3rem 2.5rem 0.3rem 0.2rem" }}>
            <tr>
              <Td0>소속</Td0>
              <Td1>학부대학 공학계열</Td1>
            </tr>
            <tr>
              <Td0>학번</Td0>
              <Td1>2021189000</Td1>
            </tr>
            <tr>
              <Td0>성명</Td0>
              <Td1>Module</Td1>
            </tr>
            <tr>
              <Td0>학년</Td0>
              <Td1>1</Td1>
            </tr>
          </table>
          <Link to="/" style={{ textDecoration: "none" }} onClick={Init}>
            <LogoutButton>로그아웃</LogoutButton>
          </Link>
        </div>
      </HeaderBox>
    </Head>
  );
}

export default Header;

const Head = styled.div`
  width: 100%;
  background-color: #003875;
  border-bottom: 0.3rem solid #ffc000;
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 134rem;
`;
const TitleString = styled.div`
  color: white;
  font-weight: 700;
  margin-right: 2rem;
`;
const Td0 = styled.td`
  color: #ffffffbb;
  font-size: 1.3rem;
  padding: 0.3rem;
`;
const Td1 = styled.td`
  color: #ffffff;
  font-size: 1.3rem;
  padding: 0.3rem;
`;
const LogoutButton = styled.td`
  width: 8rem;
  height: 3.5rem;
  border: 1px solid #ffffff;
  color: white;
  font-size: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
