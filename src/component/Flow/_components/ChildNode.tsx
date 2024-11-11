import { Button, useDisclosure } from "@nextui-org/react";
import clsx from "clsx";
import { Handle, NodeProps, Position } from "reactflow";
import DeleteNode from "./DeleteNode";
import useFlow from "../../../hooks/use-flow";

const ChildNode = ({
  id,
  data,
  isConnectable,
}: NodeProps<{
  label: string;
  deleteNode: (nodeId: string, deleteTree: "yes" | "no") => void;
  gender: "male" | "female";
}>) => {
  const disclosure = useDisclosure();
  const { deleteNode } = useFlow();
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div
        className={clsx(
          "py-2 px-6 gap-x-4  flex flex-row items-center  rounded-md relative",
          {
            "bg-[#d2d9e9]": data.gender == "male",
            "bg-[#ffe7e7]": data.gender == "female",
          }
        )}
      >
        <div className="flex flex-col gap-y-1">
          <span className="font-normal text-lg">{data.label}</span>
          <i className="text-sm">{data.gender}</i>
        </div>
        <Button
          color="danger"
          isIconOnly
          size="sm"
          onClick={disclosure.onOpenChange}
        >
          <svg
            width="107"
            height="107"
            viewBox="0 0 107 107"
            fill="none"
            className="w-4 h-4 [&>path]:fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.5833 80.25C45.7658 80.25 46.8998 79.7803 47.7359 78.9442C48.572 78.1081 49.0417 76.9741 49.0417 75.7917V49.0417C49.0417 47.8593 48.572 46.7253 47.7359 45.8892C46.8998 45.0531 45.7658 44.5834 44.5833 44.5834C43.4009 44.5834 42.2669 45.0531 41.4308 45.8892C40.5947 46.7253 40.125 47.8593 40.125 49.0417V75.7917C40.125 76.9741 40.5947 78.1081 41.4308 78.9442C42.2669 79.7803 43.4009 80.25 44.5833 80.25ZM89.1667 26.75H71.3333V22.2917C71.3333 18.7444 69.9242 15.3424 67.4159 12.8341C64.9076 10.3258 61.5056 8.91669 57.9583 8.91669H49.0417C45.4944 8.91669 42.0924 10.3258 39.5841 12.8341C37.0758 15.3424 35.6667 18.7444 35.6667 22.2917V26.75H17.8333C16.6509 26.75 15.5169 27.2197 14.6808 28.0558C13.8447 28.8919 13.375 30.0259 13.375 31.2084C13.375 32.3908 13.8447 33.5248 14.6808 34.3609C15.5169 35.197 16.6509 35.6667 17.8333 35.6667H22.2917V84.7084C22.2917 88.2556 23.7008 91.6576 26.2091 94.1659C28.7174 96.6742 32.1194 98.0834 35.6667 98.0834H71.3333C74.8806 98.0834 78.2826 96.6742 80.7909 94.1659C83.2992 91.6576 84.7083 88.2556 84.7083 84.7084V35.6667H89.1667C90.3491 35.6667 91.4831 35.197 92.3192 34.3609C93.1553 33.5248 93.625 32.3908 93.625 31.2084C93.625 30.0259 93.1553 28.8919 92.3192 28.0558C91.4831 27.2197 90.3491 26.75 89.1667 26.75ZM44.5833 22.2917C44.5833 21.1093 45.0531 19.9753 45.8892 19.1392C46.7253 18.3031 47.8592 17.8334 49.0417 17.8334H57.9583C59.1408 17.8334 60.2748 18.3031 61.1109 19.1392C61.947 19.9753 62.4167 21.1093 62.4167 22.2917V26.75H44.5833V22.2917ZM75.7917 84.7084C75.7917 85.8908 75.322 87.0248 74.4859 87.8609C73.6498 88.697 72.5158 89.1667 71.3333 89.1667H35.6667C34.4842 89.1667 33.3503 88.697 32.5142 87.8609C31.6781 87.0248 31.2083 85.8908 31.2083 84.7084V35.6667H75.7917V84.7084ZM62.4167 80.25C63.5991 80.25 64.7331 79.7803 65.5692 78.9442C66.4053 78.1081 66.875 76.9741 66.875 75.7917V49.0417C66.875 47.8593 66.4053 46.7253 65.5692 45.8892C64.7331 45.0531 63.5991 44.5834 62.4167 44.5834C61.2342 44.5834 60.1003 45.0531 59.2642 45.8892C58.4281 46.7253 57.9583 47.8593 57.9583 49.0417V75.7917C57.9583 76.9741 58.4281 78.1081 59.2642 78.9442C60.1003 79.7803 61.2342 80.25 62.4167 80.25Z"
              fill="#26292B"
            />
          </svg>
        </Button>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
      <DeleteNode {...disclosure} data={data} deleteNode={deleteNode} id={id} />
    </>
  );
};

export default ChildNode;
