import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
}
    body {
        background-color: ${theme.colors.black};
        padding: 2rem;
    }
    body, input, button, select{
        font: 1rem 'Inter', sans-serif;
    }
    h1,h2, p, span, strong, button, label,input {
        line-height: 100%;
        color: ${theme.colors.light};
    }
    #root {
        max-width: 1400px;
        margin: 0 auto;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`;
