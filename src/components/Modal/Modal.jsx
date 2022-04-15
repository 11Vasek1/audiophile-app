import React from 'react';
import { useDispatch } from 'react-redux';
import useLockBodyScroll from '../../Hooks/useLockBodyScroll';
import { closeModal, useModalOpen } from '../../redux/modalSlice';

import clsx from 'clsx';
import './Modal.scss';

function Modal({ children }) {
  const dispatch = useDispatch();
  const isModalOpen = useModalOpen();
  useLockBodyScroll();

  return (
    <div
      className={clsx('modal', { modal__active: isModalOpen })}
      onClick={() => dispatch(closeModal())}
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
