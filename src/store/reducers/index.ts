import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlicer";
import { setupStore } from "../store";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
