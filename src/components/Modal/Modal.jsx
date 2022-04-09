import React from 'react';
import clsx from 'clsx';
import './Modal.scss';

function Modal({ isModalOpen, setModalOpen, children }) {
  return (
    <div
      className={clsx('modal', { modal__active: isModalOpen })}
      onClick={() => setModalOpen(false)}
    >
      <div className={clsx('modal__container')}>
        <div
          className={clsx('modal__content', {
            modal__content_active: isModalOpen,
          })}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
