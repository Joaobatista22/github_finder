import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Button = styled.button`
    position: absolute;
    top: 1rem;
    left: 1rem;
    padding: 1rem 2rem;
    color: ${theme.colors.white};
    background-color: ${theme.colors.lightpurple};
    cursor: pointer;
    border: none;
    border-radius: 5px;
    opacity: 0.9;
`;
