import React from "react";
import styled from "styled-components";

function SelectedLect({ lecture, selectLect }) {
  return (
    <div>
      <p>{lecture[2][8]}</p>
    </div>
  );
}

export default SelectedLect;
