import React, { useState } from "react";
import styled from "styled-components";
// components
import Header from "../../molecules/header";
import Info from "../../molecules/info";
import OpenedLect from "../../molecules/OpenedLect";
import SelectedLect from "../../molecules/SelectedLect";

let blueColor = "#0067b1";
let greyColor = "#f4f4f4";
const data = [
  [
    1,
    "CHE1011.99-00",
    "공학화학및실험(1)",
    3,
    "스네이프",
    4,
    "제1공학관",
    45,
    0,
    0,
  ],
  [2, "MAT1011.99-00", "공학수학(1)", 3, "맥고나걸", 4, "제2공학관", 45, 0, 0],
  [
    3,
    "PHY1011.99-00",
    "공학물리학실험(1)",
    3,
    "플리트윅",
    4,
    "제3공학관",
    45,
    0,
    0,
  ],
  [
    4,
    "SSE1011.01-00",
    "시스템반도체공학개론",
    3,
    "양준성",
    3,
    "1긱A413",
    50,
    0,
    0,
  ],
];
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
  const [lecture, setLecture] = useState(data);
  const selectLect = (pointer, nums) => {
    const tempArray = [...lecture];
    tempArray[pointer][8] = nums;
    setLecture(tempArray);
  };
  const enrollLect = (pointer, nums) => {
    const tempArray = [...lecture];
    tempArray[pointer][9] = nums;
    setLecture(tempArray);
  };
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
        {window === 0 && (
          <OpenedLect lecture={lecture} selectLect={selectLect} />
        )}
        {window === 1 && (
          <SelectedLect lecture={lecture} selectLect={selectLect} />
        )}
      </BodyBox>
      {inputHour} : {inputMin}
    </OutLineBox>
  );
}

export default MainView;

const OutLineBox = styled.div`
  min-width: 133rem;
`;
//min-width = 128.0 + 2.5(margin-left) + 2.5(margin-right) rem;

const BodyBox = styled.div`
  margin: 1.5rem 0rem 0rem 2.5rem;
  display: flex;
  flex-direction: column;
  width: 128rem;
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
