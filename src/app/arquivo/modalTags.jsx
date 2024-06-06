import { Input, Modal, ModalBody } from 'reactstrap';

export default function ModalTags({ isOpen, close }) {
  return (
    <Modal
      // modalClassName="d-flex align-items-center justify-content-center"
      contentClassName="w-50 h-50"
      isOpen={isOpen}
      toggle={close}
    >
      <ModalBody>
        <Input onChange={() => console.debug('testre showdebola')} />
      </ModalBody>
    </Modal>
  );
}
