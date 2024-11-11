import { Edge, OnNodesChange, OnEdgesChange, OnConnect, Node } from "reactflow";

export type AppState = {
    nodes: Node[];
    edges: Edge[];
    setNodes: (nodes: Node[]) => void;
    setEdges: (edges: Edge[]) => void;
};