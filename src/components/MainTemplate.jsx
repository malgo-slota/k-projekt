import * as React from 'react';
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import PropTypes from 'prop-types';

export const MainTemplate = ({children}) => (
        <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <main>{children}</main>
        </ThemeProvider>
        </>
);

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};