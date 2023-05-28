import { createSlice } from "@reduxjs/toolkit";
import orderOperations from "./order-operations";


const initialState = {
  user: { userName: null, email: null , phone: null, address: null},
  products: []
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: {
    [orderOperations.addOrder.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.user = action.payload.user;
      state.products =  action.payload.products;
      },
    
  },
});
export default orderSlice.reducer;
