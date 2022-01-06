import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderBox>
      <div
        style={{ paddingTop: "2rem", paddingLeft: "2.5rem", display: "flex" }}
      >
        <TitleString style={{ fontSize: "3rem" }}>모의수강신청</TitleString>
        <TitleString style={{ fontSize: "1.5rem" }}>
          2022학년도 1학기 모의수강신청
        </TitleString>
      </div>
      <table style={{ margin: "0.2rem" }}>
        <tr>
          <Td0>소속</Td0>
          <Td1>학부대학 공학계열</Td1>
        </tr>
        <tr>
          <Td0>학번</Td0>
          <Td1>2021189908</Td1>
        </tr>
        <tr>
          <Td0>성명</Td0>
          <Td1>시반공</Td1>
        </tr>
        <tr>
          <Td0>학년</Td0>
          <Td1>1</Td1>
        </tr>
      </table>
    </HeaderBox>
  );
}

export default Header;

const HeaderBox = styled.div`
  width: 100vw;
  background-color: #003875;
  border-bottom: 0.3rem solid #ffff00;
  display: flex;
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
