import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerUsers = styled.div`
    background-color: ${theme.colors.dark};
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    >img{
        width: 190px;
        height: 190px;
        border: 4px solid ${theme.colors.green};
        border-radius: 50%;
    }
    >p {
        display: flex;
        gap: 0.35rem;
        align-items: center;
        svg {
            fill: ${theme.colors.green};
            font-size: 1.6rem;
        }
        span {
            color: ${theme.colors.light};
        }
    }
`;
export const ContainerStatus = styled.div`
    display: flex;
    > :first-child {
        border-right: 1px solid ${theme.colors.green};
    }
    > div {
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        gap: .4rem;
    }
`;
export const P = styled.p`
    background-color: ${theme.colors.green};
    padding: 0.3rem 0.4rem;
    border-radius: 3px;
`;
export const StyledLink = styled(Link)`
    text-align: center;
    background-color: ${theme.colors.lightpurple};
    padding: 1rem;
    border-radius: 5px;
    color: ${theme.colors.white};
    transition: opacity 0.3s;;
    &:hover {

        opacity: 0.6;
    }
`;
