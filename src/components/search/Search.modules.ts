import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerSearch = styled.div`
    background-color: ${theme.colors.dark};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 1.5rem;
    border-radius: 1rem;
    >p {
        color: ${theme.colors.light} ;

    }
    `;
export const Warpper = styled.div`
    display: flex;
    gap: 0.5rem;
    >input, button {
        padding: 0.6rem;
        border-radius: 3px;
        border: none;
        color: ${theme.colors.black} ;
    }
    >button {
        background-color: ${theme.colors.black}; 
        color: ${theme.colors.green} ;
    }
`;
