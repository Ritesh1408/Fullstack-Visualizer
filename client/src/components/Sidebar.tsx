import React from "react";
import { useUsers } from "../hooks/useUsers";

const hobbies = ["Dancing", "Gaming", "Reading", "Photography", "Cycling"];

const Sidebar: React.FC = () => {
  const { users } = useUsers();

  return (
    <aside className="sidebar" style={{ width: "250px", padding: "1rem", borderRight: "1px solid #ccc" }}>
      <h3 style={{ marginBottom: "1rem" }}>Drag Items</h3>
      <div>
        <strong>Users:</strong>
        {users.map((user) => (
          <div
            key={user.id}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("user", user.username)}
            style={{
              padding: "0.5rem",
              marginBottom: "0.5rem",
              background: "#f0f0f0",
              cursor: "grab",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            {user.username}
          </div>
        ))}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <strong>Hobbies:</strong>
        {hobbies.map((hobby) => (
          <div
            key={hobby}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("hobby", hobby)}
            style={{
              padding: "0.5rem",
              marginBottom: "0.5rem",
              background: "#f0f0f0",
              cursor: "grab",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            {hobby}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
