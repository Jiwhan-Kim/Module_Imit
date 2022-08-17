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
    "CHE1012.00-00",
    "공학화학및실험(2)",
    3,
    "이상은",
    "월1,2(수1,2)",
    "I자A430(I자A506)",
    45,
    0,
    0,
    4,
    11,
  ],
  [
    2,
    "MAT1012.00-00",
    "공학수학(2)",
    3,
    "조보경",
    "월11,12/수3(수4)",
    "제2공학관",
    45,
    0,
    0,
    4,
    10,
  ],

  [
    3,
    "PHY1012.00-00",
    "공학물리학실험(2)",
    3,
    "김준한",
    "월3,4(수3,4)",
    "I진A202(I자B324)",
    45,
    0,
    0,
    4,
    11,
  ],
  [
    4,
    "ENG1108-05-00",
    "공학정보처리",
    3,
    "김지환",
    "금1,2(금5,6)",
    "I자A311(I자A303)",
    50,
    0,
    0,
    3,
    1,
  ],
  [
    5,
    "YCA1006.01-00",
    "채플(B)",
    0.5,
    "곽호철,정용한",
    "",
    "",
    6000,
    0,
    0,
    4,
    1,
  ],
  [
    6,
    "YCA1101-00-00",
    "기독교와세계문화",
    3,
    "성다은",
    "화7,목8,9",
    "I자A320",
    25,
    0,
    0,
    4,
    2,
  ],
  [
    7,
    "YCA1102-00-00",
    "기독교와현대사회",
    3,
    "김나윤",
    "월3,4,수4",
    "I자A311",
    30,
    0,
    0,
    4,
    2,
  ],
  [
    8,
    "YCB1101.00-00",
    "글쓰기",
    3,
    "김덕용",
    "월1,2,수2",
    "I자A307",
    25,
    0,
    0,
    4,
    3,
  ],
  [
    9,
    "MAT2017.11-00",
    "공학수학(4)",
    3,
    "안수형",
    "화6,7/목5(목6)",
    "공A685/공A405(공A405)",
    80,
    0,
    0,
    3,
    14,
  ],
  [
    10,
    "SYS2102-01-00",
    "아날로그회로실험",
    3,
    "양준성",
    "금1(금2,3,4,5)",
    "공D510(곰D510)",
    20,
    0,
    0,
    3,
    14,
  ],
  [
    11,
    "SYS2102-01-00",
    "아날로그회로실험",
    3,
    "장지원",
    "금6(금7,8,9,10)",
    "공D510(곰D510)",
    20,
    0,
    0,
    3,
    14,
  ],
  [
    12,
    "SYS3001-01-00",
    "신호와시스템",
    3,
    "손광훈",
    "월3,수2,3",
    "공D510",
    50,
    0,
    0,
    3,
    14,
  ],
  [
    13,
    "SYS3002-01-00",
    "전자회로1",
    3,
    "박관서",
    "화2,3,목2",
    "공D510",
    50,
    0,
    0,
    3,
    14,
  ],
  [
    14,
    "SYS3004-01-00",
    "전자기학",
    3,
    "육종관",
    "월1,2,수4",
    "공A546",
    50,
    0,
    0,
    3,
    14,
  ],
  [
    15,
    "SYS3005-01-00",
    "반도체소자물리",
    3,
    "장지원",
    "월6,7,수6",
    "공D510",
    50,
    0,
    0,
    3,
    14,
  ],
  [
    16,
    "SSE2118.90-04",
    "모의수강신청",
    1,
    "김지환",
    "02/15(목)",
    "Zoom 강의실",
    50,
    0,
    0,
    2,
    1,
  ],
  [
    17,
    "MOD8576.69-00",
    "Module",
    3,
    "convert",
    "02/15(목)",
    "ASCII",
    50,
    0,
    0,
    2,
    1,
  ],
];
const options = [
  "교양기초(2019학번~)",
  "대학교양(2019학번~)",
  "자율선택(2019학번~)",
  "공과대학",
  "국제캠퍼스(2019학번~)",
];
const optionData = [
  ["전체", "채플", "기독교의이해", "글쓰기", "(~2019학번)대학영어"],
  [
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
  ],
  ["전체", "자율선택"],
  [
    "전체",
    "공과대학공통",
    "화공생명공학전공",
    "전기전자공학전공",
    "건축공학전공",
    "건축학(설계)",
    "도시공학전공",
    "건설환경공학전공",
    "기계공학전공",
    "신소재공학전공",
    "산업공학전공",
    "컴퓨터과학전공",
    "글로벌융합공학부",
    "IT융합공학전공",
    "시스템반도체공학과",
  ],
  [
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
  ],
];
for (var i = 0; i < data.length; i++) {
  data[i][11] = optionData[data[i][10]][data[i][11]];
  data[i][10] = options[data[i][10]];
}
const winS0 = [0, blueColor, greyColor, "#ffffff", "#000000", "flex"];
const winS1 = [1, greyColor, blueColor, "#000000", "#ffffff", "none"];
function MainView({ StartTime }) {
  const [windows, setWindows] = useState(
    () => JSON.parse(window.localStorage.getItem("windows")) || winS0
  );
  const [option0, setOption0] = useState("교양기초(2019학번~)");
  const [selector1, setSelector1] = useState(optionData[0]);
  const [option1, setOption1] = useState("전체");
  const [option2, setOption2] = useState("all");
  const [criteria, setCriteria] = useState([option0, option1, option2]);
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
  const handle0Select = (e) => {
    setOption0(e.target.value);
    for (var i = 0; i < options.length; i++) {
      if (e.target.value === options[i]) {
        setSelector1(optionData[i]);
        setOption1("전체");
      }
    }
  };
  const handle1Select = (e) => {
    setOption1(e.target.value);
  };
  const handle2Select = (e) => {
    setOption2(e.target.value);
  };
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
        <OptionBox style={{ display: windows[5] }}>
          <OptionSmallBox>
            <Title>개설과목 검색</Title>
            <SelectItem>
              <option>학부</option>
            </SelectItem>
            <SelectItem onChange={handle0Select} value={option0}>
              {options.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </SelectItem>
            <SelectItem onChange={handle1Select} value={option1}>
              {selector1.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SelectItem>
            <SelectItem onChange={handle2Select} value={option2}>
              <option value="all">전체학점</option>
              <option value={1}>1학점</option>
              <option value={2}>2학점</option>
              <option value={3}>3학점</option>
              <option value={0.5}>그외 학점</option>
            </SelectItem>
            <SearchBtn
              onClick={() => {
                setCriteria([option0, option1, option2]);
              }}
            >
              검색
            </SearchBtn>
          </OptionSmallBox>
          <OptionSmallBox style={{ borderTop: "0.15rem solid #e3e3e3" }}>
            <Title>키워드 검색</Title>
            지원 안함.. (개발하기 귀찮은거 절대 아님)
          </OptionSmallBox>
        </OptionBox>
        {windows[0] === 0 && (
          <OpenedLect
            lecture={lecture}
            selectLect={selectLect}
            enrollLect={enrollLect}
            StartTime={StartTime}
            criteria={criteria}
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
  min-width: 128rem;
`;
//min-width = 122.0 + 3 (margin-left) + 3(margin-right) rem;

const BodyBox = styled.div`
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
`;
const SelectBox = styled.div`
  margin-top: 1.5rem;
  border-bottom: 0.2rem solid #0067b1;
  display: flex;
  width: 122rem;
`;
const OptionBox = styled.div`
  border: 0.15rem solid #0067b1;
  width: 122rem;
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
  width: 13rem;
  display: flex;
  justify-content: flex-end;
  margin-right: 1.5rem;
`;
const SearchBtn = styled.div`
  font-size: 1.35rem;
  background-color: #00b4a6;
  width: 8rem;
  height: 3rem;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const SelectItem = styled.select`
  margin-right: 1.5rem;
  border: 1px solid #aaaaaa;
  border-radius: 0.2rem;
  height: 3rem;
  font-size: 1.35rem;
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
