import React from 'react';
import { useDispatch } from 'react-redux';
import {
  closeCartModal,
  closeThanksModal,
  useCartModalOpen,
  useThanksModalOpen,
} from '../../redux/modalSlice';
import useLockBodyScroll from '../../Hooks/useLockBodyScroll';

import clsx from 'clsx';
import './Modal.scss';

function Modal({ children, className }) {
  const dispatch = useDispatch();
  const isCartModalOpen = useCartModalOpen();
  const isThanksModalOpen = useThanksModalOpen();

  useLockBodyScroll();

  function handleCloseModalClick() {
    dispatch(closeCartModal());
    dispatch(closeThanksModal());
  }

  return (
    <div
      className={clsx('modal', {
        modal__active: isCartModalOpen || isThanksModalOpen,
      })}
      onClick={handleCloseModalClick}
    >
      <div className={clsx('modal__container', className)}>
        <div
          className={clsx('modal__content', {
            modal__content_active: isCartModalOpen || isThanksModalOpen,
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
