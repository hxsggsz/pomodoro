import { motion } from "framer-motion";
import styled from "styled-components";

interface StyleWrapperProps {
  isEditable: boolean;
  isDragging: boolean;
}

interface StyleEditableProps {
  isEditable: boolean;
}

export const Wrapper = styled(motion.li)<StyleWrapperProps>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  rotate: ${({ isDragging}) => isDragging ? "5deg" : "" };
  background: ${({ theme, isEditable }) =>
    isEditable ? theme.LightColor : theme.BackgroundLight};
  border-radius: 1rem;
  transition: 250ms;
  padding: 12px;
  gap: 8px;
`;

export const Input = styled.input<StyleEditableProps>`
  outline: none;
  background: none;
  border: none;
  font-family: Ubuntu Condensed;
  width: 100%;
  color: ${({ theme, isEditable }) =>
    isEditable ? theme.contrast : theme.LightColor};
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

export const Button = styled.button<StyleEditableProps>`
  cursor: pointer;
  border: none;
  background: none;
  color: ${({ theme, isEditable }) =>
    isEditable ? theme.contrast : theme.LightColor};
  padding: 0.2rem;

  &:hover {
    background: ${({ theme, isEditable }) =>
      isEditable ? theme.LightColor : theme.backgroundBase};
    border-radius: 50%;
  }
`;
