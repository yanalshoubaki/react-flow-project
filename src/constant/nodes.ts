import { Node } from "reactflow";

export const initialNodes: Node[] = [
    {
        "id": "1",
        "position": {
            "x": 0,
            "y": 0
        },
        "data": {
            "label": "Parent"
        }
    },
    {
        "id": "2",
        "data": {
            "label": "test",
            "gender": "male"
        },
        "type": "childNode",
        "position": {
            "x": 100,
            "y": 100
        }
    },
    {
        "id": "3",
        "data": {
            "label": "test",
            "gender": "female"
        },
        "type": "childNode",
        "position": {
            "x": -150,
            "y": 100
        }
    },
    {
        "id": "4",
        "data": {
            "label": "test3",
            "gender": "male"
        },
        "type": "childNode",
        "position": {
            "x": -50,
            "y": 200
        }
    },
    {
        "id": "5",
        "data": {
            "label": "test4",
            "gender": "male"
        },
        "type": "childNode",
        "position": {
            "x": 50,
            "y": 300
        }
    }
];