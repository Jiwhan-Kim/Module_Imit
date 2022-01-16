import React, { useState } from "react";
import styled from "styled-components";
// components
import TrHeadForSL from "../../atoms/TrHeadForSL";
import DeleteBtn from "../../atoms/DeleteBtn";
import EnrollBtn from "../../atoms/EnrollBtn";
import ModalTime from "../../atoms/ModalTime";
// f6f6f6 ffffff
function SelectedLect({ lecture, selectLect, enrollLect, StartTime }) {
  const [modal1Open, setModal1Open] = useState(false);
  let color = "#ffffff";
  const openModal1 = () => {
    setModal1Open(true);
  };
  const closeModal1 = () => {
    setModal1Open(false);
  };
  let j = 0;
  function ListBox({ no, num, name, point, prof, time, place, remain }) {
    if (j % 4 === 1) {
      color = "#ffffff";
    } else {
      color = "#f6f6f6";
    } // 이게 왜 되는거지????????
    if (lecture[no - 1][8] === 0) {
      return <tr />;
    } else {
      j = j + 1;
      return (
        <Tr style={{ backgroundColor: color }}>
          <Td style={{ width: "6rem" }}>
            <DeleteBtn
              onClick={() => {
                selectLect(no - 1, 0);
              }}
            />
          </Td>
          <Td style={{ width: "21.925rem" }}>{num}</Td>
          <Td style={{ width: "6rem" }}>
            <EnrollBtn
              onClick={() => {
                enrollLect(no - 1, 1);
                openModal1();
              }}
            />
          </Td>
          <Td style={{ width: "21rem" }}>{name}</Td>
          <Td style={{ width: "5rem" }}>{point}</Td>
          <Td style={{ width: "9rem" }}>{prof}</Td>
          <Td style={{ width: "7rem" }}>{time}</Td>
          <Td style={{ width: "8rem" }}>{place}</Td>
          <Td style={{ width: "6rem" }}>{remain}</Td>
          <Td style={{ width: "6rem" }}>0</Td>
          <Td style={{ width: "4rem" }}>abc</Td>
          <Td style={{ width: "6rem" }}>-</Td>
          <Td style={{ width: "16rem" }}>-</Td>
          <Td style={{ width: "6rem" }}>x</Td>
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
      <ModalTime open={modal1Open} close={closeModal1} StartTime={StartTime} />
      <table
        style={{
          borderTop: "0.2rem solid #d4d4d4",
          borderRight: "0.15rem solid #e3e3e3",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <TrHeadForSL />
        </thead>
        <tbody style={{ minHeight: "20rem" }}>{ListItems}</tbody>
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
  height: 3.5rem;
  border-left: 0.15rem solid #e3e3e3;
  border-bottom: 0.15rem solid #e3e3e3;
  white-space: pre-line;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
