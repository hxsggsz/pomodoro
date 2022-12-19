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
  border: 2px solid #000;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.backgroundBase};
`;
