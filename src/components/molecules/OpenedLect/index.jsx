import React, { useState } from "react";
import styled from "styled-components";
// components
import TrHeadForOL from "../../atoms/TrHeadForOL";
import SelectBtn from "../../atoms/SelectBtn";
import EnrollBtn from "../../atoms/EnrollBtn";
import ModalSelect from "../../atoms/ModalSelect";
import ModalTime from "../../atoms/ModalTime";

function OpenedLect({ criteria, lecture, selectLect, enrollLect, StartTime }) {
  const [modal0Open, setModal0Open] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);
  const [lecName, setLecName] = useState("");
  const [isChecked, setIsChecked] = useState(0);
  const openModal0 = (name, check, no) => {
    setModal0Open(true);
    setLecName(name);
    if (check === 0) {
      setIsChecked(1);
    } else {
      setIsChecked(0);
    }
    selectLect(no - 1, 1);
  };
  const openModal1 = () => {
    setModal1Open(true);
  };
  const closeModal0 = () => {
    setModal0Open(false);
  };
  const closeModal1 = () => {
    setModal1Open(false);
  };
  function ListBox({
    list,
    no,
    num,
    name,
    point,
    prof,
    time,
    place,
    remain,
    check,
  }) {
    let color = "#ffffff";
    if (list % 2 === 0) {
      color = "#ffffff";
    } else {
      color = "#f6f6f6";
    }
    return (
      <Tr style={{ backgroundColor: color }}>
        <Td style={{ width: "4.4rem" }}>{list + 1}</Td>
        <Td style={{ width: "4.3rem" }}>
          <SelectBtn
            onClick={() => {
              openModal0(name, check, no);
            }}
          />
        </Td>
        <Td style={{ width: "3.3rem" }}>{num.charAt(3)}</Td>
        <Td style={{ width: "17.9rem", color: "#0063dc" }}>
          {num}
          <ImgBox src="images/icon1_on.gif" />
          <ImgBox src="images/icon2_on.gif" />
          <ImgBox src="images/icon3_on.gif" />
        </Td>
        <Td style={{ width: "6.7rem" }}>
          <EnrollBtn
            onClick={() => {
              enrollLect(no - 1, 1);
              openModal1();
            }}
          />
        </Td>
        <Td style={{ width: "18.9rem" }}>
          {name}
          <ImgBox src="images/o_title.gif" />
        </Td>
        <Td style={{ width: "3.3rem" }}>{point}</Td>
        <Td style={{ width: "7.8rem" }}>{prof}</Td>
        <Td style={{ width: "7.8rem" }}>{time}</Td>
        <Td style={{ width: "7.8rem" }}>{place}</Td>
        <Td style={{ width: "4.4rem" }}>{remain}</Td>
        <Td style={{ width: "4.4rem" }}>0</Td>
        <Td style={{ width: "7.8rem" }}>abc</Td>
        <Td style={{ width: "5.5rem" }}>-</Td>
        <Td style={{ width: "13.2rem" }}>-</Td>
        <Td style={{ width: "4.4rem" }}>x</Td>
      </Tr>
    );
  }
  const tempArray = [];
  for (let i = 0; i < lecture.length; i++) {
    if (lecture[i][10] === criteria[0]) {
      if (criteria[1] === "전체" || criteria[1] === lecture[i][11]) {
        if (
          criteria[2] === "all" ||
          parseFloat(criteria[2]) === lecture[i][3]
        ) {
          tempArray.push(lecture[i]);
        }
      }
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
      check={array[8]}
    />
  ));
  return (
    <OutLineBox>
      <ModalSelect
        open={modal0Open}
        close={closeModal0}
        lecName={lecName}
        isChecked={isChecked}
      />
      <ModalTime open={modal1Open} close={closeModal1} StartTime={StartTime} />
      <TitleBox>
        <ExplainBox>
          <ImgBox1 src="images/icon1_on.gif" />
          동일교과목 조회
        </ExplainBox>
        <ExplainBox>
          <ImgBox1 src="images/icon2_on.gif" />
          교과목개요 조회
        </ExplainBox>
        <ExplainBox>
          <ImgBox1 src="images/icon3_on.gif" />
          수업계획서 조회
        </ExplainBox>
        <ExplainBox style={{ width: "20rem" }}>
          <ImgBox1 src="images/o_title.gif" />
          마일리지수강신청결과 조회
        </ExplainBox>
      </TitleBox>

      <table style={{ marginTop: "1rem" }}>
        <thead style={{ overflow: "auto", display: "inline-table" }}>
          <TrHeadForOL />
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

export default OpenedLect;

const OutLineBox = styled.div`
  margin-top: 1rem;
  font-size: 1.35rem;
`;
const Tr = styled.tr`
  font-size: 1.3rem;
  border-right: 0.15rem solid #e3e3e3;
  display: flex;
`;
const Td = styled.td`
  max-height: 3.5rem;
  height: 3.5rem;
  border-left: 0.15rem solid #e3e3e3;
  border-bottom: 0.15rem solid #e3e3e3;
  white-space: pre-line;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImgBox = styled.img`
  margin-left: 0.5rem;
`;
const ImgBox1 = styled.img`
  margin: 0rem 0.5rem 0rem 0.5rem;
`;
const ExplainBox = styled.div`
  display: flex;
  margin-right: 0.7rem;
`;
const TitleBox = styled.div`
  display: flex;
`;
