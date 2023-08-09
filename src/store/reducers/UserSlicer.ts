import { TUser } from "../../models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  user: Partial<TUser>;
}

const initialState: IUserState = { user: {} };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});
