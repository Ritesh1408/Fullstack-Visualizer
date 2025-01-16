import React, { useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Background,
  Controls,
  Node,
  Edge,
  BackgroundVariant,
  Connection,
} from "react-flow-renderer";
// import { useUsers } from "../hooks/useUsers";

const VisualizationArea: React.FC = () => {
  // const { users } = useUsers();
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  // Handle dropping hobbies or users onto the canvas
  const onDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("hobby") || event.dataTransfer.getData("user");
    const position = { x: event.clientX - 300, y: event.clientY - 50 }; // Offset for canvas alignment

    if (data) {
      const newNode = {
        id: `${data}-${nodes.length}`, // Unique ID
        data: { label: data },
        position,
        style: {
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#fff",
        },
      };
      setNodes((prev) => [...prev, newNode]);
    }
  };

  const onConnect = (params: Edge | Connection) => setEdges((prev) => addEdge(params, prev));

  return (
    <ReactFlowProvider>
      <div
        className="visualization-area"
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{ height: "80vh", border: "1px solid #ccc", position: "relative" }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          fitView
          connectionLineStyle={{ stroke: "#888", strokeWidth: 2 }}
          nodeTypes={{}} // Default node types
          edgeTypes={{}} // Default edge types
        >
          <Controls />
          <Background
            variant={BackgroundVariant.Dots}
            gap={15}
            size={1}
            color="#e0e0e0"
          />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default VisualizationArea;
