import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from "./product/product-slice";
import shopReducer from "./shop/shop-slice"
import orderReducer from "./order/order-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const productPersistConfig = {
  key: "product",
  storage,
  whitelist: ["products"],
};

export const store = configureStore({
  reducer: {
    product: persistReducer(productPersistConfig, productReducer),
    shop: shopReducer,
    order: orderReducer
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);