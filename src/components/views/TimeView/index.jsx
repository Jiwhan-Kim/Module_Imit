import React from "react";
import styled from "styled-components";

function TimeView() {
  var realtimeValue = document.querySelector('.realtime-value');

  //const options = { weekday : 'short' }; //요일 반환 필요할 시 사용

  function getRealTime() {
    const today = new Date(); //현재 날짜와 시간 반환
    const year = today.getFullYear();
    const month = today.getMonth() + 1; //1~12월 반환
    const date = today.getDate();
    //const day = new Intl.DateTimeFormat('en-us', options).format(today.getDay()); //Mon~Sun 형태를 지원하는 날짜와 서식 반환
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today. getSeconds();

    realtimeValue.innerText = `${year}년 ${addZero(month)}월 ${addZero(date)}일 ${addZero(hours)}시 ${addZero(minutes)}분 ${addZero(seconds)}초`
  }
  
  function addZero(num) {
    num < 10 ? num = `0` + num : num;
    return num;
  }

  function init(){
    setInterval(getRealTime, 500);
  }

  init();

  const onClickRedirect_1 = () => {
    document.location.href('/')
  }

  const onClickRedirect_2 = () => {
    document.location.href('/main')
  }

  return (
    <div>
      <TimeArea className = "realtime-value"></TimeArea>
        <RedirectButton onClick={onClickRedirect_1}>
          ▶ 모의수강신청 시간 입력창 바로가기
        </RedirectButton>
        <RedirectButton onClick={onClickRedirect_1}>
          ▶ 모의수강신청 과목 리스트 바로가기
        </RedirectButton>
    </div>
  );
}

export default TimeView;

const TimeArea = styled.h1`
  font-size: 100pt;
  color: #FF6815;
  font-weight: bold;
  text-align: left;
  letter-spacing: -15px;
  text-shadow: rgb(80, 80, 80) -1px -1px 1px;
`;

const RedirectButton = styled.button`
  font-size: 12px;
  color: #0067b2;
  text-align: center;
  padding: 5px;
  background-color: #fff;
  border-color: #0067b2;
  border-width: 1px;
  cursor:pointer;
`;