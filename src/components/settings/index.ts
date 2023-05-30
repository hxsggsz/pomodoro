import { motion } from 'framer-motion';
import styled from 'styled-components'

export const Form = styled.form`
  gap: 1rem;
  color: ${({ theme }) => theme.BackgroundLight};
  flex-direction: column;
  display: flex;
  position: relative;
`;

export const Selection = styled.select`
  cursor: pointer;
  padding: 10px 20px;
  margin-right: 10px;
  margin-top: 20px;
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

export const Option = styled.option`
  cursor: pointer;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.LightColor};
  color: ${({ theme }) => theme.BackgroundLight};
`;

export const Options = styled.ul`
  gap: 20px;
`;

export const OptionOne = styled(motion.li)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #000;
  background: #9b1d20;
`;

export const OptionTwo = styled(motion.li)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #000;
  background: #4c5760;
`;

export const OptionThree = styled(motion.li)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #000;
  background: #2F2235;
`;

export const OptionFour = styled(motion.li)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #000;
  background: #3F3F37;
`;
