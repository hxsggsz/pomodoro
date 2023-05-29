import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledWrapper = styled.main`
  margin: 8% 0;
`;
export const StyledTimer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .timer {
    color: ${({ theme }) => theme.LightColor};
    font-size: 5rem;
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
  padding: 3px 5px;
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
