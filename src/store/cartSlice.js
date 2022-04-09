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
      if (existingProduct && action.payload.quantity) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    addOneProduct: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      existingProduct.quantity++;
    },
    removeProduct: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cart.splice(index, 1);
    },
    removeOneProduct: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      existingProduct.quantity--;
    },
    removeAllProduct: (state) => {
      state.cart.length = 0;
    },
  },
});

const {
  addProduct,
  addOneProduct,
  removeProduct,
  removeOneProduct,
  removeAllProduct,
} = cartSlice.actions;

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
  addOneProduct,
  removeProduct,
  removeOneProduct,
  removeAllProduct,
  cartValueSelector,
  cartCountSelector,
};

export default cartSlice.reducer;
