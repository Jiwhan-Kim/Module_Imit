import React, { useState, useEffect } from "react";
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
  [3, "MOD8576.69-00", "Module", 3, "convert", 3, "ASCII", 50, 0, 0],
  [
    4,
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
    5,
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
  [
    6,
    "SSE2118.90-04",
    "모의수강신청",
    1,
    "김지환",
    0.5,
    "Zoom 강의실",
    50,
    0,
    0,
  ],
  [
    7,
    "UCR1007.44-00",
    "YONSEI RC 101 - 시스템반도체공학과",
    1,
    "이주영",
    1,
    "어딘가",
    50,
    0,
    0,
  ],
  [8, "YCA1005.01-00", "채플(A)", 0.5, "스프라우트", 0.5, "어딘가", 4000, 0, 0],
  [9, "YCB1101.99-00", "글쓰기", 3, "해그리드", 3, "어딘가", 25, 0, 0],
];
const winS0 = [0, blueColor, greyColor, "#ffffff", "#000000"];
const winS1 = [1, greyColor, blueColor, "#000000", "#ffffff"];
function MainView({ StartTime }) {
  const [windows, setWindows] = useState(
    () => JSON.parse(window.localStorage.getItem("windows")) || winS0
  );
  function Btn0Clicked() {
    setWindows(winS0);
  }
  function Btn1Clicked() {
    setWindows(winS1);
  }
  let [lecture, setLecture] = useState(
    () => JSON.parse(window.localStorage.getItem("lecture")) || data
  );
  useEffect(() => {
    window.localStorage.setItem("lecture", JSON.stringify(lecture));
    window.localStorage.setItem("windows", JSON.stringify(windows));
  }, [lecture, windows]);
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
  function Init() {
    for (let i = 0; i < lecture.length; i++) {
      selectLect(i, 0);
    }
  }
  return (
    <OutLineBox>
      <Header Init={Init} />
      <BodyBox>
        <Info />
        <SelectBox>
          <SelectButton
            onClick={Btn0Clicked}
            style={{ backgroundColor: windows[1], color: windows[3] }}
          >
            개설과목
          </SelectButton>
          <SelectButton
            onClick={Btn1Clicked}
            style={{ backgroundColor: windows[2], color: windows[4] }}
          >
            희망과목
          </SelectButton>
        </SelectBox>
        {windows[0] === 0 && (
          <OpenedLect
            lecture={lecture}
            selectLect={selectLect}
            enrollLect={enrollLect}
            StartTime={StartTime}
          />
        )}
        {windows[0] === 1 && (
          <SelectedLect
            lecture={lecture}
            selectLect={selectLect}
            enrollLect={enrollLect}
            StartTime={StartTime}
          />
        )}
      </BodyBox>
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
