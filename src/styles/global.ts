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
    font-size: 62.5%;
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

  h2, label {
    color: ${({ theme }) => theme.LightColor};
    font-size: min(2.15rem, 5vw);
    font-weight: 700;
  }
  
  a {
    text-decoration: none;
    outline-color: ${({ theme }) => theme.LightColor};
    color: ${({ theme }) => theme.LightColor};    
  }

  button {
  border: none;
  background: none;
  outline-offset: 6px;
  cursor: pointer;
}
`;
