import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WrapperModal from './StyledModal';

const Modal = ({ largeImageUrl, largeImageAlt, onCloseModal }) => {
  const onEscDown = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscDown);
    return () => {
      window.removeEventListener('keydown', onEscDown);
    };
  });

  return (
    <WrapperModal className="Overlay" onClick={onBackdropClick}>
      <div className="Modal">
        <img src={largeImageUrl} alt={largeImageAlt} />
      </div>
    </WrapperModal>
  );
};

Modal.propTypes = {
  largeImageUrl: PropTypes.string.isRequired,
  largeImageAlt: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
