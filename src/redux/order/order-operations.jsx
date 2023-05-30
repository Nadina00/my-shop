import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://my-shops-noda.onrender.com";


const addOrder = createAsyncThunk("order/add", async (credential) => {
  try {
    const { data } = await axios.post("/order/add", credential);
    return data;
  } catch (error) {
    console.error(error);
  }
});

const orderOperations = {
  addOrder,
};

export default orderOperations;
