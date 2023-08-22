import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUser } from "../models/TUser";

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
    }),
  }),
});
