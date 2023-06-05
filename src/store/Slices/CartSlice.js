import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.products.push({
        id: action.payload.id,
        product_name: action.payload.name,
        price: action.payload.price,
        qty: action.payload.qty,
      });
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
