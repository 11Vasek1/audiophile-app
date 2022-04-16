import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'http://localhost:3002/items';

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Could not load products');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const status = {
  loading: 'loading',
  resolved: 'resolved',
  rejected: 'rejected',
};

const initialState = {
  products: [],
  status: null,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [loadProducts.pending]: (state) => {
      state.status = status.loading;
      state.error = null;
    },
    [loadProducts.fulfilled]: (state, action) => {
      state.status = status.resolved;
      state.products = action.payload;
    },
    [loadProducts.rejected]: (state, action) => {
      state.status = status.rejected;
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
