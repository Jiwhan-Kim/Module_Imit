import React, { useState } from "react";
import styled from "styled-components";
// components
import Header from "../../molecules/header";
import Info from "../../molecules/info";
import OpenedLect from "../../molecules/OpenedLect";
import SelectedLect from "../../molecules/SelectedLect";

let blueColor = "#0067b1";
let greyColor = "#f4f4f4";

function MainView({ inputHour, inputMin }) {
  const [window, setWindow] = useState(0);
  const [color0, setColor0] = useState(blueColor);
  const [color1, setColor1] = useState(greyColor);
  const [fontColor0, setFontColor0] = useState("#ffffff");
  const [fontColor1, setFontColor1] = useState("#000000");
  function Btn0Clicked() {
    setWindow(0);
    setColor0(blueColor);
    setColor1(greyColor);
    setFontColor0("#ffffff");
    setFontColor1("#000000");
  }
  function Btn1Clicked() {
    setWindow(1);
    setColor0(greyColor);
    setColor1(blueColor);
    setFontColor0("#000000");
    setFontColor1("#ffffff");
  }

  return (
    <OutLineBox>
      <Header />
      <BodyBox>
        <Info />
        <SelectBox>
          <SelectButton
            onClick={Btn0Clicked}
            style={{ backgroundColor: color0, color: fontColor0 }}
          >
            개설과목
          </SelectButton>
          <SelectButton
            onClick={Btn1Clicked}
            style={{ backgroundColor: color1, color: fontColor1 }}
          >
            희망과목
          </SelectButton>
        </SelectBox>
        {window === 0 && <OpenedLect />}
        {window === 1 && <SelectedLect />}
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
  margin: 1.5rem 0rem 0rem 2.5rem;
  display: flex;
  flex-direction: column;
  width: 102.4rem;
`;

const SelectBox = styled.div`
  margin-top: 1.5rem;
  border-bottom: 0.2rem solid #0067b1;
  display: flex;
`;
const SelectButton = styled.div`
  height: 4.5rem;
  width: 20rem;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
