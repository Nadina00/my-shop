import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://my-shops-noda.onrender.com";

const getShop = createAsyncThunk("shop/getShop", async () => {
  try {
    const { data } = await axios.get("/");
    console.log(data.shops)
    return data.shops;
  } catch (error) {
    console.error(error);
  }
});

const getShopProducts = createAsyncThunk("shop/getShopProducts", async (id) => {
  try {
    const { data } = await axios.get(`${id}`);
    console.log(data.products)
    return data.products;
  } catch (error) {
    console.error(error);
  }
});


const shopOperations = {
  getShop,
  getShopProducts  
  
  };
  
  export default shopOperations;