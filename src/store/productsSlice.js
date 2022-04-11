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

export { addProducts };

export default productsSlice.reducer;
