import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.LightColor};
  font-size: 1.4rem;
  font-weight: 700;

  @media (max-width: 768px) {
    display: none;
  }
`;
