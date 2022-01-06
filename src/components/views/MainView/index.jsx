import React from "react";
import styled from "styled-components";
// components
import Header from "../../molecules/header";
import Info from "../../molecules/info";

function MainView({ inputHour, inputMin }) {
  return (
    <OutLineBox>
      <Header />
      <BodyBox>
        <Info />
      </BodyBox>
    </OutLineBox>
  );
}

export default MainView;

const OutLineBox = styled.div`
  min-width: 107.4rem;
`;
//min-width = 102.4 + 2.5(margin-left) + 2.5(margin-right) rem;

const BodyBox = styled.div`
  margin: 1rem 0rem 0rem 2.5rem;
  background-color: black;
  display: flex;
  flex-direction: column;
  width: 102.4rem;
  height: 3rem;
`;
