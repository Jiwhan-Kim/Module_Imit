import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const padNumber = (num, length) => {
  return String(num).padStart(length, "0");
};

const Clock = () => {
  let now = new Date();
  const [month, setMonth] = useState(padNumber(now.getMonth(), 2));
  const [date, setDate] = useState(padNumber(now.getDate(), 2));
  const [hour, setHour] = useState(padNumber(now.getHours(), 2));
  const [min, setMin] = useState(padNumber(now.getMinutes(), 2));
  const [sec, setSec] = useState(padNumber(now.getSeconds(), 2));
  const [millisec, setMillisec] = useState(padNumber(now.getMilliseconds(), 2));
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      now = new Date();
      setMonth(padNumber(now.getMonth() + 1, 2));
      setDate(padNumber(now.getDate(), 2));
      setHour(padNumber(now.getHours(), 2));
      setMin(padNumber(now.getMinutes(), 2));
      setSec(padNumber(now.getSeconds(), 2));
      setMillisec(padNumber(now.getMilliseconds(), 2));
    }, 25);
    // clean-up 함수 리턴!
    return () => clearInterval(interval.current);
  }, []);

  return (
    <TimeBox>
      2022년 {month}월 {date}일 {hour}시 {min}분 {sec}초 {millisec}
    </TimeBox>
  );
};

export default Clock;

const TimeBox = styled.div`
  letter-spacing: -0.8rem;
  font-size: 40pt;
  color: #ff6815;
  font-weight: bold;
  text-shadow: rgb(80 80 80) -1px -1px 1px;
`;
