import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlicer";
import { setupStore } from "../store";
import { postApi } from "../../service/PostService";
import { authApi } from "../../service/AuthService";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  [postApi.reducerPath]: postApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
