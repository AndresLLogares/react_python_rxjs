import styled from "styled-components";
import { Colors } from "../colors";

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  width: 40%;
  height: fit-content;
  margin-bottom: 50px;
`;

export const ContainerEachUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: left;
  justify-content: left;
  margin-bottom: 20px;
  height: fit-content;
  border-bottom: 3px solid ${Colors.green};
`;

export const ContainerUser = styled.p`
  display: flex;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 10px;
  color: ${Colors.black};
  font-family: "Poppins", sans-serif;
`;

export const ContainerListDelete = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: fit-content;
`

export const ContainerUserDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 75px;
  border: solid 3px ${Colors.green};
  background-color: transparent;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: bold;
  margin-left: 30px;
  margin-bottom: 30px;
  color: ${Colors.black};
  transition-duration: 1s;
  &:hover {
    transform: translate(5px, 5px);
    cursor: pointer;
  }
  `