import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.li)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  background: ${({ theme }) => theme.BackgroundLight};
  border-radius: 1rem;
  padding: 12px;
  gap: 8px;
`;

export const Input = styled.input`
  outline: none;
  background: none;
  border: none;
  font-family: Ubuntu Condensed;
  width: 100%;
  color: ${({ theme }) => theme.LightColor};
  font-size: 1.4rem;
  font-weight: 700;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.LightColor};
  font-size: 1.4rem;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  color: ${({ theme }) => theme.LightColor};
  padding: 0.2rem;

  &:hover {
    background: ${({ theme }) => theme.contrast};
    border-radius: 50%;
  }
`;
