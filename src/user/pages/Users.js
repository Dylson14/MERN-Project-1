import React from "react";

import UsersList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Jake",
      image:
        "https://static.wikia.nocookie.net/every-universe/images/b/b3/Jake.png/revision/latest?cb=20170417013215",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
