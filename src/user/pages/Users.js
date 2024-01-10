import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Jake",
      image:"https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
      places: 3,
    },
  ];  

  return (
    <div>
      <UsersList items={USERS} />;
    </div>
  );
};

export default Users;
