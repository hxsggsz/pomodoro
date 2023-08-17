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
  gap: 1.3rem;
  display: flex;
  margin-top: 2rem;
  justify-content: center;
`;

export const StyledCounter = styled.div`
  overflow: hidden;
  border-radius: 10%;
  border: 2px solid #000;
  background: ${({ theme }) => theme.BackgroundLight};
`;

