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
  const [hour, setHour] = useState();
  const [min, setMin] = useState();
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
      />
    );
  }
  function output1() {
    return (
      <InputNum
        placeholder="'분'을 입력하시오."
        value={min}
        onChange={onMinChange}
      />
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          exact
          path="/"
          element={<LoginView output0={output0()} output1={output1()} />}
        />
        <Route
          exact
          path="/main"
          element={<MainView inputHour={hour} inputMin={min} />}
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
