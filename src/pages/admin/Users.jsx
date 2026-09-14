import React from "react";

const users = [
  {
    id: 1,
    name: "Harsh",
    email: "harsh@gmail.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Mayur",
    email: "mayur@gmail.com",
    role: "User",
  },
  {
    id: 3,
    name: "Dhwij",
    email: "dhwij@gmail.com",
    role: "User",
  },
];

const Users = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h1 className="mb-6 text-3xl font-bold">Users Management</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
