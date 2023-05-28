import { createAsyncThunk } from "@reduxjs/toolkit";


const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data) => {
    try {
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
const updateQuantityProduct = createAsyncThunk(
    "product/updateQuantityProduct",
    async ({id, quantity}) => {
      try {
        return {id, quantity};
      } catch (error) {
        console.error(error);
      }
    }
  );
  const deleteProduct = createAsyncThunk(
    "product/deleteProduct",
    async (data) => {
      try {
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  );
  

const productOperations = {
    addProduct,
    updateQuantityProduct,
    deleteProduct
  
  };
  
  export default productOperations;