import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL = "https://api.unsplash.com/";
export const apiUnsplash = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    headers:{
        Authorization: "Client-ID 9HT5ORNSt8DnlNB0NS1ZnBSzCCiMNdnjWi5Gn512Q7Y"
    }
  }),
  endpoints: () => ({}),
  reducerPath: "reqUnsplash",
});