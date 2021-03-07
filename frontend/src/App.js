import React from "react";
import {createGlobalStyle} from "styled-components"
import Reset from 'styled-reset';
import Router from "./components/layouts/Router";

const GlobalSyle = createGlobalStyle`
  ${Reset};
  *{
    box-sizing: border-box;
  }
  html{
    font-size: 10px;
  }
  body{
    width: 100vw;
    min-height: 100vh;
    font-size: 1.4rem;
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
