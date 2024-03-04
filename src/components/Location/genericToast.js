import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const genericToast = (props) => {
  const { show, setShow, title, body, position } = props;

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-dark position-relative"
    >
      <ToastContainer
        className="p-3"
        position={position}
        style={{ zIndex: 1 }}
      >
        <Toast className="d-inline-block m-1" onClose={() => setShow(false)} show={show} delay={3000} autohide bg='success'>
          {/* <Toast.Header>
            <strong className="me-auto">{title}</strong>
          </Toast.Header> */}
          <Toast.Body>{body}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default genericToast;