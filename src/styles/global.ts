import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      @media (max-width: 1080px) {
        font-size: 93.75%; // tamanho da fonte * 0.9375
      }

      @media (max-width: 720px) {
        font-size: 87.5%; // tamanho da fonte * 0.875
      }
    }

    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: ${theme.colors.background!};
    }

    body,
    input,
    textarea,
    button {
      font-family: "Poppins", sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: 600;
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-modal-content {
      width: 100%;
      max-width: 576px;
      background-color: ${theme.colors.background};
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
    }

    .react-modal-close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      background: transparent;
      border: 0;
      transition: filter 0.2s linear;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`;
