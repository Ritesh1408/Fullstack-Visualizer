import React, { useState } from "react";
import { useUsers } from "../hooks/useUsers";

const UserManagement: React.FC = () => {
  const { users, addUser, deleteUser } = useUsers();
  const [formData, setFormData] = useState({ username: "", age: 0, hobbies: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hobbiesArray = formData.hobbies.split(",").map((hobby) => hobby.trim());
    addUser({ username: formData.username, age: Number(formData.age), hobbies: hobbiesArray });
    setFormData({ username: "", age: 0, hobbies: "" });
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
          required
        />
        <input
          type="text"
          placeholder="Hobbies (comma-separated)"
          value={formData.hobbies}
          onChange={(e) => setFormData({ ...formData, hobbies: e.target.value })}
        />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong> (Age: {user.age}) <br />
            Hobbies: {user.hobbies.join(", ")} <br />
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
