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
  createChild: (name: string, gender: string) => void;
} & ReturnType<typeof useDisclosure>;

const AddNode = ({ isOpen, onOpenChange, createChild }: AddNodeProps) => {
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
                  setData({
                    ...data,
                    name: e.target.value,
                  })
                }
              />
              <div>
                <RadioGroup
                  label="Select child gender"
                  onValueChange={(e) =>
                    setData({
                      ...data,
                      gender: e,
                    })
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
                disabled={data.name == null || data.gender == null}
                onPress={() => {
                  createChild(data.name as string, data.gender as string);
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