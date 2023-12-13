import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const covidApi = createApi({
  reducerPath: "covidApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://covid-api.com/api/",
  }),
  endpoints: (builder) => ({
    fetchCovidData: builder.query({
      query: () => "/reports",
    }),
  }),
});

export const { useFetchCovidDataQuery } = covidApi;
