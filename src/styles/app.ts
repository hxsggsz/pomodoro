import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: ${({ theme }) => theme.LightColor};
`;

export const MainCard = styled.main`
  margin-top: 15px;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.backgroundBase};

  @media (max-width: 475px) {
    max-width: 95vw;
  }
`;