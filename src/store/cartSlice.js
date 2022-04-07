import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      const index = cart.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cart.splice(index, 1);
    },
  },
});

const { addProduct, removeProduct } = cartSlice.actions;

export { addProduct, removeProduct };

export default cartSlice.reducer;
