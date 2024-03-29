import React from "react";
import {createGlobalStyle} from "styled-components"
import Reset from 'styled-reset';
import Router from "./components/layouts/router/Router";
import {colors} from "./styles/config/colors";

const GlobalSyle = createGlobalStyle`
  ${Reset};
  *{
    box-sizing: border-box;
  }
  html{
    font-size: 10px;
  }
  #root{
    width: 100vw;
    min-height: 100vh;
    font-size: 1.4rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    color: ${colors.black};
    background-color: ${colors.bgColor};
    display: flex;
    flex-direction: column;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

const App = () => {
  return(
    <>
      <GlobalSyle/>
      <Router/>
    </>
  )
}

export default App;
