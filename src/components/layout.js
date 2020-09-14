

import React from "react";
import MainMenu from './MainMenu';
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0px!important;
    padding: 0px!important,
  }
`

const LayoutWraper = styled.div `
  max-width: 960px;
  margin: 0 auto;

`

const Layout = ({ children }) =>(
  <div>
    <GlobalStyles/>
    <MainMenu/>
    <LayoutWraper>
      {children}
    </LayoutWraper>
    
  </div>
);


export default Layout;
