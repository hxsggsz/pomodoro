import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  font-size: 5rem;
  margin-top: 20px;
  justify-content: center;
  color: ${({ theme }) => theme.LightColor};
`;

export const WrapperInfo = styled.div`
  .InfoButton {
    position: fixed;
    bottom: 7%;
    right: 5%;
    padding: 15px 22px;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: semibold;
    border-radius: 50%;
    color: ${({ theme }) => theme.LightColor};
    background: ${({ theme }) => theme.backgroundBase};
  }
`;
