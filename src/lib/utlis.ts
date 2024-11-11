import { Edge } from "reactflow";

export const hasEdge = (edges: Edge[], parentId: string) => {
    return edges.find((edge) => edge.source == parentId);
};