import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from ".";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({children, ...props}: IButton) => (
  <StyledButton {...props}>{children}</StyledButton>
)