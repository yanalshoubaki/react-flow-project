import {
  ReactFlow,
  Background,
  ReactFlowProvider,
  OnConnectStartParams,
} from "reactflow";
import "reactflow/dist/style.css";
import { AddNode, ChildNode } from "./_components";
import { useDisclosure } from "@nextui-org/react";
import useFlow from "../../hooks/use-flow";

const Flow = () => {
  const disclosure = useDisclosure();
  const { createChild, edges, nodes, setParent, deleteNode } = useFlow();
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
          onConnectStart={(
            event: React.MouseEvent | React.TouchEvent,
            params: OnConnectStartParams
          ) => {
            setParent(params.nodeId);
            disclosure.onOpen();
          }}
          fitView
          fitViewOptions={{
            padding: 4,
          }}
        >
          <Background />
        </ReactFlow>
      </ReactFlowProvider>
      <AddNode {...disclosure} createChild={createChild} />
    </div>
  );
};

export default Flow;
