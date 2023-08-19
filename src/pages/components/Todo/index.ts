import styled from "styled-components";

export const StyledWrapperTodo = styled.section`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 20px;
  border-radius: 30px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.backgroundBase};

  @media (max-width: 590px) {
    max-width: 95vw;
  }

  p {
    font-size: 1.2rem;
    padding-top: 0.6rem;
  }
`;

export const EmptyMessage = styled.span`
  background: ${({ theme }) => theme.BackgroundLight};
  border-radius: 0.4rem;
  padding: 0.2rem;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  gap: 8px;
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.BackgroundLight};
  padding: 0 0.4rem;
  color: ${({ theme }) => theme.LightColor};
  outline: none;
  font-size: 1.5rem;
  width: 100%;
  transition: 250ms;
  font-weight: 600;
  border-radius: 1rem;
  border: 0.2rem solid ${({ theme }) => theme.BackgroundLight};
  border-bottom: 0.4rem solid ${({ theme }) => theme.BackgroundLight};

  &::placeholder {
    color: ${({ theme }) => theme.LightColor};
    font-weight: 700;
  }
  
  &:focus {
    color: ${({ theme }) => theme.BackgroundLight};
    background: ${({ theme }) => theme.LightColor};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-top: 0.6rem;
  overflow-y: auto;
`;

export const Error = styled.span`
  color: #ff1744;
  text-align: center;
  font-size: 1.2rem;
  margin: 0.4rem;
  width: 100%;
`;
