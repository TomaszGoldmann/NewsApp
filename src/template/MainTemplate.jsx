import {GlobalStyle} from "src/theme/GlobalStyle.jsx";
import {theme} from "src/theme/mainTheme.jsx";
import {ThemeProvider} from "styled-components";
import PropTypes from "prop-types";

export const MainTemplate = ({children}) => {
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
};
