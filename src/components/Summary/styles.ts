import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
      background: ${theme.colors.shape};
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;
      color: ${theme.colors.title};

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
      }
    }

    div:last-child {
      background: ${theme.colors.green};
      color: ${theme.colors.shape};
    }
  `}
`;
