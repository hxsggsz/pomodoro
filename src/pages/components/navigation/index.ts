import { motion } from "framer-motion";
import styled from "styled-components";

export const Navbar = styled(motion.nav)`
  display: flex;
  justify-content: center;
`;

export const List = styled(motion.ul)`
  gap: 1rem;
  cursor: pointer;
  list-style: none;
  border-radius: 3rem;
  box-shadow: 0.5rem 0.5rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
  border: 0.5rem solid ${({ theme }) => theme.backgroundBase};
  background-color: ${({ theme }) => theme.backgroundBase};
`;

export const Text = styled.p`
  z-index: 3;
  padding:  1rem;
  font-weight: bold;
  font-size: 1.3rem;
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: ${({ theme }) => theme.LightColor};
`;

export const Background = styled(motion.span)`
  inset: 0;
  z-index: -1;
  position: absolute;
  border-radius: 3rem;
  background: ${({ theme }) => theme.BackgroundLight};
`;