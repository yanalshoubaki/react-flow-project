import { create } from 'zustand';
import { initialNodes } from '../constant/nodes';
import { initialEdges } from '../constant/edges';
import { addEdge, applyEdgeChanges, applyNodeChanges, Node } from '@xyflow/react';
import { AppState } from '../types';
import { persist, createJSONStorage } from 'zustand/middleware'



const useFlowStore = create(
    persist<AppState>(
        (set, get) => ({
            nodes: initialNodes as Node[],
            edges: initialEdges,
            onNodesChange: (changes) => {
                set({
                    nodes: applyNodeChanges(changes, get().nodes),
                });
            },
            onEdgesChange: (changes) => {
                set({
                    edges: applyEdgeChanges(changes, get().edges),
                });
            },
            onConnect: (connection) => {
                set({
                    edges: addEdge(connection, get().edges),
                });
            },
            setNodes: (nodes) => {
                set({ nodes });
            },
            setEdges: (edges) => {
                set({ edges });
            },
        }),
        {
            name: 'flow-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        },
    ),
)
export default useFlowStore;