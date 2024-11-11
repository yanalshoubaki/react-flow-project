import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

type AddNodeProps = {
  deleteNode: (name: string, deleteTree: "yes" | "no") => void;

  data: {
    label: string;
    gender: string;
  };
  id: string;
} & ReturnType<typeof useDisclosure>;

const DeleteNode = ({
  isOpen,
  onOpenChange,
  data,
  id,
  deleteNode,
}: AddNodeProps) => {
  const [deleteTree, setDeleteTree] = useState<"yes" | "no">("no");
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Delete Node : {data.label}
            </ModalHeader>
            <ModalBody>
              <RadioGroup
                label="Delete Tree"
                color="warning"
                onValueChange={(e) => setDeleteTree(e as "yes" | "no")}
              >
                <Radio
                  value="yes"
                  description="Delete all children of this node"
                >
                  Yes
                </Radio>
                <Radio
                  value="no"
                  description="Delete only this node and keep children"
                >
                  No
                </Radio>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  deleteNode(id, deleteTree);
                  onClose();
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DeleteNode;
