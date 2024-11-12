import {
  Button,
  Input,
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
  createNode: (name: string, gender: string) => void;
} & ReturnType<typeof useDisclosure>;

const AddNode = ({ isOpen, onOpenChange, createNode }: AddNodeProps) => {
  const [data, setData] = useState<{
    name: string | null;
    gender: string | null;
  }>({
    name: null,
    gender: null,
  });
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      backdrop="blur"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Create Children
            </ModalHeader>
            <ModalBody>
              <Input
                variant="bordered"
                placeholder="Name of the children"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <div>
                <RadioGroup
                  label="Select child gender"
                  onValueChange={(e) =>
                    setData((prev) => ({ ...prev, gender: e }))
                  }
                >
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Femal</Radio>
                </RadioGroup>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  createNode(data.name!, data.gender!);
                  onClose();
                }}
              >
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AddNode;
