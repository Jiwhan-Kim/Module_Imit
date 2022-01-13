import React from "react";
import styled from "styled-components";

function EnrollBtn({ onClick }) {
  return <Btn onClick={onClick}>신청</Btn>;
}

export default EnrollBtn;

const Btn = styled.div`
  width: 4rem;
  height: 2.6rem;
  background-color: #0066b3;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
