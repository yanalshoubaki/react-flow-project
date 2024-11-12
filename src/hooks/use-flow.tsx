import {
  getConnectedEdges,
  getIncomers,
  getOutgoers,
  Node,
} from "@xyflow/react";
import useFlowStore from "../store/useFlowStore";
import { useCallback } from "react";
const useFlow = () => {
  const { nodes, edges, onNodesChange, setEdges, onConnect, onEdgesChange } =
    useFlowStore();

  const onNodesDelete = useCallback(
    (deleted: Node[]) => {
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, nodes, edges);
          const outgoers = getOutgoers(node, nodes, edges);
          const connectedEdges = getConnectedEdges([node], edges);

          const remainingEdges = acc.filter(
            (edge) => !connectedEdges.includes(edge)
          );

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({
              id: `${source}->${target}`,
              source,
              target,
            }))
          );

          return [...remainingEdges, ...createdEdges];
        }, edges)
      );
    },
    [nodes, edges]
  );
  return {
    nodes,
    edges,
    onNodesChange,
    onNodesDelete,
    onConnect,
    onEdgesChange,
  };
};
export default useFlow;
