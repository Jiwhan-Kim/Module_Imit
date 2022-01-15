import React from "react";
import styled from "styled-components";
// components
import TrHeadForOL from "../../atoms/TrHeadForOL";
import EnrollBtn from "../../atoms/EnrollBtn";

function OpenedLect({ lecture, selectLect, enrollLect, TimeReturn1 }) {
  function ListBox({ no, num, name, point, prof, time, place, remain }) {
    let color = "#ffffff";
    if (no % 2 === 1) {
      color = "#ffffff";
    } else {
      color = "#f6f6f6";
    }
    return (
      <Tr style={{ backgroundColor: color }}>
        <Td style={{ width: "4rem" }}>{no}</Td>
        <Td style={{ width: "5rem" }}>
          <button
            onClick={() => {
              selectLect(no - 1, 1);
            }}
          ></button>
        </Td>
        <Td style={{ width: "4rem" }}>1</Td>
        <Td style={{ width: "21rem" }}>{num}</Td>
        <Td style={{ width: "6rem" }}>
          <EnrollBtn
            onClick={() => {
              enrollLect(no - 1, 1);
              TimeReturn1();
            }}
          />
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
        <Td style={{ width: "12rem" }}>-</Td>
        <Td style={{ width: "5rem" }}>x</Td>
      </Tr>
    );
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
        <thead>
          <TrHeadForOL />
        </thead>
        <tbody>{ListItems}</tbody>
      </table>
    </OutLineBox>
  );
}

export default OpenedLect;

const OutLineBox = styled.div`
  margin-top: 1.5rem;
`;
const Tr = styled.tr`
  font-size: 1.5rem;

  display: flex;
`;
const Td = styled.td`
  height: 3.5rem;
  border-left: 0.15rem solid #e3e3e3;
  border-bottom: 0.15rem solid #e3e3e3;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
