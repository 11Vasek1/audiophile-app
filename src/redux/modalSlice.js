import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
  isCartModalOpen: false,
  isThanksModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openCartModal: (state) => {
      state.isCartModalOpen = true;
    },
    closeCartModal: (state) => {
      state.isCartModalOpen = false;
    },
    openThanksModal: (state) => {
      state.isThanksModalOpen = true;
    },
    closeThanksModal: (state) => {
      state.isThanksModalOpen = false;
    },
  },
});

export const {
  openCartModal,
  closeCartModal,
  openThanksModal,
  closeThanksModal,
} = modalSlice.actions;

export const useCartModalOpen = () =>
  useSelector((state) => state.modal.isCartModalOpen);

export const useThanksModalOpen = () =>
  useSelector((state) => state.modal.isThanksModalOpen);

export default modalSlice.reducer;
