import { User, getUserList, useUsers } from "../../helpers";
import { useObservableState } from "observable-hooks";
import {
  ContainerEachUser,
  ContainerList,
  ContainerUser,
} from "../../styles/listStyled";
import { Navbar } from "../navbar";
import { Layout } from "../layout";
import {
  ContainerMain,
  ContainerTitle,
  TitleMain,
} from "../../styles/inputsStyled";
import { useEffect } from "react";
const ListUser = (props: any) => {
  const { data$ } = useUsers();

  const list_users = useObservableState(data$, []);

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Layout>
      <Navbar changeElement={props.changeElement} />
      <ContainerMain>
        <ContainerTitle>
          <TitleMain>List of users</TitleMain>
        </ContainerTitle>
        <ContainerList>
          {list_users.map((user: User, index: number) => (
            <ContainerEachUser key={index}>
              <ContainerUser>First name: {user.firstName}</ContainerUser>
              <ContainerUser>Last name: {user.lastName}</ContainerUser>
              <ContainerUser>E-mail:{user.email}</ContainerUser>
            </ContainerEachUser>
          ))}
        </ContainerList>
      </ContainerMain>
    </Layout>
  );
};

export default ListUser;
