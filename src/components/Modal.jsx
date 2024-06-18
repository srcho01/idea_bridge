import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, handleClose, children }) => {
  if (!show) {
    return null;
  }

  // Convert `\n` to <br> tags
  const formattedChildren = children.split('\n').map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
    </React.Fragment>
  ));

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <div className={styles.modalContent}>{formattedChildren}</div>
      </div>
    </div>
  );
};

export default Modal;
