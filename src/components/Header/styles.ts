import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
    width: 100%;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      font-size: 1rem;
      color: ${theme.colors.shape};
      background: ${theme.colors.blue_light};
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      transition: filter 0.2s linear;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`;
