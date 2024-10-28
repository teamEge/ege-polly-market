"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .containerMid{
    max-width: 1000px;
    width: 100%;
    margin: 0 auto; 
    padding: 10px 20px; 
  }

  .containerBig{
    max-width: 1440px;
    width: 100%;
    margin: 0 auto; /* Centers the container */
    padding: 10px 20px; /* Optional: adds horizontal padding */
  }


    .footerArea{
      display:flex;
      justify-content:center;
      background-color: #007bff;
      padding: 10px 20px;
      color: white;
    }
`;
