import { Colors } from "../../styles/colors";
import {
  Buttons,
  Container,
  ContainerButton,
  ContainerLogo,
  Toolbar,
} from "../../styles/navbarStyled";
import { Python } from "styled-icons/boxicons-logos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Navbar = (props: any) => {
  const handleButton = (component: boolean) => {
    props.changeElement(component);
  };
  return (
    <Container>
      <ToastContainer />
      <Toolbar>
        <ContainerLogo>
          <Python size={60} color={Colors.white} />
          <ContainerButton>
            <Buttons onClick={() => handleButton(true)}>Users</Buttons>
            <Buttons onClick={() => handleButton(false)}>List</Buttons>
          </ContainerButton>
        </ContainerLogo>
      </Toolbar>
    </Container>
  );
};
