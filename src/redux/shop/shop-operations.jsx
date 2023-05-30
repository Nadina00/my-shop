import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://my-shops-noda.onrender.com";

const getShop = createAsyncThunk("shop/getShop", async () => {
  try {
    const { data } = await axios.get("/");
    return data.shops;
  } catch (error) {
    console.error(error);
  }
});

const getShopProducts = createAsyncThunk("shop/getShopProducts", async (id) => {
  try {
    const { data } = await axios.get(`${id}`);
    return data.products;
  } catch (error) {
    console.error(error);
  }
});
const getFilterShop = createAsyncThunk("shop/getFilterShop", async (data) => {
  try {
    return data;
  } catch (error) {
    console.error(error);
  }
});


const shopOperations = {
  getShop,
  getShopProducts,
  getFilterShop  
  
  };
  
  export default shopOperations;