import styled, { css } from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  ${({ theme }) => css`
    width: 100%;

    h2 {
      color: ${theme.colors.title};
      font-size: 1.5rem;
      margin-bottom: 2rem;
      display: block;
    }

    input {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;
      background: #e7e9ee;
      border: 1px solid #d7d7d7;
      font-weight: 400;
      font-size: 1rem;
      color: ${theme.colors.title};

      &::placeholder {
        color: ${theme.colors.text};
      }

      & + input {
        margin-top: 1rem;
      }
    }

    button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: ${theme.colors.green};
      color: ${theme.colors.shape};
      border: 0;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 600;
      margin-top: 1.5rem;

      transition: filter 0.2s linear;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`;

type TransactionTypeContainerProps = {
  isActive: boolean;
  activeColor: "red" | "green";
};

export const TransactionTypeContainer = styled.div`
  ${() => css`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  `}
`;

const colors = {
  red: "#E62E4D",
  green: "#33CC95",
};

export const RadioBox = styled.button<TransactionTypeContainerProps>`
  ${({ theme, isActive, activeColor }) => css`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${isActive
      ? transparentize(0.6, colors[activeColor])
      : "transparent"};

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20px;
      height: 20px;
      pointer-events: none;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: ${theme.colors.title};
    }

    transition: border-color 0.2s linear;

    &:hover {
      border-color: ${darken(0.1, "#d7d7d7")};
    }
  `}
`;
