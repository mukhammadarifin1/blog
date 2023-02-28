import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { reqUnsplash } from "./apis/unsplash";
export const store = configureStore({
  reducer: {
    [reqUnsplash.reducerPath]: reqUnsplash.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      reqUnsplash.middleware
    ]);
  },
});
setupListeners(store.dispatch);