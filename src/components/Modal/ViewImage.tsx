import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="contain"
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent bgColor="pGray.900" maxWidth="min" maxHeight="min">
        <ModalBody p={0}>
          <Image src={imgUrl} alt="image" maxWidth="900px" maxHeight="600px" />
        </ModalBody>
        <ModalFooter justifyContent="left">
          <Link href={imgUrl} isExternal outline={0}>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
