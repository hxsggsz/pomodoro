import { motion } from 'framer-motion';
import styled from 'styled-components'

export const TimerNav = styled.nav`
  margin-right: 24px;  
`;

export const TimerList = styled(motion.ul)`
  flex-direction: column; 
  gap: 8px;
`;

export const TimerOption = styled.p`
  font-weight: bold;
  user-select: none;
  font-size: min(3rem, 5vw);
  color: ${({ theme }) => theme.LightColor};
  position: relative;
  cursor: pointer;
  z-index: 99;
  display: inline-block;
  padding: 6px;
  padding-right: 34px;
`;

export const TimerEffect = styled(motion.span)`
  z-index: -2; 
  inset: 0;
  position: absolute;
  background: ${({ theme }) => theme.BackgroundLight};
  border-radius: 12px;
`;