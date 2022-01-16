import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// themes
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import styled from "styled-components";
// components
import LoginView from "./components/views/LoginView";
import MainView from "./components/views/MainView";

function App() {
  let [StartTime, StartTimeSet] = useState(); //수강신청 시작시간 저장 변수
  const [textTime, setTextTime] = useState();
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [valid, setValid] = useState(false);
  const onHourChange = (e) => {
    setHour(e.target.value);
  };
  const onMinChange = (e) => {
    setMin(e.target.value);
  };
  function output0() {
    return (
      <InputNum
        placeholder="'시'를 입력하시오."
        value={hour}
        onChange={onHourChange}
        max="23"
        min="0"
        type="number"
      />
    );
  }
  function output1() {
    return (
      <InputNum
        placeholder="'분'을 입력하시오."
        value={min}
        onChange={onMinChange}
        max="59"
        min="0"
        type="number"
      />
    );
  }
  function TimeReturn0() {
    if (
      hour >= 0 &&
      hour <= 23 &&
      min >= 0 &&
      min <= 59 &&
      hour !== "" &&
      min !== ""
    ) {
      //수강신청 시작시간 저장 변수 StartTime 설정 함수
      var TimeRef1 = new Date();
      var AimTime = new Date();
      AimTime.setHours(hour);
      AimTime.setMinutes(min);
      if (AimTime.getTime() < TimeRef1.getTime()) {
        AimTime.setDate(TimeRef1.getDate() + 1);
      }
      AimTime.setMilliseconds(0);
      AimTime.setSeconds(0);
      StartTimeSet(AimTime.getTime());
      setTextTime(
        AimTime.getFullYear() +
          "년 " +
          AimTime.getMonth() +
          1 +
          "월 " +
          AimTime.getDate() +
          "일 " +
          AimTime.getHours() +
          "시 " +
          AimTime.getMinutes() +
          "분 "
      );
      setValid(true);
    } else {
      setValid(false);
    }
  }

  function TimeReturn1() {
    //수강 신청 시간과 버튼 클릭 시간 차이를 보여주는 함수
    var TimeRef2 = new Date();
    var EndTime = TimeRef2.getTime();
    var timeDifference = (EndTime - StartTime) / 1000;
    if (EndTime < StartTime) {
      alert("수강신청 기간이 아닙니다. (" + -timeDifference + "초 남음)");
    } else {
      alert("설정한 시각보다 " + timeDifference + "초 늦습니다!");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LoginView
              output0={output0()}
              output1={output1()}
              setTime={TimeReturn0}
              time={textTime}
              valid={valid}
            />
          }
        />
        <Route
          exact
          path="/main"
          element={<MainView TimeReturn1={TimeReturn1} />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

const InputNum = styled.input`
  width: 15.1rem;
  height: 2.7rem;
  border-radius: 0rem;
  border: 0.1rem solid #dddddd;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
