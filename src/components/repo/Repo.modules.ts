import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerRapo = styled.div`
 background-color: #0e1129;
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid ${theme.colors.lightpurple};
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  flex: 1 0 50%;
  >h3 {
    color: ${theme.colors.white};
  }
`;

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border-radius: 3px;
  border: 1px solid ${theme.colors.lightpurple};
  padding-right: 0.4rem;
>div {
    padding: 2px;
    display: flex;
    gap: 3px;
}


`;

export const A = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: ${theme.colors.white};
  background-color: ${theme.colors.lightpurple};
  border-radius: 5px;
  gap: 0.5rem;
`;
