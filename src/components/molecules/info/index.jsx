import React, { useState } from "react";
import styled from "styled-components";
const list0 = ["block", "none"];
const list1 = ["none", "block"];

function Info() {
  const [open, setOpen] = useState(list0);
  return (
    <InfoBox>
      <div>
        <TitleStr>공지사항</TitleStr>
        <div style={{ height: "0.5rem" }} />
        <NormalStr>
          본 페이지는 연세대학교 제1대 시스템반도체공학과 학생회 Module에서 제작한
          '모의수강신청' 사이트입니다.
        </NormalStr>
        <div style={{ height: "0.5rem" }} />
        <NormalStr>
          제2대 학생회 Conduct, 학회 Asterisk 2023에서 운영 및 관리하고 있습니다.
        </NormalStr>
        <div style={{ height: "0.5rem" }} />
        <NormalStr>
          2023년 행정 시스템 변화로 인해 이 페이지와 실제 수강신청 페이지에 차이가 있을 수 있습니다.
        </NormalStr>
        <div style={{ height: "0.5rem" }} />
        <NormalStr
          style={{ display: open[0], color: "#999999", cursor: "pointer" }}
          onClick={() => {
            setOpen(list1);
          }}
        >
          더보기..
        </NormalStr>
        <div
          style={{ display: open[1], color: "#555555", cursor: "pointer" }}
          onClick={() => {
            setOpen(list0);
          }}
        >
          <NormalStr>제작: 김다운, 김지환 (시스템반도체공학과 21)</NormalStr>
          <div style={{ height: "0.5rem" }} />
          <NormalStr>ReactJS제작</NormalStr>
          <div style={{ height: "2.5rem" }} />
          <NormalStr style={{ fontWeight: "700", fontSize: "1.7rem" }}>Update..</NormalStr>
          <div style={{ height: "0.5rem" }} />
          <NormalStr>22.02.15. Module Develop - 모의수강신청 시스템 제작</NormalStr>
          <div style={{ height: "0.5rem" }} />
          <NormalStr>22.08.18. Module Update - 모의수강신청 시스템 내용 수정</NormalStr>
          <div style={{ height: "0.5rem" }} />
          <NormalStr>23.02.09. Asterisk Update - 모의수강신청 시스템 내용 수정</NormalStr>

        </div>
      </div>
      <div>
        <NormalStr>
          대기순번제 기간: 2023.02.23. 09:00 ~ 2023.02.23. 17:00
        </NormalStr>
      </div>
    </InfoBox>
  );
}

export default Info;

const InfoBox = styled.div`
  width: 122rem;
  padding: 1rem 3rem 1rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f4f4f4;
  border: 1px solid #cccccc;
`;
const TitleStr = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;
const NormalStr = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
`;
