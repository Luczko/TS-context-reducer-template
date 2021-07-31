import React from "react";

interface UserListProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const UserList: React.FC<UserListProps> = ({
  id,
  firstName,
  lastName,
  email,
}) => {
  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserList;
