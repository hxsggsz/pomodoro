import styled from "styled-components";
import * as Select from "@radix-ui/react-select";

export const Trigger = styled(Select.Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4rem;
  padding: 0.4rem 1rem;
  font-size: 1.2rem;
  line-height: 1;
  gap: 5px;
  font-weight: 700;
  width: 90%;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.LightColor};
  border-bottom: 4px solid ${({ theme }) => theme.LightColor};
  background: ${({ theme }) => theme.BackgroundLight};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.LightColor};
  overflow-x: hidden;
`;

export const Content = styled(Select.Content)`
  overflow: hidden;
  border-radius: 0.6rem;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const Item = styled(Select.Item)`
  cursor: pointer;
  font-weight: 700;
  line-height: 1;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.LightColor};
  display: flex;
  align-items: center;
  height: 25px;
  width: 98%;
  padding: 1.2rem;
  position: relative;
  background: ${({ theme }) => theme.BackgroundLight};
  user-select: none;

  &:focus {
    outline: none;
    background: ${({ theme }) => theme.backgroundBase};
  }
`;

export const ItemText = styled(Select.ItemText)``;
