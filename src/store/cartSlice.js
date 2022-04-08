import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    removeProduct: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cart.splice(index, 1);
    },
    removeAllProduct: (state) => {
      state.cart.length = 0;
    },
  },
});

const { addProduct, removeProduct, removeAllProduct } = cartSlice.actions;

const cartValueSelector = (state) => {
  return state.cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

const cartCountSelector = (state) => {
  return state.cart.reduce((total, product) => total + product.quantity, 0);
};

export {
  addProduct,
  removeProduct,
  removeAllProduct,
  cartValueSelector,
  cartCountSelector,
};

export default cartSlice.reducer;
