import { createSlice } from "@reduxjs/toolkit";
import productOperations from "./product-operations";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [productOperations.addProduct.fulfilled]: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    [productOperations.updateQuantityProduct.fulfilled]: (state, action) => {
      for (const product of state.products) {
        if (product.id === action.payload.id) {
          product.quantity = action.payload.quantity;
        }
      }
    },
    [productOperations.deleteProduct.fulfilled]: ( state,
      { payload }
    ) => {
      state.products = state.products.filter(({ _id }) => _id !== payload);
     
        },
        [productOperations.clearProduct.fulfilled]: (state, action) =>{
          state.products = []
        }
  },
});
export default productSlice.reducer;
