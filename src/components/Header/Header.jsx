import { useState, useEffect } from "react";
import logo from "/logo-name.svg";
import { styled } from "styled-components";
// import "./Header.css";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 1000);
  //   return () => clearInterval(timerId);
  // }, []);

  setInterval(() => setCurrentTime(new Date()), 1000);

  return (
    <HeaderContainer>
      <img src={logo} alt={"Result"} />
      {/* <h3>Result Universuty</h3> */}

      <span>Time now: {currentTime.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
