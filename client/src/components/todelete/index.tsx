import { useObservableState } from "observable-hooks";
import { useUsers, removeUserFunction, User, getUserList } from "../../helpers";
import { toast } from "react-toastify";
import {
  ContainerListDelete,
  ContainerUserDelete,
} from "../../styles/listStyled";
import { useEffect, useState } from "react";

export const ToDelete = () => {
  const { users$ } = useUsers();
  const list_users = useObservableState(users$, []);

  const notify_error = () => toast.error("Something went wrong");
  const notify_success = () =>
    toast.success("User has been successfully deleted");
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    getUserList();
  }, [update]);
  const handleDelete = async (email: string) => {
    try {
      await removeUserFunction(email);
      setUpdate(!update);
      notify_success();
    } catch (err) {
      notify_error();
      console.log(err);
    }
  };
  return (
    <ContainerListDelete>
      {list_users.map((user: User, index: number) => (
        <ContainerUserDelete
          key={index}
          onClick={() => {
            handleDelete(user.email);
          }}
        >
          {user.email}
        </ContainerUserDelete>
      ))}
    </ContainerListDelete>
  );
};
