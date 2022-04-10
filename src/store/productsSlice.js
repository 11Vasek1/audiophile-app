import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {},
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const array = action.payload;

      const obj = {
        arr: array,
        slug: {},
      };

      array.forEach((product) => {
        const slug = product.slug;
        obj.slug[slug] = product;
      });

      state.products = obj;
    },
  },
});

const { addProducts } = productsSlice.actions;

// const cartValueSelector = (state) => {
//   return state.cart.reduce(
//     (total, product) => total + product.price * product.quantity,
//     0
//   );
// };

// const cartCountSelector = (state) => {
//   return state.cart.reduce((total, product) => total + product.quantity, 0);
// };

export {
  addProducts,
  // cartValueSelector,
  // cartCountSelector,
};

export default productsSlice.reducer;
