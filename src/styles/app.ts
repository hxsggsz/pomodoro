import { motion } from "framer-motion";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: ${({ theme }) => theme.LightColor};
`;

export const MainCard = styled.main`
  display: flex;
  margin-top: 20px;
  padding: 14px 42px 14px 8px;
  border-radius: 30px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.backgroundBase};
  @media (max-width: 475px) {
    width: 95vw;
  }
`;

export const TimerNav = styled(motion.nav)`
  margin-right: 24px;

  .wrapper {
    position: relative;
  }
  `;

export const TimerOption = styled.p`
  font-size: min(3rem, 5vw);
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.LightColor};
  z-index: 99;
  padding: 6px;
  padding-right: 34px;
  `;

export const TimerEffect = styled(motion.span)`
  z-index: 9;
  inset: 0;
  position: absolute;
  background: ${({ theme }) => theme.BackgroundLight};
  border-radius: 6px;
`;