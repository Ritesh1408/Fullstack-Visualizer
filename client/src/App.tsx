import React from "react";
import UserManagement from "./components/useUsers";
import VisualisationArea from "./components/VisualisationArea";

const App: React.FC = () => {
  return (
    <div className="p-4">
      <UserManagement />
      <VisualisationArea />
    </div>
  );
};

export default App;