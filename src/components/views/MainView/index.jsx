import React from "react";
import styled from "styled-components";
// components
import Header from "../../molecules/header";

function MainView({ inputHour, inputMin }) {
  return (
    <OutLineBox>
      <Header />
      <h1>
        {inputHour} {inputMin}
      </h1>
    </OutLineBox>
  );
}

export default MainView;

const OutLineBox = styled.div`
  margin-bottom: 71.2rem;
`;
