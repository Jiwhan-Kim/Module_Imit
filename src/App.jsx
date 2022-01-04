import React from "react";
import { Route, Routes } from "react-router-dom";
// themes
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
// components
import LoginView from "./components/views/LoginView";
import MainView from "./components/views/MainView";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<LoginView />} />
        <Route exact path="/main" element={<MainView />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
