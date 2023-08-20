import styled from "styled-components";

export const Title = styled.h1`
  font-size: min(4rem, 12vw);
  text-align: center;
  color: ${({ theme }) => theme.LightColor};
`;

export const MainCard = styled.main`
  margin-top: 1.5rem;
  padding: 1.6rem;
  border-radius: 30px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.backgroundBase};

  @media (max-width: 47em) {
    max-width: 95vw;
  }
`;
