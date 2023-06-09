import { createSlice } from "@reduxjs/toolkit";
import shopOperations from "./shop-operations";

const initialState = {
  shops: [],
  isLoading: false,
  products: [],
  filter: []
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  extraReducers: {
    [shopOperations.getShop.pending]: (state, action) => {
      state.isLoading = true
    },
    [shopOperations.getShop.fulfilled]: (state, action) => {
      state.shops = action.payload;
      state.isLoading = false
    },
    [shopOperations.getShopProducts.pending]: (state, action) => {
      state.isLoading = true
    },
    [shopOperations.getShopProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false
    },
    [shopOperations.getFilterShop.pending]: (state, action) => {
      state.isLoading = true
    },
    [shopOperations.getFilterShop.fulfilled]: (state, action) => {
      state.filter = action.payload
      state.isLoading = false
    }
     },
});
export default shopSlice.reducer;
