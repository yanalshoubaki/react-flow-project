import { useState } from "react";
import {
  getConnectedEdges,
  getOutgoers,
  Node,
  useReactFlow,
} from "reactflow";
import { hasEdge } from "../lib/utlis";
import useFlowStore from "../store/useFlowStore";
const useFlow = () => {
  const { nodes, edges, setNodes, setEdges } = useFlowStore();
  const instance = useReactFlow();
  const [parent, setParent] = useState<string | null>(null);
  const deleteNode = (nodeId: string, deleteTree: "yes" | "no") => {
    if (deleteTree === "yes") {
      // delete all children
      const node = nodes.find((node) => node.id === nodeId);
      instance.deleteElements({
        nodes: getOutgoers(node as Node, nodes, edges),
        edges: getConnectedEdges(nodes, edges),
      });

      console.log({
        nodes: getOutgoers(node as Node, nodes, edges),
        edges: getConnectedEdges(nodes, edges),
      }, "tes2t");
    } else {
      const newNodes = nodes.filter((node) => node.id !== nodeId);
      const newEdges = edges.filter((edge) => edge.source !== nodeId);
      setNodes(newNodes);
      setEdges(newEdges);
    }
  };
  const createChild = (name: string, gender: string) => {
    const lastNodes = nodes[nodes.length - 1];
    let newNode = {
      id: `${parseInt(nodes[nodes.length - 1].id) + 1}`,
      data: { label: name, gender, deleteNode: deleteNode },
      type: "childNode",
      position: {
        x: lastNodes.position.x + 100,
        y: lastNodes.position.y + 100,
      },
    } as Node;
    if (hasEdge(edges, parent as string)) {
      // if has edge get last siblings
      const lastSiblings = edges.filter((edge) => edge.source === parent).pop();
      if (lastSiblings) {
        const node = nodes.find((node) => node.id === lastSiblings.target);
        if (node) {
          newNode.position = {
            x: node.position.x - 250,
            y: node.position.y,
          };
        }
      }
    }
    setNodes([...nodes, newNode]);
    setEdges([
      ...edges,
      {
        id: `${parent}-${newNode.id}`,
        source: parent as string,
        target: newNode.id,
      },
    ]);
  };

  return {
    nodes,
    edges,
    createChild,
    setParent,
    deleteNode: deleteNode,
  };
};
export default useFlow;
