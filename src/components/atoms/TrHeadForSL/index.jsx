import React from "react";
import styled from "styled-components";

function TrHeadForSL() {
  return (
    <TrHead>
      <TdHead style={{ width: "4.5rem" }}>삭제</TdHead>
      <TdHead style={{ width: "17.5rem" }}>학정번호-분반-실습</TdHead>
      <TdHead style={{ width: "7rem" }}>신청</TdHead>
      <TdHead style={{ width: "19.8rem" }}>과목명</TdHead>
      <TdHead style={{ width: "3.5rem" }}>학점</TdHead>
      <TdHead style={{ width: "8.1rem" }}>담당교수</TdHead>
      <TdHead style={{ width: "8.1rem" }}>강의시간</TdHead>
      <TdHead style={{ width: "8.1rem" }}>강의실</TdHead>
      <TdHead style={{ width: "4.6rem" }}>잔여석</TdHead>
      <TdHead style={{ width: "7rem", flexDirection: "column" }}>
        <div>총</div>
        <div>대기자</div>
      </TdHead>
      <TdHead style={{ width: "8.1rem" }}>
        유의
        <br />
        사항
      </TdHead>
      <TdHead style={{ width: "5.8rem" }}>
        전공자
        <br />
        잔여석
      </TdHead>
      <TdHead style={{ width: "14rem", flexDirection: "column" }}>
        <div
          style={{
            width: "100%",
            height: "50%",
            borderBottom: "0.1rem solid #e3e3e3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          학년별 잔여석
        </div>
        <div
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </TdHead>
      <TdHead style={{ width: "5.8rem" }}>
        교환
        <br />
        학생
        <br />
        가능
      </TdHead>
    </TrHead>
  );
}

export default TrHeadForSL;

const TrHead = styled.tr`
  background-color: #f4f4f4;
  font-size: 1.3rem;
  font-weight: 700;
  display: flex;
  border-right: 0.15rem solid #e3e3e3;
  border-top: 0.2rem solid #d4d4d4;
`;
const TdHead = styled.th`
  border-left: 0.15rem solid #e3e3e3;
  border-bottom: 0.15rem solid #e3e3e3;
  height: 6rem;
  white-space: pre-line;

  display: flex;
  align-items: center;
  justify-content: center;
`;
