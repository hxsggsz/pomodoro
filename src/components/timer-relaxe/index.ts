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
`;

export const StyledWrapButtons = styled.div`
  gap: 1.3rem;
  display: flex;
  margin-top: 2rem;
  justify-content: center;

  .button {
    width: 120px;
    height: 40px;
    cursor: pointer;
    max-width: 100%;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 7px;
    border: none;
    color: ${({ theme }) => theme.LightColor};
    box-shadow: 7px 7px 7px 1px rgba(0, 0, 0, 0.2);
    background: ${({ theme }) => theme.BackgroundLight};
  }
`;

export const StyledCounter = styled.div`
  padding: 0.3rem 0.5rem;
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
