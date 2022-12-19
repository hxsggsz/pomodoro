import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledRoot = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.BackgroundLight};
  align-items: center;
`;

export const StyledBody = styled.div`
  background: ${({ theme }) => theme.LightColor};
  border-radius: 5px;
`;

export const StyledContent = styled.div`
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const StyledTitle = styled.h1`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
`;

export const StyledIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.BackgroundLight};
  }
`;

export const StyledForm = styled.form`
  gap: 1rem;
  color: ${({ theme }) => theme.BackgroundLight};
  flex-direction: column;
  display: flex;
  position: relative;
`;

export const StyledSelection = styled.select`
  padding: 10px 20px;
  margin-right: 10px;
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

export const StyledOption = styled.option`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.LightColor};
  color: ${({ theme }) => theme.BackgroundLight};
`;

export const StyledButton = styled(motion.button)`
  border-radius: 15px;
  font-size: 1.2rem;
  padding: 10px;
  position: absolute;
  top: 120%;
  left: 30%;
  background: ${({ theme }) => theme.BackgroundLight};
  color: ${({ theme }) => theme.LightColor};
`;
