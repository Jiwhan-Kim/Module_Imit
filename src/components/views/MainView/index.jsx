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
    "월1,2(수1,2)",
    "제1공학관",
    45,
    0,
    0,
  ],
  [
    2,
    "MAT1011.99-03",
    "공학수학(1)",
    3,
    "맥고나걸",
    "월11,12/수3(수4)",
    "제2공학관",
    45,
    0,
    0,
  ],
  [3, "MOD8576.69-00", "Module", 3, "convert", "OT날짜", "ASCII", 50, 0, 0],
  [
    4,
    "MAT2016.15-01",
    "공학수학(3)",
    3,
    "이광우",
    "월5/수5,6(월6)",
    "실시간온라인/동영상콘텐츠",
    30,
    0,
    0,
  ],
  [
    5,
    "MAT2016.15-02",
    "공학수학(3)",
    3,
    "이광우",
    "월5/수5,6(월6)",
    "실시간온라인/동영상콘텐츠",
    30,
    0,
    0,
  ],
  [
    6,
    "PHY1011.99-00",
    "공학물리학실험(1)",
    3,
    "플리트윅",
    "월5,6(수13,14)",
    "제3공학관",
    45,
    0,
    0,
  ],
  [
    7,
    "SSE1011.01-00",
    "시스템반도체공학개론",
    3,
    "장지원",
    "화6,7,목3",
    "1긱A413",
    50,
    0,
    0,
  ],
  [
    8,
    "SSE2101.01-00",
    "회로이론",
    3,
    "교수님",
    "월2,3/수7",
    "공D510/실시간온라인",
    50,
    0,
    0,
  ],
  [
    9,
    "SSE2103.01-00",
    "기초디지털논리회로",
    3,
    "양준성",
    "화1,2/목2",
    "동영상콘텐츠",
    50,
    0,
    0,
  ],
  [
    10,
    "SSE2104.01-00",
    "재료과학의기초",
    3,
    "장지원",
    "월8/수2,3",
    "실시간온라인/공D510",
    50,
    0,
    0,
  ],
  [
    11,
    "SSE2105.01-00",
    "데이터구조및알고리즘",
    3,
    "양준성",
    "화3,4/목3",
    "동영상콘텐츠/공D510",
    50,
    0,
    0,
  ],
  [
    12,
    "SSE2106.01-00",
    "시스템반도체개론",
    3,
    "양준성",
    "화7/화8,9",
    "공D510/동영상콘텐츠",
    50,
    0,
    0,
  ],

  [
    13,
    "SSE2118.90-04",
    "모의수강신청",
    1,
    "김지환",
    "매일매일.",
    "Zoom 강의실",
    50,
    0,
    0,
  ],
  [
    14,
    "UCR1007.44-00",
    "YONSEI RC 101 - 시스템반도체공학과",
    1,
    "한봉환",
    "수7",
    "어딘가",
    50,
    0,
    0,
  ],
  [
    15,
    "YCA1005.01-00",
    "채플(A)",
    0.5,
    "스프라우트",
    0.5,
    "어딘가",
    4000,
    0,
    0,
  ],
  [
    16,
    "YCA1102-99-00",
    "기독교와현대사회",
    3,
    "교수님",
    "목7/토4,5",
    "어딘가",
    25,
    0,
    0,
  ],
  [
    17,
    "YCB1101.99-00",
    "글쓰기",
    3,
    "해그리드",
    "화3,4/목4",
    "어딘가",
    25,
    0,
    0,
  ],
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
  function cateChan0(temp) {
    var a = ["전체", "채플", "기독교의이해", "글쓰기", "(~2019학번)대학영어"];
    var b = [
      "전체",
      "문학과예술",
      "인간과역사",
      "언어와표현",
      "가치와윤리",
      "국가와사회",
      "지역과세계",
      "논리와수리",
      "자연과우주",
      "생명과환경",
      "정보와기술",
      "체육과건강",
    ];
    var c = ["전체", "자율선택"];
    var d = ["전체", "공과대학공통", "시스템반도체공학과"];
    var e = [
      "전체",
      "교양기초-채플",
      "교양기초-기독교의이해",
      "교양기초-글쓰기",
      "대학교양-문학과예술",
      "대학교양-인간과역사",
      "대학교양-언어와표현",
      "대학교양-가치와윤리",
      "대학교양-국가와사회",
      "대학교양-지역과세계",
      "대학교양-논리와수리",
      "대학교양-자연과우주",
      "대학교양-생명과환경",
      "대학교양-정보와기술",
      "대학교양-체육과건강",
      "RC교육-YONSEI RC 101",
    ];
    var target = document.getElementById("selected");
    var selection;
    if (temp === "a") {
      selection = a;
    } else if (temp === "b") {
      selection = b;
    } else if (temp === "c") {
      selection = c;
    } else if (temp === "d") {
      selection = d;
    } else if (temp === "e") {
      selection = e;
    }
    target.options.length = 0;
    for (var x in selection) {
      var opt = document.createElement("option");
      opt.value = selection[x];
      opt.innerHTML = selection[x];
      target.appendChild(opt);
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
        <OptionBox>
          <OptionSmallBox>
            <Title>개설과목 검색</Title>
            <SelectItem>
              <option>학부</option>
              <option>대학원</option>
            </SelectItem>
            <SelectItem>
              <option value="a">교양기초(2019학번~)</option>
              <option value="b">대학교양(2019학번~)</option>
              <option value="c">자율선택(2019학번~)</option>
              <option value="d">공과대학</option>
              <option value="e">국제캠퍼스(2019학번~)</option>
            </SelectItem>
            <SelectItem id="selected">
              <option></option>
            </SelectItem>
          </OptionSmallBox>
          <OptionSmallBox style={{ borderTop: "0.15rem solid #e3e3e3" }}>
            <Title>키워드 검색</Title>
          </OptionSmallBox>
        </OptionBox>
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
`;

const SelectBox = styled.div`
  margin-top: 1.5rem;
  border-bottom: 0.2rem solid #0067b1;
  display: flex;
  width: 128rem;
`;
const OptionBox = styled.div`
  border: 0.15rem solid #0067b1;
  width: 128rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
`;
const OptionSmallBox = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  font-size: 1.3rem;
`;
const Title = styled.p`
  font-size: 1.35rem;
  font-weight: 700;
  width: 10rem;
  display: flex;
  justify-content: flex-end;
  margin-right: 1.5rem;
`;
const SelectItem = styled.select`
  margin-right: 1.5rem;
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
