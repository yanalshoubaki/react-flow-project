import { useReactFlow } from "@xyflow/react";

/**
 * Use this hook to delete an node or multiple from the flow
 */
const useDeleteNode = () => {
  const instance = useReactFlow();
  const deleteChildren = async (id: string) => {
    const children = instance.getHandleConnections({
      type: "source",
      nodeId: id,
      id: "b",
    });
    if (children.length != 0) {
      children.forEach((child) => {
        deleteNode(child.target, "no");
        deleteChildren(child.target);
      });
    }

    deleteNode(id, "no");
  };
  const deleteNode = async (id: string, type: "yes" | "no") => {
    // remove all connections
    if (type == "yes") {
      deleteChildren(id);
    } else {
      await instance.deleteElements({
        nodes: [
          {
            id: id,
          },
        ],
      });
    }
  };
  return deleteNode;
};
export default useDeleteNode;
