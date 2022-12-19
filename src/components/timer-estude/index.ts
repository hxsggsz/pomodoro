import styled from "styled-components";

export const StyledWrapper = styled.main`
  margin: 8% 0;
`;
export const StyledTimer = styled.div`
  display: flex;
  cursor: default;
  padding: 10px 100px;
  align-items: center;
  border-radius: 30px;
  flex-direction: column;
  border: 2px solid #000;
  justify-content: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.backgroundBase};

  .timer {
    color: ${({ theme }) => theme.LightColor};
    font-size: 5rem;
  }

  .gear {
    margin: 30% 0;
    cursor: pointer;
    color: ${({ theme }) => theme.LightColor};
  }
`;

export const StyledWrapButtons = styled.div`
  gap: 13px;
  display: flex;
  margin-top: 20px;
  justify-content: center;

  .button {
    width: 120px;
    height: 40px;
    cursor: pointer;
    max-width: 100%;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 7px;
    border: 2px solid #000;
    color: ${({ theme }) => theme.LightColor};
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    background: ${({ theme }) => theme.BackgroundLight};
  }
`;

export const StyledCounter = styled.div`
  padding: 3px 5px;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #000;
  background: ${({ theme }) => theme.BackgroundLight};
`;
