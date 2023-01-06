import styled from "styled-components";
import { Colors } from "../colors";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin-top: 70px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const TitleMain = styled.h1`
  font-family: "Nova Mono", monospace;
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  color: ${Colors.black};
`;

export const ContainerSubTitle = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  width: 90%;
  height: fit-content;
  margin-bottom: 30px;
`;

export const SubTitleMain = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: ${Colors.black};
`;

export const FormUser = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  width: 90%;
  height: fit-content;
`;

export const LabelUser = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: ${Colors.black};
  margin-bottom: 10px;
  width: 250px;
  height: fit-content;
`;

export const InputUser = styled.input`
  border: none;
  border-bottom: 2px solid ${Colors.black};
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 10px;
  width: 250px;
  height: fit-content;
`;

export const ButtonSubmit = styled.button`
  font-family: "Poppins", sans-serif;
  border-radius: 5px;
  width: 150px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: solid 3px ${Colors.green};
  background-color: ${Colors.white};
  color: ${Colors.black};
  font-size: 25px;
  transition-duration: 1s;
  &:hover {
    transform: translate(5px, 5px);
    cursor: pointer;
  }
`