import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: 1120px;

    table {
      width: 100%;
      border-spacing: 0 0.5rem;

      th {
        color: ${theme.colors.text};
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
      }

      td {
        padding: 1rem 2rem;
        border: 0;
        background-color: ${theme.colors.shape};
        font-weight: 400;
        color: ${theme.colors.text};

        &:first-child {
          color: ${theme.colors.title};
        }

        &.withdraw {
          color: ${theme.colors.red};
        }
        &.deposit {
          color: ${theme.colors.green};
        }
      }
    }
  `}
`;
