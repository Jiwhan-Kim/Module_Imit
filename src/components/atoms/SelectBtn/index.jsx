import React from "react";
import styled from "styled-components";
import { BsDownload } from "react-icons/bs";
function SelectBtn({ onClick }) {
  return (
    <Btn onClick={onClick}>
      <BsDownload />
    </Btn>
  );
}

export default SelectBtn;

const Btn = styled.div`
  width: 3.6rem;
  height: 2.6rem;
  background: linear-gradient(to bottom, #ffffff, #e4e4e4);
  cursor: pointer;
  border: 0.15rem solid #d3d3d3;

  display: flex;
  align-items: center;
  justify-content: center;
`;
