import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ fontSize: "1rem" }}>h2i1</div>
    </ThemeProvider>
  );
}

export default App;
