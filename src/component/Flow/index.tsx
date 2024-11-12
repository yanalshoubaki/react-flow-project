import { ReactFlow, Background, ReactFlowProvider } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { AddNode, ChildNode } from "./_components";
import { Button, useDisclosure } from "@nextui-org/react";
import { useCreateNode, useFlow } from "../../hooks";
const nodeOrigin = [0.5, 0] as [number, number];
const Flow = () => {
  const disclosure = useDisclosure();
  const { edges, nodes, onNodesChange, onConnect, onNodesDelete } = useFlow();
  const createNode = useCreateNode();
  const nodeTypes = {
    childNode: ChildNode,
  };

  return (
    <div
      className="min-h-screen h-full w-full grow"
      style={{ height: "100vh", width: "100vw" }}
    >
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          onConnect={onConnect}
          onNodesChange={onNodesChange}
          fitViewOptions={{ padding: 2 }}
          nodeOrigin={nodeOrigin}
          onNodesDelete={onNodesDelete}
        >
          <Background />
          <Button
            variant="solid"
            color="default"
            className="relative z-50 m-32 bg-white px-10 text-lg font-medium leading-none py-4 h-auto"
            onClick={() => disclosure.onOpenChange()}
          >
            Add new Node
          </Button>
        </ReactFlow>
      </ReactFlowProvider>
      <AddNode {...disclosure} createNode={createNode} />
    </div>
  );
};

export default Flow;
