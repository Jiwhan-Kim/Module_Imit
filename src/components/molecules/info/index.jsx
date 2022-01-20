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
          본 사이트는 연세대학교 시스템반도체공학과 Module에서 제작한
          '모의수강신청' 사이트입니다.
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
          <NormalStr>Front: 김지환 (21) / Back: 김다운 (21)</NormalStr>
          <div style={{ height: "0.5rem" }} />
          <NormalStr>ReactJS제작</NormalStr>
        </div>
      </div>
      <div>
        <NormalStr>
          대기순번제 기간: 2022.02.xx. 09:00 ~ 2022.02.xx. 17:00
        </NormalStr>
      </div>
    </InfoBox>
  );
}

export default Info;

const InfoBox = styled.div`
  width: 128rem;
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
