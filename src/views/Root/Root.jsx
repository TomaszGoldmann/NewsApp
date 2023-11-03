import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "src/theme/GlobalStyle.jsx";
import {theme} from "src/theme/mainTheme.jsx";
import {Button} from "src/components/Atoms/Button/Button.jsx";
import Input from "src/components/Atoms/Input/Input.jsx";

export const Root = () => {
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <>
                    <h1>Hello</h1>
                    <Button>Vite + React</Button>
                    <Button width={'100px'} secondary>Vite + React</Button>
                    <Input/>
                    <Input search/>
                </>
            </ThemeProvider>
        </>
    )
}
