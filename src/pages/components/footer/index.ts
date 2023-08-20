import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  padding: 0.6rem 1.2rem;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;

export const WrapperLinks = styled.a`
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
