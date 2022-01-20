import React, { useState } from "react";
import styled from "styled-components";
// components
import TrHeadForSL from "../../atoms/TrHeadForSL";
import DeleteBtn from "../../atoms/DeleteBtn";
import EnrollBtn from "../../atoms/EnrollBtn";
import ModalTime from "../../atoms/ModalTime";

function SelectedLect({ lecture, selectLect, enrollLect, StartTime }) {
  const [modal1Open, setModal1Open] = useState(false);
  let color = "#ffffff";
  const openModal1 = () => {
    setModal1Open(true);
  };
  const closeModal1 = () => {
    setModal1Open(false);
  };
  function ListBox({ list, no, num, name, point, prof, time, place, remain }) {
    if (list % 2 === 1) {
      color = "#f6f6f6";
    } else {
      color = "#ffffff";
    }
    return (
      <Tr style={{ backgroundColor: color }}>
        <Td style={{ width: "6rem" }}>
          <DeleteBtn
            onClick={() => {
              selectLect(no - 1, 0);
            }}
          />
        </Td>
        <Td style={{ width: "22.85rem" }}>{num}</Td>
        <Td style={{ width: "6rem" }}>
          <EnrollBtn
            onClick={() => {
              enrollLect(no - 1, 1);
              openModal1();
            }}
          />
        </Td>
        <Td style={{ width: "23rem" }}>{name}</Td>
        <Td style={{ width: "4rem" }}>{point}</Td>
        <Td style={{ width: "8rem" }}>{prof}</Td>
        <Td style={{ width: "10rem" }}>{time}</Td>
        <Td style={{ width: "10rem" }}>{place}</Td>
        <Td style={{ width: "6rem" }}>{remain}</Td>
        <Td style={{ width: "5rem" }}>0</Td>
        <Td style={{ width: "4rem" }}>abc</Td>
        <Td style={{ width: "6rem" }}>-</Td>
        <Td style={{ width: "12rem" }}>-</Td>
        <Td style={{ width: "5rem" }}>x</Td>
      </Tr>
    );
  }
  const tempArray = [];
  for (let i = 0; i < lecture.length; i++) {
    if (lecture[i][8] === 1) {
      tempArray.push(lecture[i]);
    }
  }
  const ListItems = tempArray.map((array, index) => (
    <ListBox
      key={index}
      list={index}
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
      <ModalTime open={modal1Open} close={closeModal1} StartTime={StartTime} />
      <table>
        <thead style={{ overflow: "auto", display: "inline-table" }}>
          <TrHeadForSL />
        </thead>
        <tbody
          style={{ display: "block", overflowY: "scroll", height: "30rem" }}
        >
          {ListItems}
        </tbody>
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
  border-right: 0.15rem solid #e3e3e3;
  display: flex;
`;
const Td = styled.td`
  height: 3.5rem;
  border-left: 0.15rem solid #e3e3e3;
  border-bottom: 0.15rem solid #e3e3e3;
  white-space: pre-line;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
