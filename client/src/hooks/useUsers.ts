import { useState, useEffect } from "react";
import axios from "axios";

export type User = {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
};

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:5000/api/users");
      setUsers(data);
      setError(null);
    } catch{
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (user: Omit<User, "id">) => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/users", user);
      setUsers((prev) => [...prev, data]);
    } catch{
      setError("Failed to add user");
    }
  };

  const updateUser = async (id: string, updatedUser: Partial<User>) => {
    try {
      const { data } = await axios.put(`http://localhost:5000/api/users/${id}`, updatedUser);
      setUsers((prev) =>
        prev.map((user) => (user.id === id ? { ...user, ...data } : user))
      );
    } catch  {
      setError("Failed to update user");
    }
  };

  const deleteUser = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch{
      setError("Failed to delete user");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, error, addUser, updateUser, deleteUser };
};
