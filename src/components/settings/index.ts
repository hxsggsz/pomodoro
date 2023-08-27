import { motion } from "framer-motion";
import styled from "styled-components";

export const Form = styled.article`
  gap: 1rem;
  margin-top: 0.8rem;
  color: ${({ theme }) => theme.BackgroundLight};
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Selection = styled.select`
  cursor: pointer;
  padding: 1rem 2rem;
  margin-right: 1rem;
  margin-top: 2rem;
  border-radius: 5px;
  outline: none;
  font-size: 1.2rem;
  font-weight: semibold;
  color: ${({ theme }) => theme.LightColor};
  background: ${({ theme }) => theme.BackgroundLight};
  &:focus {
    border: 1px solid ${({ theme }) => theme.BackgroundLight};
  }
`;

export const Options = styled.ul`
  gap: 1.2rem;
`;

export const OptionOne = styled(motion.button)`
  cursor: pointer;
  padding: min(1rem, 4vw);
  border-radius: 50%;
  border: 2px solid #000;
  background: #9b1d20;
`;

export const OptionTwo = styled(motion.button)`
  padding: min(1rem, 4vw);
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #000;
  background: #4c5760;
`;

export const OptionThree = styled(motion.button)`
  padding: min(1rem, 4vw);
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #000;
  background: #2f2235;
`;

export const OptionFour = styled(motion.button)`
  padding: min(1rem, 4vw);
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #000;
  background: #3f3f37;
`;
