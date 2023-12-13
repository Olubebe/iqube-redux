import { createSlice } from "@reduxjs/toolkit";

const covidSlice = createSlice({
  name: "covid",
  initialState: {
    covidData: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setCovidData(state, action) {
      state.covidData = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setCovidLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    setCovidError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setCovidData, setCovidLoading, setCovidError } =
  covidSlice.actions;

export default covidSlice;
