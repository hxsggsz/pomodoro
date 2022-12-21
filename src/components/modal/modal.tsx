import { ButtonHTMLAttributes, ReactNode } from "react"
import { StyledBody, StyledContent, StyledIcon, StyledRoot, StyledTitle } from "."
import { AnimatePresence } from "framer-motion"

interface IModal { 
  children: ReactNode
}

interface IModalIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const ModalRoot = ({ children }: IModal) => (
  <StyledRoot>{children}</StyledRoot>
)

const ModalBody = ({ children }: IModal) => (
  <AnimatePresence>
    <StyledBody initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }}>{children}</StyledBody>
  </AnimatePresence>
)

const ModalTitle = ({ children }: IModal) => (
  <StyledTitle>{children}</StyledTitle>
)

const ModalIcon = ({ children, ...props }: IModalIcon) => (
  <StyledIcon {...props}>{children}</StyledIcon>
)

const ModalContent = ({ children }: IModal) => (
  <StyledContent>{children}</StyledContent>
)

export const Modal = {
  Root: ModalRoot,
  Body: ModalBody,
  Icon: ModalIcon,
  Title: ModalTitle,
  Content: ModalContent
}