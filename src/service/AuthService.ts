import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUser } from "../models/TUser";
import { userSlice } from "../store/reducers/UserSlicer";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/auth`,
  }),
  endpoints: (build) => ({
    login: build.mutation<
      { user: TUser; accessToken: string },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
        try {
          const userData = (await queryFulfilled).data;
          localStorage.setItem("accessToken", userData.accessToken);
          dispatch(userSlice.actions.setUser(userData.user));
        } catch (e) {
          console.log(e);
        }
      },
    }),
    signUp: build.mutation<
      { user: TUser; accessToken: string },
      { name: string; email: string; password: string }
    >({
      query: (body) => ({
        url: "/sign-up",
        method: "POST",
        body,
      }),
      onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
        try {
          const userData = (await queryFulfilled).data;
          localStorage.setItem("accessToken", userData.accessToken);
          dispatch(userSlice.actions.setUser(userData.user));
        } catch (e) {
          console.log(e);
        }
      },
    }),
    isValid: build.query<{ user: TUser; accessToken: string }, string>({
      query: (accessToken) => ({
        url: `/user`,
        params: {
          accessToken: accessToken,
        },
      }),
      onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
        try {
          const userData = (await queryFulfilled).data;
          dispatch(userSlice.actions.setUser(userData.user));
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});
