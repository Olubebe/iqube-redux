// store.js
import { configureStore } from "@reduxjs/toolkit";
import { covidApi } from "./api";
import covidSlice from "./reducer";

const reducer = {
  [covidApi.reducerPath]: covidApi.reducer,
  covid: covidSlice.reducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(covidApi.middleware),
});

export default store;
export { covidSlice };
