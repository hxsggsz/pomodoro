import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  padding: 1rem 1.6rem;
  left: 0;
  bottom: 0;
  display: flex;
  gap: 0.6rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1rem 1.2rem;
    align-items: baseline;
    flex-direction: column;
  }
`;

export const AlignIcons = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    align-items: center;
  }
`;

export const WrapperLinks = styled.a`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.LightColor};
  font-size: 1.4rem;
  font-weight: 700;

  @media (max-width: 768px) {
    display: none;
  }
`;
