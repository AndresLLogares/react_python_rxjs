import { useEffect, useState } from "react";
import {
  ButtonSubmit,
  ContainerMain,
  ContainerSubTitle,
  ContainerTitle,
  FormUser,
  InputUser,
  LabelUser,
  SubTitleMain,
  TitleMain,
} from "../../styles/inputsStyled";
import { Layout } from "../layout";
import { Navbar } from "../navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUserFunction, getUserList } from "../../helpers";
import { ToDelete } from "../todelete";

const MainPage = (props: any) => {
  const [datauser, setDatauser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    getUserList();
  }, [update]);

  const notify_error = () => toast.error("E-Mail already exists");
  const notify_success = () =>
    toast.success("User has been successfully registered");

  const inpuntHandler = (event: any) => {
    setDatauser({
      ...datauser,
      [event.target.name]: event.target.value.toLowerCase(),
    });
  };

  const submitHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      await addUserFunction(datauser);
      notify_success();
      setDatauser({
        firstName: "",
        lastName: "",
        email: "",
      });
      setUpdate(!update);
    } catch (err) {
      setDatauser({
        firstName: "",
        lastName: "",
        email: "",
      });
      notify_error();
    }
  };

  return (
    <Layout>
      <Navbar changeElement={props.changeElement} />
      <ContainerMain>
        <ContainerTitle>
          <TitleMain>Here you can add or delete users</TitleMain>
        </ContainerTitle>
        <ContainerSubTitle>
          <SubTitleMain>Add User</SubTitleMain>
        </ContainerSubTitle>
        <FormUser onSubmit={submitHandler}>
          <LabelUser>FirstName</LabelUser>
          <InputUser
            type="text"
            value={datauser.firstName}
            onChange={inpuntHandler}
            name="firstName"
            placeholder="John"
            maxLength={15}
            required={true}
          />
          <LabelUser>LastName</LabelUser>
          <InputUser
            type="text"
            value={datauser.lastName}
            onChange={inpuntHandler}
            name="lastName"
            placeholder="Doe"
            maxLength={15}
            required={true}
          />
          <LabelUser>E-Mail</LabelUser>
          <InputUser
            type="email"
            value={datauser.email}
            onChange={inpuntHandler}
            name="email"
            placeholder="Johndoe@mail.com"
            maxLength={25}
            required={true}
          />
          <ButtonSubmit type="submit">Add</ButtonSubmit>
        </FormUser>
        <ContainerSubTitle>
          <SubTitleMain>Delete User</SubTitleMain>
        </ContainerSubTitle>
        <ToDelete />
      </ContainerMain>
    </Layout>
  );
};

export default MainPage;
