import React, { useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const CustomToast = ({ show, onClose, message, delay = 3000, position = 'top-center' }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [show, delay, onClose]);

  const containerClassName = 'p-3';

  return (
    <ToastContainer
      position={undefined}
      className={containerClassName}
      style={{ zIndex: 1050, position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)' }}
    >
      <Toast onClose={onClose} show={show} delay={delay} autohide>
        <Toast.Header>
          <strong className="me-auto text-blue-500">Notification</strong>
          <small>Just now</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default CustomToast;
