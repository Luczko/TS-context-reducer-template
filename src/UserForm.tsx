import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  myform: {
    margin: "20px",
  },
});

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

interface UserFormProps {
  dispatch: React.Dispatch<AddUser>;
  users: Person[];
}

const UserForm: React.FC<UserFormProps> = ({ dispatch, users }) => {
  const classes = useStyles();
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFirstName = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFields({ ...fields, firstName: e.target.value });
    console.log(fields.firstName);
  };

  const handleLastName = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFields({ ...fields, lastName: e.target.value });
    console.log(fields.lastName);
  };

  const handleEmail = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFields({ ...fields, email: e.target.value });
    console.log(fields.email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newId = users[0] ? users[users.length - 1].id + 1 : 1;
    dispatch({
      type: "ADD_USER",
      payload: { ...fields, id: newId },
    });
    setFields({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <form
      noValidate
      className={classes.myform}
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <TextField
        id='first-name'
        label='first-name'
        variant='outlined'
        value={fields.firstName}
        onChange={handleFirstName}
      />
      <TextField
        id='last-name'
        label='last-name'
        variant='outlined'
        value={fields.lastName}
        onChange={handleLastName}
      />
      <TextField
        id='email'
        label='email'
        variant='outlined'
        value={fields.email}
        onChange={handleEmail}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        disabled={!fields.firstName || !fields.lastName || !fields.email}
      >
        Submit
      </Button>
    </form>
  );
};

export default UserForm;
