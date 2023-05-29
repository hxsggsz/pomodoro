import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset */
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    font-family: Ubuntu Condensed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    background-color: ${({ theme }) => theme.BackgroundLight};
    color: ${({ theme }) => theme.LightColor};

    &::-webkit-scrollbar {
      background: inherit;
      width: 6px;
    }
    
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: ${({ theme }) => theme.LightColor};
    }
  } 

  ul {
      list-style: none;
      text-decoration: none;
      display: flex;
   }
`;
