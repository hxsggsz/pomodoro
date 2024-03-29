import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 0.8rem 1rem;
  cursor: pointer;
  max-width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 12px;
  display: flex;
  gap: 6px;
  transition: background 250ms;
  align-items: center;
  justify-content: center; 
  border: 2px solid ${({ theme }) => theme.LightColor};
  border-bottom: 4px solid ${({ theme }) => theme.LightColor};
  color: ${({ theme }) => theme.LightColor};
  background: ${({ theme }) => theme.BackgroundLight};
  
  &:hover {
    opacity: 0.8;
  }

  &:active {
    border-bottom: 2px solid ${({ theme }) => theme.LightColor};
    margin-top: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    background: #1e1e1e;
  }
`;