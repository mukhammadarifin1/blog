import { apiUnsplash } from "./inteceptor";
export const reqUnsplash = apiUnsplash.injectEndpoints({
  endpoints: (builder) => ({
    getPhotoRandom: builder.query({
      query: () => ({
        url: "photos/random?client_id=9HT5ORNSt8DnlNB0NS1ZnBSzCCiMNdnjWi5Gn512Q7Y",
      }),
    }),
    getFromUser: builder.query({
      query: () => ({
        url: "photos/random?client_id=9HT5ORNSt8DnlNB0NS1ZnBSzCCiMNdnjWi5Gn512Q7Y&orientation=squarish",
      }),
    }),
  }),
});

export const { useGetPhotoRandomQuery, useGetFromUserQuery } = reqUnsplash;
