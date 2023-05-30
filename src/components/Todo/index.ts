import styled from "styled-components";

export const StyledWrapperTodo = styled.section`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 120px;
  margin-top: 20px;
  margin-bottom: 25%;
  border-radius: 30px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.backgroundBase};
  max-width: 520px;

  @media (max-width: 590px) {
    max-width: 95vw;
  }

  p {
    font-size: 1.2rem;
  }

  form {
    display: flex;
    gap: 8px;
    white-space: nowrap;
  }

  input[type="text"] {
    background: ${({ theme }) => theme.LightColor};
    padding: 0 5px;
    color: ${({ theme }) => theme.BackgroundLight};
    outline: none;
    font-size: 1.5rem;
    font-weight: semibold;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.BackgroundLight};

    &::placeholder {
      font-weight: 700;
    }
  }

  ul {
    flex-direction: column;
    margin-top: 10%;
    gap: 8px;
  }

  li {
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    background: ${({ theme }) => theme.BackgroundLight};
    border-radius: 6px;
    padding: 12px;
    gap: 8px;
  }

  span {
    color: ${({ theme }) => theme.contrast};
    font-size: 1.2rem;
    margin: 15px 20px;
    width: 100%;
  }

  .deleteTodo {
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.contrast};
    }
  }
`;
