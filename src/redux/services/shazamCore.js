/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "93b095b57amsh9224e21fa789023p1916c9jsne0d8a430ecad"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;

/*
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "93b095b57amsh9224e21fa789023p1916c9jsne0d8a430ecad",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
*/
