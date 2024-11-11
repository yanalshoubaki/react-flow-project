import { create } from 'zustand';
import { initialNodes } from '../constant/nodes';
import { initialEdges } from '../constant/edges';
import { Node } from 'reactflow';
import { AppState } from '../types';
import { persist, createJSONStorage } from 'zustand/middleware'



const useFlowStore = create(
    persist<AppState>(
        (set) => ({
            nodes: initialNodes as Node[],
            edges: initialEdges,
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