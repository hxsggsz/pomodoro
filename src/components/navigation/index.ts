import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  ul {
    gap: 1rem;
    cursor: pointer;
    list-style: none;
    border-radius: 30px;
    box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
    border: 5px solid ${({ theme }) => theme.backgroundBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }

  p {
    z-index: 3;
    padding: 1rem;

    font-weight: bold;
    font-size: 1.3rem;
    position: relative;
    border-radius: 40px;
    text-decoration: none;
    display: inline-block;
    color: ${({ theme }) => theme.LightColor};
  }

  .shadow {
    inset: 0;
    z-index: -1;
    border-radius: 30px;
    position: absolute;
    background: ${({ theme }) => theme.BackgroundLight};
  }
`;
