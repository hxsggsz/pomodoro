import { motion } from "framer-motion";
import styled from "styled-components";

export const TimerList = styled(motion.ul)`
  gap: 0.6rem;
`;

export const TimerOption = styled.p`
  width: 100%;
  font-weight: bold;
  user-select: none;
  font-size: min(2.8rem, 8vw);
  color: ${({ theme }) => theme.LightColor};
  position: relative;
  cursor: pointer;
  z-index: 99;
  display: inline-block;
`;

export const Text = styled(motion.span)`
  padding: 0 0.6rem;
`;

export const TimerEffect = styled(motion.span)`
  z-index: -1;
  inset: 0;
  position: absolute;
  background: ${({ theme }) => theme.BackgroundLight};
  border-radius: 12px;
`;
