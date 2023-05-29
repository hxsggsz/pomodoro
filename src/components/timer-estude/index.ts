import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledTimer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .timer {
    color: ${({ theme }) => theme.LightColor};
    font-size: 6rem;
  }

  .gear {
    margin: 30% 0;
    cursor: pointer;
    color: ${({ theme }) => theme.LightColor};
  }
`;

export const StyledWrapButtons = styled.div`
  gap: 13px;
  display: flex;
  margin-top: 20px;
  justify-content: center;

  .button {
    padding: 10px 14px;
    cursor: pointer;
    max-width: 100%;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 12px;
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;
    border: 2px solid ${({ theme }) => theme.LightColor};
    border-bottom: 4px solid ${({ theme }) => theme.LightColor};
    color: ${({ theme }) => theme.LightColor};
    background: ${({ theme }) => theme.BackgroundLight};
    
    &:hover {
      opacity: 0.8;
    }

    &:active {
      border-bottom: 2px solid ${({ theme }) => theme.LightColor};
      margin-top: 2px;
    }
  }
`;

export const StyledCounter = styled.div`
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #000;
  background: ${({ theme }) => theme.BackgroundLight};
`;

export const StyledOptions = styled.ul`
  gap: 20px;
`;

export const StyledOptionOne = styled(motion.li)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #000;
  background: #9b1d20;
`;
export const StyledOptionTwo = styled(motion.li)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #000;
  background: #4c5760;
`;
