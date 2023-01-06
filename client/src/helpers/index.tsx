/* eslint-disable @typescript-eslint/no-unused-expressions */
import axios from "axios";
import { createContext, useContext } from "react";
import { fromFetch } from "rxjs/fetch";
import {
  switchMap,
  of,
  catchError,
  BehaviorSubject,
} from "rxjs";

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
}
type BoxProps = {
  children: React.ReactNode;
};
export const url = "http://127.0.0.1:5000/";

export const addUserFunction = async (datauser: User) => {
  await axios
    .post(url + "users", {
      firstName: datauser.firstName,
      email: datauser.email,
      lastName: datauser.lastName,
    })
    .then(function (response) {
      console.log("success");
    })
    .catch(function (error) {
      throw error;
    });
};

export const removeUserFunction = async (datauser: string) => {
  await axios
    .delete(url + `users?email=${datauser}`)
    .then(function (response) {
      console.log("success");
    })
    .catch(function (error) {
      throw error;
    });
};

const data$ = fromFetch(url + "users").pipe(
  switchMap((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return of({ error: true, message: `Error ${response.status}` });
    }
  }),
  catchError((err) => {
    console.error(err);
    return of({ error: true, message: err.message });
  })
);

const users$ = new BehaviorSubject([]);

data$.subscribe({
  next: (result) => console.log(result),
  complete: () => console.log("done"),
});

export const getUserList = async () => {
  await axios
    .get(url + "users")
    .then(function (response) {
      console.log("success");
      users$.next(response.data);
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
};

const users_context = createContext({
  data$,
  users$,
});

export const useUsers = () => useContext(users_context);

export const UserProvider = (props: BoxProps) => (
  <users_context.Provider
    value={{
      data$,
      users$,
    }}
  >
    {props.children}
  </users_context.Provider>
);
