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
  [1, "MAT2016-15-00", "공학수학(3)", 3, "이지민", "화7,목6,7", "공D510", 50, 0, 0, 3, 14],
  [2, "SYS1101-01-00", "시스템반도체공학개론", 3, "장지원", "목1,2,3", "I진A301", 50, 0, 0, 3, 14],
  [3, "SYS2101-01-00", "회로이론", 3, "한건희", "화1,2/목1", "공D510/동영상(중복수강불가)", 50, 0, 0, 3, 14],
  [4, "SYS2103-01-00", "기초디지털논리회로", 3, "한건희", "화3/목2,3", "동영상(중복수강불가)/공D510", 50, 0, 0, 3, 14],
  [5, "SYS2104-01-00", "재료과학의기초", 3, "김건환", "월2,수2,3", "공D509", 50, 0, 0, 3, 14],
  [6, "SYS2105-01-00", "데이터구조및알고리즘", 3, "양준성", "화5,6/목5", "동영상(중복수강불가)/공D510", 50, 0, 0, 3, 14],
  [7, "SYS2106-01-00", "시스템반도체개론", 3, "박관서", "월7,8/월9", "공D510/동영상(중복수강불가)", 50, 0, 0, 3, 14],
  [8, "SYS3101-01-00", "확률및랜덤변수", 3, "송홍엽", "수7/목4,5", "공D510/동영상(중복수강불가)", 50, 0, 0, 3, 14],
  [9, "SYS3102-01-01", "전자회로설계및실험", 3, "박관서", "목6(목7,8,9,10)", "공A128(공A128)", 50, 0, 0, 3, 14],
  [10, "SYS3103-01-00", "전자회로2", 3, "박관서", "월2,수2,3", "공D510", 50, 0, 0, 3, 14],
  [11, "SYS3104-01-00", "컴퓨터구조론", 3, "양준성", "월3,목2,3", "공A432", 50, 0, 0, 3, 14],
  [12, "SYS3105-01-00", "양자역학", 3, "장지원", "월5,6,수6", "공D510", 50, 0, 0, 3, 14],
  [13, "SYS3106-01-00", "메모리소자", 3, "김건환", "화5,6,목5", "공A432", 50, 0, 0, 3, 14],
  [14, "SYS3108-01-01", "디지털설계및실험", 3, "장지원", "금6(금7,8,9,10)", "공C033(공C033)", 50, 0, 0, 3, 14],
  [15, "SYS3108-01-02", "디지털설계및실험", 3, "양준성", "월3,목2,3", "공C033(공C033)", 50, 0, 0, 3, 14],
  [16, "SYS3202-01-00", "시스템반도체설계론", 3, "양준성", "월3,목2,3", "공A690", 50, 0, 0, 3, 14],
  [17, "CHE1001-04-00", "일반화학및실험(1)", 3, "방두희", "월5,6/(수5,6)", "I자A429/(I자B507)", 45, 0, 0, 1, 8],
  [18, "CHE1011-01-00", "공학화학및실험(1)", 3, "김병수", "화5,6/(목5,6)", "공A690/(과422)", 45, 0, 0, 1, 8],
  [19, "CHE1011-02-00", "공학화학및실험(1)", 3, "강미정", "(월5,6)/수5,6", "(I자B507)/I자A429", 45, 0, 0, 1, 8],
  [20, "MAT1001-04-00", "미분적분학과벡터해석(1)", 4, "김동호", "월5,6/(수5)수6", "동영상컨텐츠/(I자A521)I자A521", 45, 0, 0, 1, 7],
  [21, "MAT1011-02-00", "공학수학(1)", 3, "김수정", "월1,2/수1(수2)", "동영상컨텐츠/I진A218(I진A218)", 45, 0, 0, 1, 7],
  [22, "MAT1011-01-00", "공학수학(2)", 3, "기하서", "(월7)월8/수7,8", "(공A528)공A528", 45, 0, 0, 1, 7],
  [23, "PHY1001-08-00", "일반물리학실험(1)", 3, "이재용", "(화5,6)/목5,6", "(I자B324)I자A320", 45, 0, 0, 1, 8],
  [24, "PHY1011-02-00", "공학물리학실험(1)", 3, "김충선", "화7,8/(목7,8)", "(과118)/공A432", 45, 0, 0, 1, 8],
  [25, "PHY1011-00-00", "공학물리학실험(1)", 3, "주홍렬", "화5,6/(목5,6)", "I진A320(I자B324)", 45, 0, 0, 1, 8],
  [26, "YCA1001-01-00", "채플(1)", 0.5, "이장철", "화7", "I종301", 100, 0, 0, 0, 1],
  [27, "YCA1101-01-00", "기독교와세계문화", 3, "김학철", "월1,2/수2", "동영상컨텐츠/I자A102", 30, 0, 0, 0, 2],
  [28, "YCA1102-01-00", "기독교와현대사회", 3, "민경식", "월3,4/수4", "I자A102/동영상컨텐츠", 30, 0, 0, 0, 2],
  [29, "YCA1103-01-00", "성서와기독교", 3, "정용한", "화2,3,목1", "I자A201", 30, 0, 0, 0, 2],
  [30, "YCB1101-01-00", "글쓰기", 3, "김성수", "월1,2,수2", "I자A307", 30, 0, 0, 0, 3],
  [31, "YCB1101-59-00", "글쓰기(기초한국어)", 3, "주형예", "화1,목1,2", "I자A316", 30, 0, 0, 0, 3],
  [32, "YCB1201-01-00", "글쓰기(심화)", 3, "진영복", "월7,수7,8", "I자A317", 30, 0, 0, 0, 3],
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
    "디스플레이융합공학과"
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
            추후 지원 예정..
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
