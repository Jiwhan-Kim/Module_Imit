import React from "react";
import styled from "styled-components";
import TrHeadForSL from "../../atoms/TrHeadForSL";

function SelectedLect({ lecture, selectLect, enrollLect }) {
  let columnNum = 0;
  function ListBox({ no, num, name, point, prof, time, place, remain }) {
    let color = "#ffffff";
    if (columnNum % 2 === 0) {
      color = "#ffffff";
    } else {
      color = "#f6f6f6";
    }
    const BtnClicked = (temp) => {
      selectLect(temp - 1, 0);
    };
    if (lecture[no - 1][8] === 0) {
      return <div></div>;
    } else {
      columnNum = columnNum + 1;
      return (
        <Tr style={{ backgroundColor: color }}>
          <Td style={{ width: "4rem" }}>
            <button
              onClick={() => {
                BtnClicked(no);
              }}
            ></button>
          </Td>
          <Td style={{ width: "21rem" }}>{num}</Td>
          <Td style={{ width: "4rem" }}>
            <button
              onClick={() => {
                enrollLect(no - 1, 1);
              }}
            ></button>
          </Td>
          <Td style={{ width: "21rem" }}>{name}</Td>
          <Td style={{ width: "4rem" }}>{point}</Td>
          <Td style={{ width: "9rem" }}>{prof}</Td>
          <Td style={{ width: "7rem" }}>{time}</Td>
          <Td style={{ width: "8rem" }}>{place}</Td>
          <Td style={{ width: "6rem" }}>{remain}</Td>
          <Td style={{ width: "6rem" }}>0</Td>
          <Td style={{ width: "4rem" }}>abc</Td>
          <Td style={{ width: "6rem" }}>-</Td>
          <Td style={{ width: "15rem" }}>-</Td>
          <Td style={{ width: "5rem" }}>x</Td>
        </Tr>
      );
    }
  }
  const tempArray = [];
  for (let i = 0; i < lecture.length; i++) {
    tempArray.push(lecture[i]);
  }
  const ListItems = tempArray.map((array, index) => (
    <ListBox
      key={index}
      no={array[0]}
      num={array[1]}
      name={array[2]}
      point={array[3]}
      prof={array[4]}
      time={array[5]}
      place={array[6]}
      remain={array[7]}
    />
  ));

  return (
    <OutLineBox>
      <table
        style={{
          borderTop: "0.2rem solid #d4d4d4",
          borderRight: "0.15rem solid #e3e3e3",
          borderCollapse: "collapse",
        }}
      >
        <TrHeadForSL />
        {ListItems}
      </table>
    </OutLineBox>
  );
}

export default SelectedLect;

const OutLineBox = styled.div`
  margin-top: 1.5rem;
`;
const Tr = styled.tr`
  font-size: 1.5rem;

  display: flex;
`;
const Td = styled.td`
  height: 4rem;
  border-left: 0.15rem solid #e3e3e3;
  border-bottom: 0.15rem solid #e3e3e3;
  white-space: pre-line;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;