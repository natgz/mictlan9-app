import { DetailedHTMLProps, HTMLAttributes, RefObject, ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';

const GenericModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton closeVariant={`${props.closevariant}`} style={{border:'none'}}>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {props.children}
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default GenericModal;