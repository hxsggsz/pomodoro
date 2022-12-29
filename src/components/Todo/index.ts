import styled from "styled-components";

export const StyledWrapperTodo = styled.section`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 100px;
  margin-top: 5%;
  margin-bottom: 25%;
  border-radius: 30px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.backgroundBase};

  @media (max-width: 523px) {
    padding: 10px 60px;
  }

  p {
    font-size: 1.2rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-top: 20px;
    font-size: 1.5rem;
  }

  input[type="text"] {
    background: ${({ theme }) => theme.LightColor};
    padding: 5px;
    color: ${({ theme }) => theme.BackgroundLight};
    outline: none;
    font-size: 1.1rem;
    font-weight: semibold;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.BackgroundLight};
  }

  input[type="text"]::placeholder {
    color: ${({ theme }) => theme.BackgroundLight};
  }

  .button {
    cursor: pointer;
    padding: 5px 8px;
    white-space: nowrap;
    margin-left: 10px;
    max-width: 100%;
    font-size: 1.3rem;
    font-weight: bold;
    border: none;
    border-radius: 7px;
    color: ${({ theme }) => theme.LightColor};
    box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
    background: ${({ theme }) => theme.BackgroundLight};
  }

  ul {
    flex-direction: column;
    margin-top: 10%;
  }

  li {
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    background: ${({ theme }) => theme.BackgroundLight};
    border-radius: 5px;
    padding: 5px;
    margin: 2px;
  }

  span {
    color: ${({ theme }) => theme.contrast};
    font-size: 1.2rem;
    margin: 15px 20px;
  }

  .deleteTodo {
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.contrast};
    }
  }
`;
