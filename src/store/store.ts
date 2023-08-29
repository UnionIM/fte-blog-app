import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { postApi } from "../service/PostService";
import { authApi } from "../service/AuthService";

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postApi.middleware, authApi.middleware),
  });
