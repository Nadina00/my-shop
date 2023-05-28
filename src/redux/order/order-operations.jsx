import { createAsyncThunk } from "@reduxjs/toolkit";


const addOrder = createAsyncThunk("order/addOrder", async (data) => {
  try {
    return data;
  } catch (error) {
    console.error(error);
  }
});

const orderOperations = {
  addOrder,
};

export default orderOperations;
