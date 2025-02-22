import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialased;
        -moz-osx-font-smoothing: grayscale;
    }

    /* 1 rem - 10 px */
    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        font-size: 1.6rem;
        font-family: "Montserrat", sans-serif;
    }
`;