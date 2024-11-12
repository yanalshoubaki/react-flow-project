import { Node } from "@xyflow/react";
import useFlowStore from "../store/useFlowStore";

const useCreateNode = () => {
    const {
        nodes,
        setNodes,
    } = useFlowStore();
    const createChild = (name: string, gender: string) => {
        const lastNodes = nodes[nodes.length - 1];
        let newNode = {
            id: `${parseInt(nodes[nodes.length - 1].id) + 1}`,
            data: { label: name, gender },
            type: "childNode",
            position: {
                x: lastNodes.position.x + 100,
                y: lastNodes.position.y + 100,
            },
        } as Node;
        setNodes([...nodes, newNode]);
    };
    return createChild
}

export default useCreateNode