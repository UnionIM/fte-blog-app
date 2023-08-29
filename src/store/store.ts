import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { postApi } from "../service/PostService";

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postApi.middleware),
  });
