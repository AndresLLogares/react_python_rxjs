import styled from "styled-components";
import { Colors } from "../colors";

export const Container = styled.div`
  display: flex;
  background-color: ${Colors.pink};
  height: 10vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-size: contain;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: one;
  border-bottom: 3px solid ${Colors.black};
`;

export const Toolbar = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: flex-start;
`;

export const ContainerButton = styled.div`
display: flex;
width: 80%;
align-items: center;
justify-content: flex-end;
`

export const Buttons = styled.button`
  border: transparent;
  display: flex;
  width: 100px;
  height: fit-content;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Nova Mono', monospace;
  font-size: 25px;
  color: ${Colors.white};
  font-weight: bold;
  text-decoration: none;
  transition-duration: 1s;
  &:hover {
    transform: translate(5px, 5px);
    cursor: pointer;
  }
`