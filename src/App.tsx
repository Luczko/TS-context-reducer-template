import React, { useReducer } from "react";

import AppContext from "./AppContext";
import User from "./User";
import MyButton from "./MyButton";
import UserForm from "./UserForm";
import UserList from "./UserList";

import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface Action<T> {
  type: T;
}

interface AddUser extends Action<"ADD_USER"> {
  payload: Person;
}

interface RemoveUser extends Action<"REMOVE_USER"> {
  payload: Person;
}

const initialState: Person[] = [
  {
    id: 1,
    firstName: "Luczko",
    lastName: "wlasiu",
    email: "luczko@luczko.com",
  },
  { id: 2, firstName: "Ewels", lastName: "sado", email: "ewels@ewels.com" },
  { id: 3, firstName: "Bobby", lastName: "sweet", email: "bobby@bobby.com" },
];

const reducer = (state: Person[], action: AddUser | RemoveUser) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "REMOVE_USER":
      return state.filter((e) => e !== action.payload);
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <AppContext>
        <User />
        <MyButton />
      </AppContext>
      <UserForm dispatch={dispatch} users={state} />
      {state.map((e) => (
        <div key={e.id}>
          <UserList
            id={e.id}
            firstName={e.firstName}
            lastName={e.lastName}
            email={e.email}
          />
          <Button
            startIcon={<DeleteIcon />}
            variant='contained'
            color='secondary'
            onClick={() => dispatch({ type: "REMOVE_USER", payload: e })}
          >
            Usuń
          </Button>
        </div>
      ))}
    </div>
  );
}

export default App;
